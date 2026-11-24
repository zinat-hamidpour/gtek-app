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
- Red (`--pellet` #D8261C) is sparing and deliberate: the pellet / red circle / done dot. More than one red in a frame is fine when it helps the balance of the design. Nav glyph uses `--pellet-hot`.
- No bold, no large text: largest is 21px/400. Font Readex Pro.
- Torn paper only inside illustrations and signature moments, never to section the UI. UI sections = plain paper + 12.5px label + cards/keys.
- Every tappable thing must look like a button (card/key with shadow + arrow).
- Nothing is locked. Progress = lesson bars, lamps on the stage; no percentages.
- No dotted/dashed lines, no glow, no blur shadows on illustrations, no emoji.

## Approved screens
- Final (do not change without asking Zinat): login `index.html`, skills page `design-src/Skills.dc.html` («صحنهٔ گرد»). Their own exceptions stand: bold «ورود» on login, skill keys without arrows.
- Every other page is not approved yet; Zinat approves them one by one. Don't redesign them on your own.

## Decisions to remember
- Login fonts were unified to Readex Pro. Before that they were Vazirmatn 400/600 + IBM Plex Mono (side line, REPLAY): see `index.html` at commit `af6f3c7`. Zinat may want it back.
- Login is phone + password. Once signed in, the phone remembers it (localStorage). Never store the password itself.
- Skills page (approved changes, 2026-11-24): the next lamp is warm (faint beam); a soft pool of light (its lamp off-stage, not drawn) lies on the empty stage until the first lamp lights; carpet starts at a muted red; touching a lamp lights it only while held (a toy, never changes progress); each time the app is opened (once per session) the six lamps light and go out in turn, a light dance.
- The event date lives in `data.js` (`event`). It changes often, so the countdown is computed from today and hidden for now (`showCountdown: false`).

## Working style
- Before a change: say in one line what you will change. After: open the page at phone size, check it, then commit with a short message.
- One topic per commit. Ask before large restructures.
