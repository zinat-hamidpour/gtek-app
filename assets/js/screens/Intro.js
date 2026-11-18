/* Generated from design-src/Intro.dc.html by tools/build-screens.py. Do not edit by hand. */
window.SCREENS = window.SCREENS || {};
SCREENS.Intro = {
  name: "Intro",
  css: "",
  html: "<div dir=\"rtl\" style=\"width: 390px; height: 844px; box-sizing: border-box; position: relative; overflow: hidden; background: #EDEAE3; color: #1B1A19; font-family: 'Readex Pro', Vazirmatn, system-ui, sans-serif; font-weight: 300; display: flex; flex-direction: column; padding-top: 44px\">\n\n<div style=\"height: 86px; box-sizing: border-box; padding: 0 28px; display: flex; justify-content: space-between; align-items: flex-start\">\n<div style=\"display: flex; flex-direction: column; gap: 2px\">\n<h1 style=\"margin: 0; font-weight: 400; font-size: 21px; line-height: 1.5\">پروندهٔ معرفی</h1>\n<span style=\"font-size: 13px; color: #55524E\">مهندس رحیمی · پنج بخش قطعی تا ۱ دی</span>\n</div>\n<div role=\"group\" aria-label=\"نمای صفحه\" style=\"display: flex; gap: 2px; padding: 3px; border-radius: 20px; background: #E2DED7; margin-top: 4px\">\n<button type=\"button\" aria-pressed=\"{{isExec}}\" onClick=\"{{asExec}}\" style=\"height: 30px; padding: 0 12px; border-radius: 15px; font-size: 12px; background: {{execBg}}; color: {{execFg}}; transition: background 0.3s ease, color 0.3s ease\">تیم اجرایی</button>\n<button type=\"button\" aria-pressed=\"{{isSpk}}\" onClick=\"{{asSpk}}\" style=\"height: 30px; padding: 0 12px; border-radius: 15px; font-size: 12px; background: {{spkBg}}; color: {{spkFg}}; transition: background 0.3s ease, color 0.3s ease\">سخنران</button>\n</div>\n</div>\n\n<div style=\"height: 168px; box-sizing: border-box; margin: 0 28px; display: flex; gap: 20px; align-items: flex-start\">\n<div style=\"position: relative; width: 100px; height: 128px; flex: none\">\n<svg width=\"100\" height=\"128\" viewBox=\"-3 -3 106 134\" aria-hidden=\"true\" style=\"position: absolute; left: 0; top: 0; overflow: visible\"><polygon points=\"{{photo}}\" style=\"fill: #FAF8F4; stroke: #FAF8F4; stroke-width: 4; stroke-linejoin: round\"></polygon><polygon points=\"{{photo}}\" style=\"fill: #E2DED7\"></polygon></svg>\n<span style=\"position: absolute; left: 0; right: 0; top: 52px; text-align: center; font-size: 12px; color: #55524E\">عکس · ۲ آذر</span>\n</div>\n<div style=\"display: flex; flex-direction: column; gap: 8px; padding-top: 4px; min-width: 0\">\n<span style=\"font-size: 11.5px; color: #55524E; direction: ltr; text-align: right\">GTEK ۱۴۰۵</span>\n<p style=\"margin: 0; font-size: 18px; line-height: 1.6; color: #6B6762\">وقتی کوره خاموش نمی‌شود</p>\n<p style=\"margin: 0; font-size: 12.5px; line-height: 1.8; color: #55524E\">خلاصهٔ سخنرانی هنوز نوشته نشده است.</p>\n</div>\n</div>\n\n<div style=\"flex-grow: 1\"></div>\n\n<sc-for list=\"{{items}}\" as=\"it\" hint-placeholder-count=\"5\">\n<div style=\"position: relative; box-sizing: border-box; height: {{it.h}}px; padding-bottom: {{it.pad}}px; background: {{it.bg}}; color: {{it.fg}}; transition: height 0.5s cubic-bezier(0.6,0,0.2,1)\">\n<sc-if value=\"{{it.pel}}\" hint-placeholder-val=\"{{ false }}\">\n<span aria-hidden=\"true\" style=\"position: absolute; left: 36px; bottom: -38px; width: 76px; height: 76px; border-radius: 50%; background: #D8261C\"></span>\n</sc-if>\n<svg width=\"390\" height=\"16\" viewBox=\"0 0 390 16\" aria-hidden=\"true\" style=\"position: absolute; left: 0; top: -12px\"><path d=\"{{it.tw}}\" style=\"fill: #FAF8F4\"></path><path d=\"{{it.tc}}\" style=\"fill: {{it.bg}}\"></path></svg>\n<div style=\"height: 100%; overflow: hidden; position: relative\">\n<button type=\"button\" aria-expanded=\"{{it.exp}}\" onClick=\"{{it.toggle}}\" style=\"width: 100%; height: 58px; box-sizing: border-box; padding: 0 28px; display: flex; align-items: center; justify-content: space-between; color: inherit; text-align: right\">\n<span style=\"font-size: 16px; font-weight: 400\">{{it.name}}</span>\n<span style=\"font-size: 12px; opacity: 0.8\">{{it.who}}</span>\n</button>\n<div style=\"height: 120px; box-sizing: border-box; padding: 0 28px; display: flex; flex-direction: column; gap: 6px; align-items: flex-start\">\n<p style=\"margin: 0; font-size: 14px; line-height: 1.8\">{{it.text}}</p>\n<span style=\"font-size: 12.5px; opacity: 0.8\">{{it.when}}</span>\n<sc-if value=\"{{it.hasAction}}\" hint-placeholder-val=\"{{ true }}\">\n<button type=\"button\" style=\"margin-top: 4px; height: 44px; padding: 0 22px; border-radius: 22px; background: {{it.btnBg}}; color: {{it.btnFg}}; font-size: 14px; font-weight: 400\">{{it.action}}</button>\n</sc-if>\n</div>\n</div>\n</div>\n</sc-for>\n\n<svg width=\"390\" height=\"844\" aria-hidden=\"true\" style=\"position: absolute; left: 0; top: 0; pointer-events: none; opacity: 0.22\">\n<defs><filter id=\"gtekGrainI\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.7\" numOctaves=\"3\" seed=\"11\"></feTurbulence><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.25  0 0 0 0 0.23  0 0 0 0 0.2  5 0 0 0 -3\"></feColorMatrix></filter></defs>\n<rect width=\"390\" height=\"844\" style=\"fill: transparent; filter: url(#gtekGrainI)\"></rect>\n</svg>\n\n\n\n</div>",
  logic: function () {
class Component extends DCLogic {
renderVals() {
var self = this;
var st = this.state || {};
var role = st.role || 'exec';
var exec = role === 'exec';
var open = st.open !== undefined ? st.open : (exec ? 'title' : 'answers');
function rng(seed) { var s = seed; return function () { s = (s * 16807) % 2147483647; return s / 2147483647; }; }
function rect(w, h, seed) {
var r = rng(seed), p = [], x, y, a = 2.2;
for (x = 0; x < w; x += 6) p.push(x.toFixed(1) + ',' + (r() * a).toFixed(1));
for (y = 0; y < h; y += 6) p.push((w - r() * a).toFixed(1) + ',' + y.toFixed(1));
for (x = w; x > 0; x -= 6) p.push(x.toFixed(1) + ',' + (h - r() * a).toFixed(1));
for (y = h; y > 0; y -= 6) p.push((r() * a).toFixed(1) + ',' + y.toFixed(1));
return p.join(' ');
}
function tear(seed, off) {
var r = rng(seed), amp = 8, y = amp / 2, d = 'M0,' + (y + off).toFixed(1), x = 0;
while (x < 390) {
x = Math.min(390, x + 4.5 + r() * 3);
y = Math.max(0, Math.min(amp, y + (r() - 0.5) * amp * 0.7));
d += ' L' + x.toFixed(1) + ',' + (y + off).toFixed(1);
}
return d + ' L390,16 L0,16 Z';
}
var target = exec ? 'title' : 'answers';
var defs = [
{ k: 'motion', name: 'موشن معرفی', who: 'تیم اجرایی', bg: '#DAD6CE', fg: '#1B1A19', seed: 41,
  ex: ['از عنوان تأییدشده، عکس و پاسخ پرسش‌ها ساخته می‌شود؛ هر سه هنوز کامل نیستند.', 'مهلت: ۱ دی', ''],
  sp: ['تیم اجرایی موشن معرفی شما را از عکس و پاسخ‌هایتان می‌سازد.', 'پیش از رویداد آن را می‌بینید.', ''] },
{ k: 'brochure', name: 'بروشور', who: 'تیم اجرایی و سخنران', bg: '#A8A49D', fg: '#1B1A19', seed: 97,
  ex: ['طراحی با شماست؛ عنوان تأییدشده، عکس و خلاصهٔ سخنران لازم است.', 'مهلت: ۲۰ آذر', ''],
  sp: ['خلاصهٔ سخنرانی‌تان را در چند سطر بنویسید؛ طراحی با تیم اجرایی است.', 'مهلت: ۱۲ آذر', 'نوشتن خلاصه'] },
{ k: 'answers', name: 'پرسش‌ها', who: 'سخنران', bg: '#8B8781', fg: '#1B1A19', seed: 57,
  ex: ['سخنران به ۴ پرسش از ۷ پاسخ داده است.', 'مهلت: ۸ آذر', 'یادآوری به سخنران'],
  sp: ['به ۴ پرسش از ۷ پاسخ داده‌اید.', 'مهلت: ۸ آذر', 'ادامهٔ پاسخ‌ها'] },
{ k: 'photo', name: 'عکس', who: 'تیم اجرایی', bg: '#5E5B57', fg: '#FAF8F4', seed: 12,
  ex: ['جلسهٔ عکاسی هماهنگ شده: ۲ آذر، ساعت ۱۰.', 'پس از عکاسی، عکس انتخابی را این‌جا بگذارید.', 'بارگذاری عکس'],
  sp: ['تیم اجرایی برای عکاسی با شما هماهنگ کرده است.', '۲ آذر، ساعت ۱۰', ''] },
{ k: 'title', name: 'عنوان سخنرانی', who: 'سخنران، تأیید مربی و تیم', bg: '#2B2A29', fg: '#FAF8F4', seed: 88,
  ex: ['پیشنهاد سخنران: «وقتی کوره خاموش نمی‌شود». مربی تأیید کرده؛ نوبت شماست.', 'پس از تأیید، نام سخنرانی همین می‌شود.', 'تأیید عنوان'],
  sp: ['عنوان پیشنهادی شما نزد تیم اجرایی است.', 'پس از تأیید، نام سخنرانی شما همین می‌شود.', ''] }
];
var items = defs.map(function (d, i) {
var c = exec ? d.ex : d.sp, isOpen = open === d.k, last = i === defs.length - 1;
var nxt = defs[i + 1];
var dark = d.fg === '#FAF8F4';
return {
name: d.name, who: d.who, bg: d.bg, fg: d.fg,
text: c[0], when: c[1], action: c[2], hasAction: !!c[2],
btnBg: dark ? '#FAF8F4' : '#1B1A19', btnFg: dark ? '#1B1A19' : '#FAF8F4',
h: (isOpen ? 178 : 58) + (last ? 104 : 0), pad: last ? 104 : 0,
exp: isOpen ? 'true' : 'false',
pel: !!nxt && nxt.k === target,
tw: tear(d.seed, 0), tc: tear(d.seed, 4),
toggle: function () { self.setState({ open: isOpen ? null : d.k }); }
};
});
return {
items: items,
photo: rect(100, 128, 23),
isExec: exec ? 'true' : 'false', isSpk: exec ? 'false' : 'true',
execBg: exec ? '#1B1A19' : 'transparent', execFg: exec ? '#FAF8F4' : '#1B1A19',
spkBg: exec ? 'transparent' : '#1B1A19', spkFg: exec ? '#1B1A19' : '#FAF8F4',
asExec: function () { self.setState({ role: 'exec', open: undefined }); },
asSpk: function () { self.setState({ role: 'spk', open: undefined }); }
};
}
}
return Component;
  }
};
