/* Generated from design-src/Stage.dc.html by tools/build-screens.py. Do not edit by hand. */
window.SCREENS = window.SCREENS || {};
SCREENS.Stage = {
  name: "Stage",
  css: "",
  html: "<div dir=\"rtl\" style=\"width: 390px; height: 844px; box-sizing: border-box; position: relative; overflow: hidden; background: #EDEAE3; color: #1B1A19; font-family: 'Readex Pro', Vazirmatn, system-ui, sans-serif; font-weight: 300\">\n\n<div style=\"position: absolute; left: 28px; right: 28px; top: 48px; display: flex; flex-direction: column; gap: 14px\">\n<div style=\"height: 30px; display: flex; align-items: baseline; justify-content: space-between\">\n<h1 style=\"margin: 0; font-weight: 400; font-size: 21px; line-height: 1.4\">صحنه</h1>\n<span style=\"font-size: 13px; color: #55524E\">مهندس رحیمی</span>\n</div>\n<div style=\"display: flex; flex-direction: column; gap: 2px; font-size: 13px; line-height: 1.8; color: #55524E\">\n<span>روز صحنه · {{eventDay}}</span>\n<span>ورود ۸:۳۰ · اجرای شما ۱۰:۴۰، ۱۸ دقیقه</span>\n</div>\n</div>\n\n<button type=\"button\" aria-label=\"پردهٔ راست\" aria-pressed=\"{{pR}}\" onClick=\"{{selR}}\" style=\"position: absolute; left: 296px; top: 200px; width: 64px; height: 114px; transition: transform 0.4s cubic-bezier(0.3,0.7,0.2,1), filter 0.4s ease; transform: {{tfR}}; filter: {{shR}}\">\n<svg width=\"64\" height=\"114\" viewBox=\"-3 -3 70 120\" aria-hidden=\"true\" style=\"overflow: visible\"><polygon points=\"{{portR}}\" style=\"fill: #FAF8F4; stroke: #FAF8F4; stroke-width: 4; stroke-linejoin: round\"></polygon><polygon points=\"{{portR}}\" style=\"fill: #1B1A19\"></polygon></svg>\n</button>\n\n<button type=\"button\" aria-label=\"پردهٔ میانی\" aria-pressed=\"{{pC}}\" onClick=\"{{selC}}\" style=\"position: absolute; left: 112px; top: 216px; width: 166px; height: 94px; transition: transform 0.4s cubic-bezier(0.3,0.7,0.2,1), filter 0.4s ease; transform: {{tfC}}; filter: {{shC}}\">\n<svg width=\"166\" height=\"94\" viewBox=\"-3 -3 172 100\" aria-hidden=\"true\" style=\"overflow: visible\"><polygon points=\"{{land}}\" style=\"fill: #FAF8F4; stroke: #FAF8F4; stroke-width: 4; stroke-linejoin: round\"></polygon><polygon points=\"{{land}}\" style=\"fill: #8B8781\"></polygon></svg>\n</button>\n\n<button type=\"button\" aria-label=\"پردهٔ چپ\" aria-pressed=\"{{pL}}\" onClick=\"{{selL}}\" style=\"position: absolute; left: 30px; top: 200px; width: 64px; height: 114px; transition: transform 0.4s cubic-bezier(0.3,0.7,0.2,1), filter 0.4s ease; transform: {{tfL}}; filter: {{shL}}\">\n<svg width=\"64\" height=\"114\" viewBox=\"-3 -3 70 120\" aria-hidden=\"true\" style=\"overflow: visible\"><polygon points=\"{{portL}}\" style=\"fill: #FAF8F4; stroke: #FAF8F4; stroke-width: 4; stroke-linejoin: round\"></polygon><polygon points=\"{{portL}}\" style=\"fill: #E2DED7\"></polygon></svg>\n</button>\n\n<div style=\"position: absolute; left: 0; right: 0; top: 352px; bottom: 0; background: #2B2A29; color: #FAF8F4\">\n<svg width=\"390\" height=\"16\" viewBox=\"0 0 390 16\" aria-hidden=\"true\" style=\"position: absolute; left: 0; top: -12px\"><path d=\"{{floorW}}\" style=\"fill: #FAF8F4\"></path><path d=\"{{floorC}}\" style=\"fill: #2B2A29\"></path></svg>\n<span aria-hidden=\"true\" style=\"position: absolute; left: 135px; top: 18px; width: 120px; height: 22px; border-radius: 50%; background: #D8261C\"></span>\n<div style=\"position: absolute; left: 28px; right: 28px; top: 74px; display: flex; flex-direction: column; gap: 10px; align-items: flex-start\">\n<span style=\"font-size: 12.5px; color: #C6C2BA\">{{spec}}</span>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.8\">{{status}}</p>\n<sc-if value=\"{{hasNote}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display: flex; flex-direction: column; gap: 2px; margin-top: 2px\">\n<span style=\"font-size: 12.5px; color: #C6C2BA\">یادداشت مربی بر نسخهٔ ۱</span>\n<p style=\"margin: 0; font-size: 14px; line-height: 1.8; color: #E2DED7\">{{note}}</p>\n</div>\n</sc-if>\n<button type=\"button\" style=\"margin-top: 8px; height: 44px; padding: 0 22px; border-radius: 22px; background: #FAF8F4; color: #1B1A19; font-size: 14px; font-weight: 400\">{{action}}</button>\n</div>\n<p style=\"position: absolute; left: 28px; right: 28px; bottom: 116px; margin: 0; font-size: 12.5px; line-height: 1.8; color: #A8A49D\">پرده‌ها ۴۸ ساعت پیش از رویداد قفل می‌شوند{{countdown}}</p>\n</div>\n\n<svg width=\"390\" height=\"844\" aria-hidden=\"true\" style=\"position: absolute; left: 0; top: 0; pointer-events: none; opacity: 0.22\">\n<defs><filter id=\"gtekGrainS\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.7\" numOctaves=\"3\" seed=\"11\"></feTurbulence><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.25  0 0 0 0 0.23  0 0 0 0 0.2  5 0 0 0 -3\"></feColorMatrix></filter></defs>\n<rect width=\"390\" height=\"844\" style=\"fill: transparent; filter: url(#gtekGrainS)\"></rect>\n</svg>\n\n\n\n</div>",
  logic: function () {
class Component extends DCLogic {
renderVals() {
var self = this;
var sel = (this.state && this.state.sel) || 'c';
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
var info = {
r: { spec: 'پردهٔ راست · عمودی ۱۰۸۰×۱۹۲۰', status: 'نسخهٔ ۳ تأیید شده است.', note: '', action: 'دیدن نسخه' },
c: { spec: 'پردهٔ میانی · افقی ۱۹۲۰×۱۰۸۰', status: 'نسخهٔ ۲ نزد مربی است؛ پاسخ تا ۴۸ ساعت.', note: 'عنوان را کوتاه‌تر کنید؛ از ردیف آخر سالن خوانده نمی‌شود.', action: 'بارگذاری نسخهٔ تازه' },
l: { spec: 'پردهٔ چپ · عمودی ۱۰۸۰×۱۹۲۰', status: 'هنوز فایلی بارگذاری نکرده‌اید.', note: '', action: 'بارگذاری' }
};
var lift = 'translateY(-8px)', rest = 'translateY(0)';
var sh = 'drop-shadow(0 14px 12px rgba(20,19,19,0.32))', none = 'none';
var pick = function (k) { return function () { self.setState({ sel: k }); }; };
var i = info[sel];
var ev = this.props.event || { date: '2027-02-13', showCountdown: true };
var evDate = new Date(ev.date + 'T00:00:00'), today = new Date(); today.setHours(0, 0, 0, 0);
var left = Math.round((evDate - today) / 86400000);
var eventDay = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { day: 'numeric', month: 'long', year: 'numeric' }).format(evDate);
var countdown = ev.showCountdown && left >= 0 ? ' · ' + (left === 0 ? 'امروز' : left.toLocaleString('fa-IR') + ' روز مانده') : '';
return {
eventDay: eventDay, countdown: countdown,
spec: i.spec, status: i.status, note: i.note, hasNote: !!i.note, action: i.action,
tfR: sel === 'r' ? lift : rest, tfC: sel === 'c' ? lift : rest, tfL: sel === 'l' ? lift : rest,
shR: sel === 'r' ? sh : none, shC: sel === 'c' ? sh : none, shL: sel === 'l' ? sh : none,
pR: sel === 'r' ? 'true' : 'false', pC: sel === 'c' ? 'true' : 'false', pL: sel === 'l' ? 'true' : 'false',
selR: pick('r'), selC: pick('c'), selL: pick('l'),
portR: rect(64, 114, 23), portL: rect(64, 114, 71), land: rect(166, 94, 45),
floorW: tear(140, 0), floorC: tear(140, 4)
};
}
}
return Component;
  }
};
