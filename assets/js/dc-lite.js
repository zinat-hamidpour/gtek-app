/*
 * dc-lite — plays a screen designed on the canvas (.dc.html) inside the app, unchanged.
 * Supports what the GTEK screens use: {{holes}} in text and attributes, onClick="{{fn}}",
 * <sc-if value="{{x}}">, <sc-for list="{{xs}}" as="it">, and a Component class with state/setState.
 * Screens are converted by tools/build-screens.py into assets/js/screens/<Name>.js.
 */
(function () {
  function DCLogic() { this.props = {}; this.state = null; }
  DCLogic.prototype.setState = function (patch) {
    this.state = Object.assign({}, this.state, patch);
    if (this._render) this._render();
  };
  DCLogic.prototype.forceUpdate = function () { if (this._render) this._render(); };
  window.DCLogic = DCLogic;

  var HOLE = /\{\{\{?\s*([^{}]+?)\s*\}?\}\}/g;

  function lookup(scope, path) {
    path = path.trim();
    if (path === 'true') return true;
    if (path === 'false') return false;
    if (/^-?\d+(\.\d+)?$/.test(path)) return parseFloat(path);
    return path.split('.').reduce(function (o, k) { return o == null ? undefined : o[k]; }, scope);
  }

  // One whole-value hole → the raw value (function, array…); otherwise interpolate as text.
  function value(str, scope) {
    var m = /^\s*\{\{\{?\s*([^{}]+?)\s*\}?\}\}\s*$/.exec(str);
    if (m) return lookup(scope, m[1]);
    return str.replace(HOLE, function (_, p) { var v = lookup(scope, p); return v == null ? '' : v; });
  }

  function walk(node, scope, out) {
    if (node.nodeType === 3) {
      out.appendChild(document.createTextNode(String(value(node.nodeValue, scope) ?? '')));
      return;
    }
    if (node.nodeType !== 1) return;
    var tag = node.tagName.toLowerCase();

    if (tag === 'sc-if') {
      if (value(node.getAttribute('value'), scope)) kids(node, scope, out);
      return;
    }
    if (tag === 'sc-for') {
      var list = value(node.getAttribute('list'), scope) || [], as = node.getAttribute('as') || 'item';
      list.forEach(function (it, i) {
        var s = Object.create(scope); s[as] = it; s.$index = i;
        kids(node, s, out);
      });
      return;
    }

    var ns = node.namespaceURI;
    var el = ns && ns !== 'http://www.w3.org/1999/xhtml' ? document.createElementNS(ns, node.localName) : document.createElement(tag);
    Array.prototype.forEach.call(node.attributes, function (a) {
      if (/^on[a-z]+$/i.test(a.name)) {
        var fn = value(a.value, scope);
        if (typeof fn === 'function') { el.addEventListener(a.name.slice(2).toLowerCase(), fn); el.setAttribute('data-bound', ''); }
        return;
      }
      if (/^hint-/.test(a.name)) return;
      var v = value(a.value, scope);
      if (v === undefined || v === null || v === false) return;
      el.setAttribute(a.name, v === true ? '' : v);
    });
    kids(node.content || node, scope, el);
    out.appendChild(el);
  }
  function kids(node, scope, out) {
    Array.prototype.forEach.call(node.childNodes, function (c) { walk(c, scope, out); });
  }

  // screen = { css, html, logic: function () { return Component; } }
  window.mountScreen = function (screen, host, after) {
    if (screen.css && !document.getElementById('css-' + screen.name)) {
      var st = document.createElement('style'); st.id = 'css-' + screen.name; st.textContent = screen.css;
      document.head.appendChild(st);
    }
    var tpl = new DOMParser().parseFromString('<body>' + screen.html + '</body>', 'text/html').body;
    var Comp = screen.logic(), c = new Comp();
    c._render = function () {
      var frag = document.createDocumentFragment();
      kids(tpl, c.renderVals ? c.renderVals() : {}, frag);
      host.innerHTML = '';
      host.appendChild(frag);
      if (after) after(host);
    };
    c._render();
    return c;
  };
})();
