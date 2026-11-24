/* Skill page: header, one sentence, the skill's illustration, two capsules, the list of lessons.
 * The illustration slot shows a placeholder until each page's picture is ported from the design canvas. */
(function () {
  var D = App.data, id = App.param('s');
  if (!D.skills[id]) { location.replace('skills.html'); return; }
  var s = D.skills[id], st = App.skillState(id), next = App.nextLesson(id);
  document.title = 'GTEK · ' + s.name;

  var nextTitle = s.lessons[next].title;
  var kicker = st.state === 'on' ? 'همهٔ درس‌ها کامل شده'
    : 'درس ' + App.ordinal(next + 1) + ' · ' + nextTitle.replace(/^\[|\]$/g, '');

  var lessons = s.lessons.map(function (l, i) {
    var done = App.isDone(id, i), isNext = !done && i === next && st.state !== 'on';
    var meta = done ? 'انجام شد' : (isNext ? (st.done ? 'ادامه' : 'شروع') : 'درس ' + App.ordinal(i + 1));
    return '<a class="card' + (isNext ? ' now' : '') + '" href="lesson.html?s=' + id + '&l=' + i + '">' +
      '<span class="body"><span class="meta">' + meta + '</span><span class="title">' + App.text(l.title) + '</span></span>' +
      (done ? '<span class="done-dot" aria-label="انجام شد"></span>' : '') +
      '<span class="arrow-disc">' + App.arrow + '</span></a>';
  }).join('');

  var lessonList =
    '<section class="section" id="lessons" aria-label="درس‌ها"><div class="section-head"><span>درس‌ها</span></div><div class="cards">' + lessons + '</div></section>';
  var nextHref = 'lesson.html?s=' + id + '&l=' + next;
  var page = document.getElementById('page');

  if (s.screen) {
    // The designed poster plays as it is; its second button opens the next lesson.
    page.innerHTML = '<div class="poster" id="poster"></div>' + lessonList;
    App.loadScreen(s.screen, function (screen) {
      mountScreen(screen, document.getElementById('poster'), function (host) {
        host.querySelectorAll('button:not([data-bound])').forEach(function (b) {
          b.addEventListener('click', function () { location.href = nextHref; });
        });
      });
    });
  } else {
    // No poster yet: header, sentence, illustration slot, two capsules.
    page.innerHTML =
      '<header class="page-header"><h1>' + s.name + '</h1>' + App.backLink('skills.html', 'مهارت‌ها') + '</header>' +
      '<div class="lead"><p class="kicker">' + App.esc(kicker) + '</p><p class="sentence">' + App.text(s.sentence) + '</p></div>' +
      '<div class="illustration" role="img" aria-label="جای تصویرسازی ' + s.name + '"><span class="pellet"></span><strong>' + s.motif + '</strong>' +
      'تصویرسازی این مهارت هنوز طراحی نشده.</div>' +
      '<div class="skill-actions capsules">' +
      '<a class="capsule primary" href="' + nextHref + '"><svg viewBox="0 0 14 14" width="14" height="14" aria-hidden="true"><circle cx="7" cy="7" r="6" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="7" cy="7" r="3" fill="currentColor"/></svg>' +
      (st.state === 'on' ? 'مرور درس‌ها' : (st.done ? 'ادامهٔ درس' : 'شروع درس')) + '</a>' +
      '<a class="capsule secondary" href="#lessons">همهٔ درس‌ها</a></div>' + lessonList;
  }

  App.nav('skills');
})();
