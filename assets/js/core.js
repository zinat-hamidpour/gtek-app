/*
 * GTEK — shared logic: progress, skill state, nav plate, small helpers.
 * Progress is kept in this browser (localStorage) for the demo.
 * In the real app it comes from the server, and a skill is complete only when the coach approves it.
 */
(function () {
  var KEY = 'gtek.progress.v1';
  var D = window.GTEK;

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { done: {}, notes: {} }; }
    catch (e) { return { done: {}, notes: {} }; }
  }
  function save(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {} }

  var P = load();

  var api = {
    data: D,

    // Every skill id in stage order (right → left lamps).
    order: function () {
      return D.groups.reduce(function (a, g) { return a.concat(g.skills); }, []);
    },

    isDone: function (skill, i) { return !!(P.done[skill] && P.done[skill][i]); },

    markDone: function (skill, i) {
      P.done[skill] = P.done[skill] || {};
      P.done[skill][i] = true;
      save(P);
    },

    note: function (skill, i, value) {
      var k = skill + ':' + i;
      if (value === undefined) return P.notes[k] || '';
      P.notes[k] = value; save(P);
    },

    reset: function () { P = { done: {}, notes: {} }; save(P); },

    // Sign out on this phone: forget the remembered sign-in and go back to the login page.
    signOut: function () { try { localStorage.removeItem('gtek.login.v1'); } catch (e) {} location.href = 'index.html'; },

    // How far a skill is: lessons done, total, state on | warm | off.
    skillState: function (id) {
      var s = D.skills[id], total = s.lessons.length, n = 0;
      for (var i = 0; i < total; i++) if (api.isDone(id, i)) n++;
      return { done: n, total: total, state: n === total ? 'on' : (n > 0 ? 'warm' : 'off') };
    },

    // The one skill to continue: first one in progress, else first not complete.
    currentSkill: function () {
      var ids = api.order(), first = null;
      for (var i = 0; i < ids.length; i++) {
        var st = api.skillState(ids[i]).state;
        if (st === 'warm') return ids[i];
        if (st === 'off' && !first) first = ids[i];
      }
      return first;
    },

    nextLesson: function (id) {
      var s = D.skills[id];
      for (var i = 0; i < s.lessons.length; i++) if (!api.isDone(id, i)) return i;
      return 0;
    },

    fa: function (n) { return String(n).replace(/\d/g, function (d) { return '۰۱۲۳۴۵۶۷۸۹'[d]; }); },
    ordinal: function (n) { return ['اول', 'دوم', 'سوم', 'چهارم', 'پنجم', 'ششم', 'هفتم', 'هشتم', 'نهم', 'دهم'][n - 1] || api.fa(n); },
    words: ['هیچ', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش'],

    // Load a designed screen (assets/js/screens/<name>.js) once, then hand it over.
    loadScreen: function (name, done) {
      if (window.SCREENS && SCREENS[name]) return done(SCREENS[name]);
      var t = document.createElement('script');
      t.src = 'assets/js/screens/' + name + '.js';
      t.onload = function () { done(SCREENS[name]); };
      document.body.appendChild(t);
    },

    param: function (k) { return new URLSearchParams(location.search).get(k); },

    esc: function (t) {
      return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
    },

    // Text in [brackets] is a placeholder: shown muted.
    text: function (t) {
      var e = api.esc(t);
      return /^\[.*\]$/.test(t) ? '<span class="placeholder">' + e + '</span>' : e;
    },

    arrow: '<svg viewBox="0 0 18 18" width="16" height="16" aria-hidden="true"><path d="M14 9H4M8.5 4.5L4 9l4.5 4.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',

    backLink: function (href, label) {
      return '<a class="back" href="' + href + '">' + api.esc(label) +
        '<svg viewBox="0 0 18 18" width="16" height="16" aria-hidden="true"><path d="M14 9H4M8.5 4.5L4 9l4.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>';
    },

    // NavPlate: four tabs, dot glyphs, open tab red.
    nav: function (active) {
      var g = {
        skills: '<circle cx="28" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="39" cy="21" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="28" cy="21" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="17" cy="21" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="28" cy="32" r="3.8" fill="currentColor"/><circle cx="28" cy="43" r="3.8" fill="currentColor"/>',
        stage: '<circle cx="40" cy="12" r="3" fill="currentColor"/><circle cx="28" cy="12" r="2.4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="16" cy="12" r="2.4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="28" cy="35" r="12" fill="none" stroke="currentColor" stroke-width="1.8"/>',
        archive: [13.75, 23.25, 32.75, 42.25].map(function (x) { return '<circle cx="' + x + '" cy="18.5" r="2.2" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="' + x + '" cy="28" r="2.8" fill="currentColor"/><circle cx="' + x + '" cy="37.5" r="2.8" fill="currentColor"/>'; }).join(''),
        profile: '<circle cx="28" cy="28" r="5" fill="currentColor"/><circle cx="28" cy="28" r="11.5" fill="none" stroke="currentColor" stroke-width="1.8"/>'
      };
      var tabs = [['skills', 'مهارت‌ها', 'skills.html'], ['stage', 'صحنه', 'stage.html'], ['archive', 'آرشیو', 'archive.html'], ['profile', 'نمایه', 'profile.html']];
      var el = document.createElement('nav');
      el.className = 'nav';
      el.setAttribute('aria-label', 'بخش‌های اپ');
      el.innerHTML = tabs.map(function (t) {
        return '<a href="' + t[2] + '"' + (t[0] === active ? ' aria-current="page"' : '') + '><svg viewBox="0 0 56 56" width="40" height="40" aria-hidden="true">' + g[t[0]] + '</svg>' + t[1] + '</a>';
      }).join('');
      document.body.appendChild(el);
    }
  };

  window.App = api;

  // Phone fit: designed screens are 390×844. They follow the phone's width (--s),
  // and full screens grow in height with plain paper/ground, never by stretching the picture.
  function fit() {
    var app = document.querySelector('.app');
    var w = app ? app.clientWidth : Math.min(innerWidth, 390);
    var s = w / 390, r = document.documentElement.style;
    r.setProperty('--s', s.toFixed(4));
    r.setProperty('--fill-h', (innerHeight / s).toFixed(1) + 'px');
  }
  fit();
  addEventListener('resize', fit);
  addEventListener('DOMContentLoaded', fit);
})();
