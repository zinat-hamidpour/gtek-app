"""Convert canvas screens (design-src/*.dc.html) into app scripts (assets/js/screens/*.js).
Run after copying a newer screen from the design canvas:  python3 tools/build-screens.py
"""
import json, pathlib, re
root = pathlib.Path(__file__).resolve().parent.parent
out = root / 'assets/js/screens'
out.mkdir(parents=True, exist_ok=True)
for f in sorted((root / 'design-src').glob('*.dc.html')):
    src = f.read_text(encoding='utf-8')
    name = f.name.split('.')[0]
    xdc = re.search(r'<x-dc>(.*)</x-dc>', src, re.S).group(1)
    helmet = re.search(r'<helmet>(.*?)</helmet>', xdc, re.S)
    css = ''.join(re.findall(r'<style>(.*?)</style>', helmet.group(1), re.S)) if helmet else ''
    css = re.sub(r'body\{[^}]*\}|a\{[^}]*\}a:hover\{[^}]*\}|button\{[^}]*\}', '', css)
    html = xdc[helmet.end():] if helmet else xdc
    html = re.sub(r'<nav\b.*?</nav>', '', html, flags=re.S)          # the app draws its own nav plate
    html = html.replace('href="Skills.dc.html"', 'href="skills.html"')
    logic = re.search(r'<script type="text/x-dc"[^>]*>(.*?)</script>', src, re.S).group(1)
    js = ('/* Generated from design-src/%s by tools/build-screens.py. Do not edit by hand. */\n'
          'window.SCREENS = window.SCREENS || {};\n'
          'SCREENS.%s = {\n  name: %s,\n  css: %s,\n  html: %s,\n  logic: function () {\n%s\nreturn Component;\n  }\n};\n'
          % (f.name, name, json.dumps(name), json.dumps(css.strip(), ensure_ascii=False),
             json.dumps(html.strip(), ensure_ascii=False), logic.strip()))
    (out / (name + '.js')).write_text(js, encoding='utf-8')
    print('built', name)
