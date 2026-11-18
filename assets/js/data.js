/*
 * GTEK — all app content lives here, separate from the design.
 * To add a lesson: copy one lesson object inside a skill's `lessons` list and fill its fields.
 * Text in [brackets] is a placeholder still to be written.
 *
 * Lesson unit (content plan, 2026-11-18):
 *   hook      صحنه        — a short opening moment that pulls the reader in
 *   text      متن کوتاه   — the idea, in a few paragraphs (array of paragraphs)
 *   example   نمونه       — one strong example that raises taste
 *   exercise  تمرین       — what to do now
 *   result    حاصل        — the concrete thing the exercise produces (the speaker writes it here)
 *   check     خودسنجی     — short questions to test oneself (array)
 *   deeper    برای عمیق‌تر — optional longer reading
 *
 * `screen` names the designed poster for a skill (design-src/<screen>.dc.html).
 */
window.GTEK = {
  speaker: { name: '[نام سخنران]' },

  // Order of the six lamps on stage (right → left) and of the keys.
  groups: [
    { id: 'build',   title: 'پیش از صحنه · ساختنِ حرف', skills: ['idea', 'narrative', 'frame'] },
    { id: 'perform', title: 'روی صحنه · گفتنِ حرف',      skills: ['presence', 'voice', 'mastery'] }
  ],

  skills: {
    idea: {
      name: 'ایده',
      screen: 'Idea',            // design-src/Idea.dc.html
      motif: 'تای سرخ',
      sentence: 'ایده‌ها را نمی‌سازیم؛ از دل سال‌ها تجربهٔ کاری پیدایش می‌کنیم.',
      lessons: placeholderLessons(3)
    },

    narrative: {
      name: 'روایت',
      screen: 'Narrative',            // design-src/Narrative.dc.html
      motif: 'طومار',
      sentence: 'ایده را تا به تا باز کنید؛ هر تا کمی بیشتر، تا به حرف اصلی برسید.',
      lessons: [
        lesson('چرا قصه', 'یک گزارش کاری را دو بار بگویید: یک بار با عدد، یک بار با یک لحظه.'),
        lesson('صحنه، نه خلاصه', '«آن روز، آن ساعت» را پیدا کنید.'),
        lesson('گره', 'چه چیزی در خطر بود؟ بی‌مانع، قصه‌ای نیست.'),
        lesson('دگرگونی', 'بعد از آن، چه چیزی دیگر مثل قبل نبود؟'),
        lesson('آنچه نمی‌گویی', 'بریدن؛ کوه یخ زیر آب.'),
        lesson('گفتن، نه نوشتن', 'بلند بگویید؛ آزمون بازگفتن.')
      ]
    },

    frame: {
      name: 'قاب',
      motif: 'سه صفحهٔ صحنه',
      sentence: '[جملهٔ عملی مهارت قاب]',
      lessons: placeholderLessons(3)
    },

    presence: {
      name: 'حضور',
      screen: 'Body',            // design-src/Body.dc.html
      motif: 'سایه',
      sentence: '[جملهٔ عملی مهارت حضور]',
      lessons: placeholderLessons(3)
    },

    voice: {
      name: 'صدا',
      screen: 'Voice',            // design-src/Voice.dc.html
      motif: 'گرامافون',
      sentence: 'پیش از هر جملهٔ مهم یک نفس مکث کنید؛ سکوت، شنونده را جلو می‌کشد.',
      lessons: placeholderLessons(3)
    },

    mastery: {
      name: 'تسلط',
      screen: 'Mastery',            // design-src/Mastery.dc.html
      motif: 'چشم‌ها',
      sentence: 'ترس، سالن را یک‌جا می‌بیند. شما یک نفر را ببینید، بعد نفر بعدی را.',
      lessons: placeholderLessons(3)
    }
  }
};

// A lesson with a title and its focus line; the rest of the unit still to be written.
function lesson(title, focus) {
  return {
    title: title,
    focus: focus,
    hook: '[یک لحظهٔ کوتاه که خواننده را به درس می‌کشد]',
    text: ['[متن کوتاه درس]'],
    example: '[یک نمونهٔ قوی]',
    exercise: '[همین حالا چه کنید]',
    result: '[چیزی که تمرین می‌سازد]',
    check: ['[پرسش خودسنجی]'],
    deeper: ''
  };
}

function placeholderLessons(n) {
  var out = [];
  for (var i = 1; i <= n; i++) out.push(lesson('[عنوان درس ' + i + ']', '[یک خط: این درس به چه می‌رسد]'));
  return out;
}
