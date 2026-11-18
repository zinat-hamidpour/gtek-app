/* Lesson page: one unit — صحنه، متن، نمونه، تمرین، حاصل، خودسنجی، برای عمیق‌تر.
 * The speaker writes the result of the exercise here; it is kept in this browser for the demo. */
(function () {
  var D = App.data, id = App.param('s'), i = parseInt(App.param('l'), 10) || 0;
  var s = D.skills[id];
  if (!s || !s.lessons[i]) { location.replace('skills.html'); return; }
  var l = s.lessons[i], last = i === s.lessons.length - 1;
  document.title = 'GTEK · ' + s.name + ' · ' + l.title;

  function block(cls, label, inner) {
    return '<section class="block ' + cls + '"><div class="label">' + label + '</div>' + inner + '</section>';
  }
  var paras = (Array.isArray(l.text) ? l.text : [l.text]).map(function (p) { return '<p>' + App.text(p) + '</p>'; }).join('');

  var html =
    '<header class="page-header"><h1>' + App.text(l.title) + '</h1>' + App.backLink('skill.html?s=' + id, s.name) + '</header>' +
    '<div class="lead"><p class="kicker">' + s.name + ' · درس ' + App.ordinal(i + 1) + ' از ' + App.fa(s.lessons.length) + '</p>' +
    '<p class="sentence">' + App.text(l.focus) + '</p></div>' +
    '<div class="unit">' +
    block('hook', 'صحنه', '<p>' + App.text(l.hook) + '</p>') +
    block('text', 'متن', paras) +
    block('example', 'نمونه', '<p>' + App.text(l.example) + '</p>') +
    block('exercise', 'تمرین', '<p>' + App.text(l.exercise) + '</p>' +
      '<label class="label" for="result" style="display:block;margin-top:14px;color:var(--layer-3);font-size:12.5px">حاصل · ' + App.esc(l.result.replace(/^\[|\]$/g, '')) + '</label>' +
      '<textarea id="result" placeholder="همین‌جا بنویسید…"></textarea>') +
    block('check', 'خودسنجی', l.check.map(function (q, k) {
      return '<label class="check"><input type="checkbox" id="c' + k + '"><span>' + App.text(q) + '</span></label>';
    }).join('')) +
    (l.deeper ? block('deeper', 'برای عمیق‌تر', '<p>' + App.text(l.deeper) + '</p>') : '') +
    '</div>' +
    '<div class="lesson-end">' +
    '<button class="capsule primary" id="finish" type="button">' + (App.isDone(id, i) ? 'دوباره انجام شد' : 'پایان درس') + '</button>' +
    '<a class="capsule secondary" href="skill.html?s=' + id + '">برگشت به ' + s.name + '</a></div>';

  document.getElementById('page').innerHTML = html;

  var ta = document.getElementById('result');
  ta.value = App.note(id, i);
  ta.addEventListener('input', function () { App.note(id, i, ta.value); });

  document.getElementById('finish').addEventListener('click', function () {
    App.markDone(id, i);
    // After the last lesson, go back to the stage to see the lamp light.
    location.href = last ? 'skills.html' : 'lesson.html?s=' + id + '&l=' + (i + 1);
  });

  App.nav('skills');
})();
