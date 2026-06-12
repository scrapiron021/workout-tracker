# Workout Tracker

A personal workout tracker — plain HTML/CSS/JavaScript, no build step, no install.
All data is saved in your browser's localStorage.

## How to run

Double-click `index.html` (or right-click → Open with → your browser). That's it.

Notes:
- Data is saved **per browser, per device**. Use the same browser each time so your history is in one place.
- The bodyweight chart loads Chart.js from a CDN, so it needs internet the first time. Everything else works offline.

## Tabs

- **Lift** — alternating Day A / Day B full-body program. Suggests your next day automatically (opposite of the last day you logged), shows last session's weight × reps next to the inputs for progressive overload, and keeps a per-exercise history.
- **Cardio** — date, type, duration, optional distance, notes.
- **Mobility** — nightly checklist (resets each day).
- **Protein** — running daily total vs. an editable target (default 200 g), quick "+30 g" shake button, daily history.
- **Weight** — bodyweight log with optional waist measurement, trend-focused line chart, editable goal (default 280 lb).

## Backup your data

Weight tab → "Data backup" → **Export backup** downloads a JSON file with everything.
**Import** restores from a backup file (replaces all data on the device, with a confirmation
prompt). Export every couple of weeks, and use export/import to move data between devices.

## PWA / iPhone install

The app is an installable PWA (manifest + service worker, works offline after first load).
Installing on an iPhone requires the app to be served over HTTPS — host the `workout-tracker`
folder on any static host (GitHub Pages, Netlify, Cloudflare Pages), open the URL in Safari
on the phone, then Share → "Add to Home Screen."

Note: opening `index.html` directly from disk (file://) still works fine for everyday use —
the service worker just doesn't register there, which is harmless.

## Files

- `index.html` — page structure and the five tabs
- `style.css` — mobile-first styles (light + dark via system setting)
- `app.js` — program data, localStorage handling, all logic
- `manifest.json` — PWA install metadata
- `sw.js` — service worker (offline caching)
- `icons/` — app icons (regenerate with `..\gen-icons.ps1`)
