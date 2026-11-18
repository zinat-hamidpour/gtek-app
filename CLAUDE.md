# GTEK app — instructions for Claude

Speaker-training app for Gol Gohar's TED-style talk program (GTEK). Owner: Zinat (product/design lead). She writes in Persian; reply in Persian, keep technical terms in English. She is learning Git/GitHub: explain each git step briefly when you use it.

## Source of truth
- This repository is the source of truth for the app. The Claude Design canvas «رگه» is only for exploring new ideas.
- Design system «GTEK · رگه»: https://claude.ai/artifact/DGfXJpsrrRoAvarXDncikC. Its tokens are in `design-system/tokens.json`; `assets/css/tokens.css` is generated from it (never hand-edit tokens.css).

## Structure (plain HTML/CSS/JS, no build step, no framework)
- `index.html` login motion → `skills.html` (stage + six keys) → `skill.html?s=<id>` (poster + lesson list) → `lesson.html?s=<id>&l=<n>`.
- Tabs: `stage.html`, `archive.html`, `profile.html`.
- `assets/js/data.js` holds ALL content. `core.js` = progress (localStorage), skill state, nav plate. Skill ids: idea, narrative, frame (قاب), presence, voice, mastery.
- Designed posters: `design-src/*.dc.html` (from the canvas) → `python3 tools/build-screens.py` → `assets/js/screens/*.js`, played by `assets/js/dc-lite.js`. Never edit `assets/js/screens/*.js` by hand; edit `design-src/` and rebuild.

## Design rules (decided by Zinat — do not break)
- Phone first: design at 390×844, must also work at 360×780 and 430×932. On a desktop the app sits centred at 390 wide.
- One red (`--pellet` #D8261C) per frame: the pellet / red circle / done dot. Nav glyph uses `--pellet-hot`.
- No bold, no large text: largest is 21px/400. Font Readex Pro.
- Torn paper only inside illustrations and signature moments, never to section the UI. UI sections = plain paper + 12.5px label + cards/keys.
- Every tappable thing must look like a button (card/key with shadow + arrow).
- Nothing is locked. Progress = lesson bars, lamps on the stage; no percentages.
- No dotted/dashed lines, no glow, no blur shadows on illustrations, no emoji.

## Working style
- Before a change: say in one line what you will change. After: open the page at phone size, check it, then commit with a short message.
- One topic per commit. Ask before large restructures.
