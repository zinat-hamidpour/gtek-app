/* Skills page: six lamps on stage + two rows of keys. */
(function () {
  var D = App.data, ids = App.order();
  var root = document.documentElement.style;

  // ---- Stage lamps
  var lit = 0, warm = 0;
  ids.forEach(function (id, k) {
    var st = App.skillState(id).state;
    if (st === 'on') lit++;
    if (st === 'warm') warm++;
    root.setProperty('--k' + k + '-face', st === 'on' ? '#FAF8F4' : (st === 'warm' ? '#8B8781' : '#3B3835'));
    root.setProperty('--k' + k + '-beam', st === 'on' ? 0.13 : (st === 'warm' ? 0.045 : 0));
    root.setProperty('--k' + k + '-rim', st === 'off' ? '1px' : '0px');
  });
  root.setProperty('--pool', (0.018 * lit + 0.008 * warm).toFixed(3));
  root.setProperty('--shOp', (0.85 * (1 - lit / 6)).toFixed(2));
  var t = (lit + 0.4 * warm) / 6, a = [62, 59, 56], b = [122, 117, 111];
  root.setProperty('--scr', 'rgb(' + a.map(function (v, j) { return Math.round(v + (b[j] - v) * t); }).join(',') + ')');
  var sh = document.getElementById('shadow');
  sh.setAttribute('rx', 60 - 7 * lit);
  sh.setAttribute('cx', 222 - 4 * lit);

  var w = App.words;
  document.getElementById('kicker').textContent =
    lit === 6 ? 'همهٔ نورها روشن است. صحنه آمادهٔ شماست.'
    : (lit === 0 && warm === 0 ? 'هر مهارتی که کامل شود، یک نور صحنه روشن می‌شود.'
    : w[lit] + ' نور از شش روشن است' + (warm ? ' · ' + w[warm] + ' نور در حال گرم شدن' : ''));
  document.getElementById('scene').setAttribute('aria-label',
    'مردی کوچک روی دایرهٔ سرخ وسط صحنه، جلوی سه صفحه؛ ' + w[lit] + ' چراغ از شش چراغ رویش روشن است');

  // ---- Keys
  var current = App.currentSkill();
  document.getElementById('groups').innerHTML = D.groups.map(function (g) {
    return '<section class="section" aria-label="' + App.esc(g.title) + '">' +
      '<div class="section-head"><span>' + App.esc(g.title) + '</span></div>' +
      '<div class="keys">' + g.skills.map(function (id) {
        var s = D.skills[id], st = App.skillState(id), now = id === current;
        var meta = st.state === 'on' ? 'کامل'
          : (st.done > 0 ? 'درس ' + App.fa(st.done + 1) + ' از ' + App.fa(st.total)
          : (now ? 'شروع' : App.fa(st.total) + ' درس'));
        var pct = Math.round(100 * st.done / st.total);
        return '<a class="key' + (now ? ' now' : '') + '" href="skill.html?s=' + id + '" aria-label="' + s.name + ' · ' + meta + ' · ورود به مهارت">' +
          '<span class="top"><span>' + meta + '</span>' + App.arrow + '</span>' +
          '<span class="bottom"><span class="name">' + s.name + '</span>' +
          '<span class="bar"><i style="width:' + pct + '%"></i>' + (st.state === 'on' ? '<span class="vein"></span>' : '') + '</span></span></a>';
      }).join('') + '</div></section>';
  }).join('');

  App.nav('skills');
})();
