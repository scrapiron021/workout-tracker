/* ===================== Program data ===================== */

const PROGRAM = {
  A: [
    { id: 'goblet-squat', name: 'Goblet Squat', target: '2–3 × 8–12', unit: 'reps', topReps: 12,
      url: 'https://www.nasm.org/resource-center/exercise-library/goblet-squat' },
    { id: 'db-bench-press', name: 'Dumbbell Bench Press', target: '2–3 × 8–12', unit: 'reps', topReps: 12,
      url: 'https://gravitus.com/guides/exercises/dumbbell-bench-press/' },
    { id: 'one-arm-db-row', name: 'One-Arm Dumbbell Row', target: '2–3 × 8–12/side', unit: 'reps', topReps: 12,
      url: 'https://www.muscleandstrength.com/exercises/one-arm-dumbbell-row.html' },
    { id: 'db-rdl', name: 'Dumbbell Romanian Deadlift', target: '2–3 × 8–12', unit: 'reps', topReps: 12,
      url: 'https://www.nasm.org/resource-center/exercise-library/dumbbell-romanian-deadlift' },
    { id: 'forearm-plank', name: 'Forearm Plank', target: '2–3 × 20–40 sec', unit: 'sec', topReps: 40,
      url: 'https://www.nike.com/a/how-to-do-a-proper-forearm-plank' },
    { id: 'farmers-carry', name: "Farmer's Carry (optional)", target: '2–3 × 30–40 sec', unit: 'sec', topReps: 40,
      url: 'https://www.acefitness.org/resources/everyone/exercise-library/359/farmer-s-carry/' },
  ],
  B: [
    { id: 'leg-press', name: 'Leg Press', target: '2–3 × 8–12', unit: 'reps', topReps: 12,
      url: 'https://www.planetfitness.com/blog/articles/leg-press-machine-guide' },
    { id: 'db-shoulder-press', name: 'Dumbbell Shoulder Press', target: '2–3 × 8–12', unit: 'reps', topReps: 12,
      url: 'https://www.muscleandstrength.com/exercises/standing-dumbbell-press.html' },
    { id: 'lat-pulldown', name: 'Lat Pulldown', target: '2–3 × 8–12', unit: 'reps', topReps: 12,
      url: 'https://www.anytimefitness.com/blog/how-to-master-the-lat-pulldown-machine-for-max-gains' },
    { id: 'glute-bridge-thrust', name: 'Dumbbell Glute Bridge / Hip Thrust', target: '2–3 × 8–12', unit: 'reps', topReps: 12,
      url: 'https://blog.nasm.org/how-to-do-a-glute-bridge' },
    { id: 'dead-bug', name: 'Dead Bug', target: '2–3 × 8–12/side', unit: 'reps', topReps: 12,
      url: 'https://www.nasm.org/resource-center/exercise-library/dead-bug' },
    { id: 'db-bicep-curl', name: 'Dumbbell Bicep Curl (optional)', target: '2 × 10–15', unit: 'reps', topReps: 15,
      url: 'https://www.hevyapp.com/exercises/how-to-bicep-curl-dumbbell/' },
    { id: 'oh-triceps-ext', name: 'Overhead Triceps Extension (optional)', target: '2 × 10–15', unit: 'reps', topReps: 15,
      url: 'https://www.puregym.com/exercises/arms-and-shoulders/tricep-extension/overhead-tricep-extension/' },
  ],
};

const ADDONS = [
  { id: 'lying-leg-raise', name: 'Lying Leg Raise', target: '2 × 10–15', unit: 'reps', topReps: 15,
    url: 'https://www.muscleandstrength.com/exercises/lying-floor-leg-raise.html' },
  { id: 'push-up', name: 'Push-Up (bench-press alternative)', target: '—', unit: 'reps',
    url: 'https://blog.nasm.org/nasm-guide-to-push-ups/form-and-technique' },
];

const WEIGHT_INCREMENT = 5; // lb jump suggested when the top of the rep range is reached

const ALL_EXERCISES = [...PROGRAM.A, ...PROGRAM.B, ...ADDONS];

const MOBILITY = [
  {
    block: 'Block 1 – Core & light (reps)',
    items: [
      { id: 'mob-plank', name: 'Forearm Plank', target: '1–2 × 20–30 sec',
        url: 'https://www.nike.com/a/how-to-do-a-proper-forearm-plank' },
      { id: 'mob-dead-bug', name: 'Dead Bug', target: '1–2 × 8–10/side',
        url: 'https://www.nasm.org/resource-center/exercise-library/dead-bug' },
      { id: 'mob-bird-dog', name: 'Bird Dog', target: '1–2 × 8–10/side',
        url: 'https://www.healthline.com/health/bird-dog-exercise' },
      { id: 'mob-push-ups', name: 'Push-Ups', target: '1–2 × 5–10 (easy effort)',
        url: 'https://blog.nasm.org/nasm-guide-to-push-ups/form-and-technique' },
      { id: 'mob-glute-bridge', name: 'Glute Bridge', target: '1–2 × 10–15',
        url: 'https://blog.nasm.org/how-to-do-a-glute-bridge' },
    ],
  },
  {
    block: 'Block 2 – Stretches (hold 20–30 sec)',
    items: [
      { id: 'mob-childs-pose', name: "Child's Pose", target: 'hold 20–30 sec',
        url: 'https://health.clevelandclinic.org/childs-pose' },
      { id: 'mob-hip-flexor', name: 'Kneeling Hip-Flexor', target: '20–30 sec/side',
        url: 'https://www.acefitness.org/resources/everyone/exercise-library/142/kneeling-hip-flexor-stretch/' },
      { id: 'mob-doorway-chest', name: 'Doorway Chest', target: 'hold 20–30 sec',
        url: 'https://www.getwellen.com/exercises/doorway-pec-stretch' },
      { id: 'mob-figure-4', name: 'Lying Figure-4', target: '20–30 sec/side',
        url: 'https://www.hingehealth.com/resources/articles/figure-four/' },
      { id: 'mob-hamstring', name: 'Hamstring', target: '20–30 sec/side',
        url: 'https://www.hingehealth.com/resources/articles/hamstring-stretch/' },
    ],
  },
];

const CARDIO_TYPES = ['Elliptical – base', 'Incline walk – base', 'Walk/run intervals', 'Continuous jog', 'Mile time trial'];

/* ===================== Storage ===================== */

const STORE_KEY = 'workout-tracker-v1';

const DEFAULT_DATA = {
  sessions: [],                                  // { id, date, day, sets: { exId: [{ w, r }] } }
  cardio: [],                                    // { id, date, type, duration, distance, notes }
  mobility: {},                                  // { 'YYYY-MM-DD': { itemId: true } }
  protein: { target: 200, entries: {} },         // entries: { 'YYYY-MM-DD': [{ id, g }] }
  weight: { goal: 280, range: 'all', entries: [] }, // entries: { id, date, lbs, waist }
};

let data = loadData();

function loadData() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return structuredClone(DEFAULT_DATA);
    const parsed = JSON.parse(raw);
    return {
      ...structuredClone(DEFAULT_DATA),
      ...parsed,
      protein: { ...structuredClone(DEFAULT_DATA.protein), ...(parsed.protein || {}) },
      weight: { ...structuredClone(DEFAULT_DATA.weight), ...(parsed.weight || {}) },
    };
  } catch {
    return structuredClone(DEFAULT_DATA);
  }
}

function save() {
  localStorage.setItem(STORE_KEY, JSON.stringify(data));
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

/* ===================== Date helpers ===================== */

function toISO(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function todayStr() {
  return toISO(new Date());
}

function daysAgoStr(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return toISO(d);
}

function fmtDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

function fmtDateYear(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

/* ===================== Tabs ===================== */

const tabs = ['lift', 'cardio', 'mobility', 'protein', 'weight'];

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => showTab(btn.dataset.tab));
});

function showTab(name) {
  tabs.forEach(t => {
    document.getElementById(`tab-${t}`).hidden = (t !== name);
  });
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === name));
  window.scrollTo(0, 0);
  if (name === 'lift') renderLift();
  if (name === 'cardio') renderCardio();
  if (name === 'mobility') renderMobility();
  if (name === 'protein') renderProtein();
  if (name === 'weight') renderWeight();
}

/* ===================== LIFT ===================== */

let chosenDay = null; // 'A' | 'B' — user override; null = use suggestion
const openHistories = new Set(); // exercise ids with expanded history

function suggestedDay() {
  if (data.sessions.length === 0) return 'A';
  const sorted = [...data.sessions].sort((a, b) => a.date.localeCompare(b.date));
  const last = sorted[sorted.length - 1];
  return last.day === 'A' ? 'B' : 'A';
}

function currentDay() {
  if (chosenDay) return chosenDay;
  // stick with a workout already in progress today, so the screen
  // doesn't flip days after the first set is logged
  const today = data.sessions.filter(s => s.date === todayStr());
  if (today.length > 0) return today[today.length - 1].day;
  return suggestedDay();
}

function todaysSession(day) {
  return data.sessions.find(s => s.date === todayStr() && s.day === day);
}

function lastSessionWith(exId, excludeId) {
  const sorted = [...data.sessions].sort((a, b) => b.date.localeCompare(a.date));
  for (const s of sorted) {
    if (s.id === excludeId) continue;
    if (s.sets[exId] && s.sets[exId].length > 0) return s;
  }
  return null;
}

function setsSummary(sets, unit) {
  return sets.map(s => s.w != null && s.w !== '' ? `${s.w} lb × ${s.r}` : `${s.r} ${unit === 'sec' ? 'sec' : 'reps'}`).join(', ');
}

function renderLift() {
  const day = currentDay();
  const sugg = suggestedDay();

  const inProgress = data.sessions.find(s => s.date === todayStr() && s.day === day);
  document.getElementById('lift-suggestion').textContent =
    inProgress
      ? `Day ${day} in progress today — next time: Day ${day === 'A' ? 'B' : 'A'}.`
      : data.sessions.length === 0
        ? 'No workouts logged yet — start with Day A.'
        : `Next up: Day ${sugg} (you last did Day ${sugg === 'A' ? 'B' : 'A'}).`;

  ['A', 'B'].forEach(d => {
    const btn = document.getElementById(`pick-${d}`);
    btn.classList.toggle('selected', d === day);
    const hint = inProgress
      ? (d === day ? '<span class="hint">in progress</span>' : '')
      : (d === sugg ? '<span class="hint">suggested</span>' : '');
    btn.innerHTML = `Day ${d}${hint}`;
  });

  const list = document.getElementById('exercise-list');
  list.innerHTML = '';
  PROGRAM[day].forEach(ex => list.appendChild(exerciseCard(ex, day)));

  const addons = document.getElementById('addon-list');
  addons.innerHTML = '';
  ADDONS.forEach(ex => addons.appendChild(exerciseCard(ex, day)));
}

function exerciseCard(ex, day) {
  const card = document.createElement('div');
  card.className = 'card exercise';

  const session = todaysSession(day);
  const todaySets = session?.sets[ex.id] || [];
  const last = lastSessionWith(ex.id, session?.id);

  const head = document.createElement('div');
  head.className = 'ex-head';
  head.innerHTML = `
    <div>
      <div class="ex-name"></div>
      <div class="ex-target"></div>
    </div>`;
  head.querySelector('.ex-name').textContent = ex.name;
  head.querySelector('.ex-target').textContent = ex.target;
  const demo = document.createElement('a');
  demo.className = 'demo-link';
  demo.href = ex.url;
  demo.target = '_blank';
  demo.rel = 'noopener';
  demo.textContent = 'Watch demo ▶';
  head.appendChild(demo);
  card.appendChild(head);

  // last session, for progressive overload
  let suggestedWeight = null;
  const lastDiv = document.createElement('div');
  lastDiv.className = 'last-session';
  if (last) {
    lastDiv.innerHTML = `<span class="when">Last (${fmtDate(last.date)}):</span> `;
    lastDiv.append(setsSummary(last.sets[ex.id], ex.unit));

    // overload nudge: hit the top of the range on every set (2+ sets) → time to progress
    const lastSets = last.sets[ex.id];
    if (ex.topReps && lastSets.length >= 2 && lastSets.every(s => s.r >= ex.topReps)) {
      const lastW = lastSets[lastSets.length - 1].w;
      const nudge = document.createElement('span');
      nudge.className = 'nudge';
      if (ex.unit === 'sec') {
        nudge.textContent = `💪 You held ${ex.topReps}+ sec every set — try a longer hold or more weight today.`;
      } else if (lastW != null) {
        suggestedWeight = lastW + WEIGHT_INCREMENT;
        nudge.textContent = `💪 You hit the top of the rep range — try ${suggestedWeight} lb today.`;
      } else {
        nudge.textContent = '💪 You hit the top of the rep range — add some weight if you can.';
      }
      lastDiv.appendChild(nudge);
    }
  } else {
    lastDiv.innerHTML = '<span class="when">First time — pick a weight you can control for all reps.</span>';
  }
  card.appendChild(lastDiv);

  // today's logged sets as chips
  if (todaySets.length > 0) {
    const chips = document.createElement('div');
    chips.className = 'set-chips';
    todaySets.forEach((s, i) => {
      const chip = document.createElement('span');
      chip.className = 'set-chip';
      chip.textContent = s.w != null && s.w !== ''
        ? `${s.w} × ${s.r}`
        : `${s.r} ${ex.unit === 'sec' ? 'sec' : ''}`.trim();
      const x = document.createElement('button');
      x.className = 'chip-x';
      x.textContent = '✕';
      x.setAttribute('aria-label', 'Remove set');
      x.addEventListener('click', () => {
        session.sets[ex.id].splice(i, 1);
        if (session.sets[ex.id].length === 0) delete session.sets[ex.id];
        save();
        renderLift();
      });
      chip.appendChild(x);
      chips.appendChild(chip);
    });
    card.appendChild(chips);
  }

  // inputs
  const row = document.createElement('div');
  row.className = 'log-row';
  const wInput = document.createElement('input');
  wInput.type = 'number';
  wInput.inputMode = 'decimal';
  wInput.min = '0';
  wInput.step = '0.5';
  wInput.placeholder = 'lb';
  const rInput = document.createElement('input');
  rInput.type = 'number';
  rInput.inputMode = 'numeric';
  rInput.min = '0';
  rInput.placeholder = ex.unit === 'sec' ? 'sec' : 'reps';
  if (suggestedWeight != null) {
    wInput.value = suggestedWeight;
  } else if (last) {
    const lastSets = last.sets[ex.id];
    const lastW = lastSets[lastSets.length - 1].w;
    if (lastW != null && lastW !== '') wInput.value = lastW;
  }
  const logBtn = document.createElement('button');
  logBtn.className = 'log-btn';
  logBtn.textContent = 'Log set';
  logBtn.addEventListener('click', () => {
    const r = rInput.value.trim();
    if (!r || Number(r) <= 0) { rInput.focus(); return; }
    const w = wInput.value.trim();
    let s = todaysSession(day);
    if (!s) {
      s = { id: uid(), date: todayStr(), day, sets: {} };
      data.sessions.push(s);
    }
    if (!s.sets[ex.id]) s.sets[ex.id] = [];
    s.sets[ex.id].push({ w: w === '' ? null : Number(w), r: Number(r) });
    save();
    startRestTimer();
    renderLift();
  });
  row.append(wInput, rInput, logBtn);
  card.appendChild(row);

  // history
  const histBtn = document.createElement('button');
  histBtn.className = 'hist-toggle';
  histBtn.textContent = openHistories.has(ex.id) ? 'Hide history' : 'History';
  card.appendChild(histBtn);

  const hist = document.createElement('div');
  hist.className = 'hist';
  hist.hidden = !openHistories.has(ex.id);
  if (!hist.hidden) fillHistory(hist, ex);
  card.appendChild(hist);

  histBtn.addEventListener('click', () => {
    if (openHistories.has(ex.id)) openHistories.delete(ex.id);
    else openHistories.add(ex.id);
    renderLift();
  });

  return card;
}

function fillHistory(container, ex) {
  const rows = [...data.sessions]
    .filter(s => s.sets[ex.id] && s.sets[ex.id].length > 0)
    .sort((a, b) => b.date.localeCompare(a.date));
  if (rows.length === 0) {
    container.innerHTML = '<div class="empty-note">No sets logged yet.</div>';
    return;
  }
  rows.forEach(s => {
    const div = document.createElement('div');
    div.className = 'hist-row';
    const date = document.createElement('span');
    date.className = 'hist-date';
    date.textContent = `${fmtDateYear(s.date)} · ${s.day}`;
    const sets = document.createElement('span');
    sets.textContent = setsSummary(s.sets[ex.id], ex.unit);
    div.append(date, sets);
    container.appendChild(div);
  });
}

document.getElementById('pick-A').addEventListener('click', () => { chosenDay = 'A'; renderLift(); });
document.getElementById('pick-B').addEventListener('click', () => { chosenDay = 'B'; renderLift(); });

/* ===================== REST TIMER ===================== */

const REST_SECONDS = 90;
let restInterval = null;
let restEnd = 0;
let restHideTimeout = null;

function startRestTimer() {
  restEnd = Date.now() + REST_SECONDS * 1000;
  const el = document.getElementById('rest-timer');
  el.hidden = false;
  el.classList.remove('done');
  if (restInterval) clearInterval(restInterval);
  if (restHideTimeout) { clearTimeout(restHideTimeout); restHideTimeout = null; }
  restInterval = setInterval(tickRest, 250);
  tickRest();
}

function tickRest() {
  const left = Math.ceil((restEnd - Date.now()) / 1000);
  const label = document.getElementById('rest-time');
  if (left <= 0) {
    label.textContent = 'Rest done — go! 💪';
    document.getElementById('rest-timer').classList.add('done');
    clearInterval(restInterval);
    restInterval = null;
    restHideTimeout = setTimeout(hideRestTimer, 6000);
  } else {
    label.textContent = `Rest ${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
  }
}

function hideRestTimer() {
  const el = document.getElementById('rest-timer');
  el.hidden = true;
  el.classList.remove('done');
  if (restInterval) { clearInterval(restInterval); restInterval = null; }
  if (restHideTimeout) { clearTimeout(restHideTimeout); restHideTimeout = null; }
}

document.getElementById('rest-close').addEventListener('click', hideRestTimer);

/* ===================== CARDIO ===================== */

const CARDIO_WEEKLY_GOAL = 150; // minutes — standard public-health target

let editingCardioId = null;

function weekStartStr() {
  const d = new Date();
  const daysSinceMonday = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - daysSinceMonday);
  return toISO(d);
}

function renderCardio() {
  const dateInput = document.getElementById('cardio-date');
  if (!dateInput.value) dateInput.value = todayStr();

  // this week's summary (Monday–today)
  const start = weekStartStr();
  const thisWeek = data.cardio.filter(e => e.date >= start && e.date <= todayStr());
  const mins = thisWeek.reduce((sum, e) => sum + e.duration, 0);
  document.getElementById('cardio-week-title').textContent = `This week: ${mins} min`;
  const bar = document.getElementById('cardio-week-bar');
  bar.style.width = `${Math.min(100, (mins / CARDIO_WEEKLY_GOAL) * 100)}%`;
  bar.classList.toggle('goal-met', mins >= CARDIO_WEEKLY_GOAL);
  document.getElementById('cardio-week-sub').textContent =
    `${thisWeek.length} session${thisWeek.length === 1 ? '' : 's'} · goal ${CARDIO_WEEKLY_GOAL} min/week` +
    (mins >= CARDIO_WEEKLY_GOAL ? ' · hit! ✅' : '');

  document.getElementById('cardio-add').textContent = editingCardioId ? 'Save changes' : 'Add cardio session';
  document.getElementById('cardio-cancel').hidden = !editingCardioId;

  const list = document.getElementById('cardio-list');
  list.innerHTML = '';
  const entries = [...data.cardio].sort((a, b) => b.date.localeCompare(a.date));
  if (entries.length === 0) {
    list.innerHTML = '<div class="empty-note">No cardio logged yet.</div>';
    return;
  }
  entries.forEach(e => {
    const row = document.createElement('div');
    row.className = 'entry-row';
    const main = document.createElement('div');
    main.className = 'entry-main';
    const title = document.createElement('div');
    title.className = 'entry-title';
    title.textContent = `${e.type} — ${e.duration} min`;
    const sub = document.createElement('div');
    sub.className = 'entry-sub';
    const bits = [fmtDateYear(e.date)];
    if (e.distance) bits.push(`${e.distance} mi`);
    if (e.notes) bits.push(e.notes);
    sub.textContent = bits.join(' · ');
    main.append(title, sub);
    row.append(main, editButton(() => startCardioEdit(e)), deleteButton(() => {
      if (editingCardioId === e.id) cancelCardioEdit();
      data.cardio = data.cardio.filter(x => x.id !== e.id);
      save();
      renderCardio();
    }));
    list.appendChild(row);
  });
}

function startCardioEdit(e) {
  editingCardioId = e.id;
  document.getElementById('cardio-date').value = e.date;
  document.getElementById('cardio-type').value = e.type;
  document.getElementById('cardio-duration').value = e.duration;
  document.getElementById('cardio-distance').value = e.distance ?? '';
  document.getElementById('cardio-notes').value = e.notes || '';
  renderCardio();
  document.getElementById('tab-cardio').scrollIntoView({ behavior: 'smooth' });
}

function cancelCardioEdit() {
  editingCardioId = null;
  document.getElementById('cardio-date').value = todayStr();
  document.getElementById('cardio-duration').value = '';
  document.getElementById('cardio-distance').value = '';
  document.getElementById('cardio-notes').value = '';
}

document.getElementById('cardio-cancel').addEventListener('click', () => {
  cancelCardioEdit();
  renderCardio();
});

document.getElementById('cardio-add').addEventListener('click', () => {
  const date = document.getElementById('cardio-date').value;
  const type = document.getElementById('cardio-type').value;
  const duration = document.getElementById('cardio-duration').value.trim();
  const distance = document.getElementById('cardio-distance').value.trim();
  const notes = document.getElementById('cardio-notes').value.trim();
  if (!date || !duration || Number(duration) <= 0) return;
  const fields = {
    date, type,
    duration: Number(duration),
    distance: distance === '' ? null : Number(distance),
    notes,
  };
  if (editingCardioId) {
    const entry = data.cardio.find(x => x.id === editingCardioId);
    if (entry) Object.assign(entry, fields);
    editingCardioId = null;
  } else {
    data.cardio.push({ id: uid(), ...fields });
  }
  save();
  cancelCardioEdit();
  renderCardio();
});

function deleteButton(onClick) {
  const btn = document.createElement('button');
  btn.className = 'delete-btn';
  btn.textContent = '🗑';
  btn.setAttribute('aria-label', 'Delete entry');
  btn.addEventListener('click', onClick);
  return btn;
}

function editButton(onClick) {
  const btn = document.createElement('button');
  btn.className = 'edit-btn';
  btn.textContent = '✏️';
  btn.setAttribute('aria-label', 'Edit entry');
  btn.addEventListener('click', onClick);
  return btn;
}

/* ===================== MOBILITY ===================== */

function mobilityComplete(date) {
  const done = data.mobility[date] || {};
  return MOBILITY.every(b => b.items.every(i => done[i.id]));
}

function mobilityStreak() {
  // count consecutive complete nights; an unfinished today doesn't break the run
  let streak = 0;
  let n = mobilityComplete(todayStr()) ? 0 : 1;
  while (mobilityComplete(daysAgoStr(n))) {
    streak++;
    n++;
  }
  return streak;
}

function renderMobility() {
  const today = todayStr();
  const done = data.mobility[today] || {};
  const totalItems = MOBILITY.reduce((n, b) => n + b.items.length, 0);
  const doneCount = Object.values(done).filter(Boolean).length;
  const streak = mobilityStreak();
  const streakNote = streak > 0 ? ` · 🔥 ${streak}-night streak` : '';

  document.getElementById('mobility-progress').textContent =
    (doneCount === totalItems
      ? `All ${totalItems} done tonight — nice work! ✅`
      : `${doneCount} of ${totalItems} done tonight (${fmtDate(today)}). Resets daily.`) + streakNote;

  const list = document.getElementById('mobility-list');
  list.innerHTML = '';
  MOBILITY.forEach(block => {
    const wrap = document.createElement('div');
    wrap.className = 'mob-block';
    const h = document.createElement('h2');
    h.className = 'section-label';
    h.textContent = block.block;
    wrap.appendChild(h);
    block.items.forEach(item => {
      const row = document.createElement('div');
      row.className = 'mob-item' + (done[item.id] ? ' done' : '');
      const label = document.createElement('label');
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = !!done[item.id];
      cb.addEventListener('change', () => {
        if (!data.mobility[today]) data.mobility[today] = {};
        data.mobility[today][item.id] = cb.checked;
        save();
        renderMobility();
      });
      const text = document.createElement('span');
      text.className = 'mob-text';
      const name = document.createElement('span');
      name.className = 'mob-name';
      name.textContent = item.name;
      const target = document.createElement('span');
      target.className = 'mob-target';
      target.textContent = item.target;
      text.append(name, target);
      label.append(cb, text);
      row.appendChild(label);
      const a = document.createElement('a');
      a.className = 'mob-link';
      a.href = item.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = 'How ▶';
      row.appendChild(a);
      wrap.appendChild(row);
    });
    list.appendChild(wrap);
  });
}

/* ===================== PROTEIN ===================== */

let editingProteinId = null;

function proteinTotal(date) {
  return (data.protein.entries[date] || []).reduce((sum, e) => sum + e.g, 0);
}

function addProtein(grams) {
  const today = todayStr();
  if (!data.protein.entries[today]) data.protein.entries[today] = [];
  data.protein.entries[today].push({ id: uid(), g: grams });
  save();
  renderProtein();
}

function renderProtein() {
  const today = todayStr();
  const total = proteinTotal(today);
  const target = data.protein.target;

  document.getElementById('protein-today-total').textContent = `${total} g`;
  document.getElementById('protein-target-label').textContent = `of ${target} g today`;

  const pct = Math.min(100, (total / target) * 100);
  const bar = document.getElementById('protein-bar');
  bar.style.width = `${pct}%`;
  bar.classList.toggle('goal-met', total >= target);

  const remaining = document.getElementById('protein-remaining');
  if (total >= target) {
    remaining.textContent = total > target ? `Target hit 🎯 (+${total - target} g over)` : 'Target hit 🎯';
    remaining.classList.add('goal-met');
  } else {
    remaining.textContent = `${target - total} g to go`;
    remaining.classList.remove('goal-met');
  }

  const targetInput = document.getElementById('protein-target');
  if (document.activeElement !== targetInput) targetInput.value = target;

  // today's entries
  const entriesDiv = document.getElementById('protein-entries');
  entriesDiv.innerHTML = '';
  const todayEntries = data.protein.entries[today] || [];
  if (todayEntries.length === 0) {
    entriesDiv.innerHTML = '<div class="empty-note">Nothing logged yet today.</div>';
  } else {
    todayEntries.forEach(e => {
      const row = document.createElement('div');
      row.className = 'entry-row';
      const main = document.createElement('div');
      main.className = 'entry-main';

      if (editingProteinId === e.id) {
        const wrap = document.createElement('div');
        wrap.className = 'inline-edit';
        const input = document.createElement('input');
        input.type = 'number';
        input.inputMode = 'numeric';
        input.min = '1';
        input.value = e.g;
        const saveBtn = document.createElement('button');
        saveBtn.className = 'secondary-btn';
        saveBtn.textContent = 'Save';
        saveBtn.addEventListener('click', () => {
          const v = Number(input.value);
          if (v > 0) e.g = v;
          editingProteinId = null;
          save();
          renderProtein();
        });
        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'secondary-btn';
        cancelBtn.textContent = '✕';
        cancelBtn.setAttribute('aria-label', 'Cancel edit');
        cancelBtn.addEventListener('click', () => {
          editingProteinId = null;
          renderProtein();
        });
        wrap.append(input, saveBtn, cancelBtn);
        main.appendChild(wrap);
        row.appendChild(main);
        entriesDiv.appendChild(row);
        input.focus();
        return;
      }

      main.innerHTML = `<div class="entry-title">+${e.g} g</div>`;
      row.append(main, editButton(() => {
        editingProteinId = e.id;
        renderProtein();
      }), deleteButton(() => {
        data.protein.entries[today] = data.protein.entries[today].filter(x => x.id !== e.id);
        if (data.protein.entries[today].length === 0) delete data.protein.entries[today];
        save();
        renderProtein();
      }));
      entriesDiv.appendChild(row);
    });
  }

  // daily history
  const histDiv = document.getElementById('protein-history');
  histDiv.innerHTML = '';
  const dates = Object.keys(data.protein.entries).filter(d => d !== today).sort((a, b) => b.localeCompare(a));
  if (dates.length === 0) {
    histDiv.innerHTML = '<div class="empty-note">History builds up as you log each day.</div>';
  } else {
    dates.forEach(d => {
      const t = proteinTotal(d);
      const row = document.createElement('div');
      row.className = 'entry-row';
      const main = document.createElement('div');
      main.className = 'entry-main';
      const title = document.createElement('div');
      title.className = 'entry-title';
      title.textContent = `${t} g`;
      const sub = document.createElement('div');
      sub.className = 'entry-sub';
      sub.textContent = `${fmtDateYear(d)}${t >= target ? ' · target hit ✅' : ''}`;
      const track = document.createElement('div');
      track.className = 'mini-track';
      const fill = document.createElement('div');
      fill.className = 'mini-fill' + (t >= target ? ' goal-met' : '');
      fill.style.width = `${Math.min(100, (t / target) * 100)}%`;
      track.appendChild(fill);
      main.append(title, sub, track);
      row.appendChild(main);
      histDiv.appendChild(row);
    });
  }
}

document.getElementById('protein-shake').addEventListener('click', () => addProtein(30));

document.getElementById('protein-add').addEventListener('click', () => {
  const input = document.getElementById('protein-grams');
  const g = Number(input.value);
  if (!g || g <= 0) { input.focus(); return; }
  input.value = '';
  addProtein(g);
});

document.getElementById('protein-target').addEventListener('change', e => {
  const v = Number(e.target.value);
  if (v > 0) {
    data.protein.target = v;
    save();
  }
  renderProtein();
});

/* ===================== WEIGHT ===================== */

let weightChart = null;

function movingAverage(values, window) {
  return values.map((_, i) => {
    const start = Math.max(0, i - window + 1);
    const slice = values.slice(start, i + 1);
    return slice.reduce((a, b) => a + b, 0) / slice.length;
  });
}

let editingWeightId = null;

function renderWeight() {
  const dateInput = document.getElementById('weight-date');
  if (!dateInput.value) dateInput.value = todayStr();

  const goalInput = document.getElementById('weight-goal');
  if (document.activeElement !== goalInput) goalInput.value = data.weight.goal;

  document.querySelectorAll('.range-toggle button').forEach(b =>
    b.classList.toggle('selected', b.dataset.range === data.weight.range));

  document.getElementById('weight-add').textContent = editingWeightId ? 'Save changes' : 'Log weight';
  document.getElementById('weight-cancel').hidden = !editingWeightId;

  renderBackupStats();
  drawWeightChart();

  const list = document.getElementById('weight-list');
  list.innerHTML = '';
  const entries = [...data.weight.entries].sort((a, b) => b.date.localeCompare(a.date));
  if (entries.length === 0) {
    list.innerHTML = '<div class="empty-note">No weigh-ins yet. Same time of day each time gives the cleanest trend.</div>';
    return;
  }
  entries.forEach(e => {
    const row = document.createElement('div');
    row.className = 'entry-row';
    const main = document.createElement('div');
    main.className = 'entry-main';
    const title = document.createElement('div');
    title.className = 'entry-title';
    title.textContent = `${e.lbs} lb`;
    const sub = document.createElement('div');
    sub.className = 'entry-sub';
    sub.textContent = fmtDateYear(e.date) + (e.waist ? ` · waist ${e.waist}"` : '');
    main.append(title, sub);
    row.append(main, editButton(() => startWeightEdit(e)), deleteButton(() => {
      if (editingWeightId === e.id) cancelWeightEdit();
      data.weight.entries = data.weight.entries.filter(x => x.id !== e.id);
      save();
      renderWeight();
    }));
    list.appendChild(row);
  });
}

function startWeightEdit(e) {
  editingWeightId = e.id;
  document.getElementById('weight-date').value = e.date;
  document.getElementById('weight-lbs').value = e.lbs;
  document.getElementById('weight-waist').value = e.waist ?? '';
  renderWeight();
  document.getElementById('weight-lbs').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function cancelWeightEdit() {
  editingWeightId = null;
  document.getElementById('weight-date').value = todayStr();
  document.getElementById('weight-lbs').value = '';
  document.getElementById('weight-waist').value = '';
}

document.getElementById('weight-cancel').addEventListener('click', () => {
  cancelWeightEdit();
  renderWeight();
});

document.querySelectorAll('.range-toggle button').forEach(btn => {
  btn.addEventListener('click', () => {
    data.weight.range = btn.dataset.range;
    save();
    renderWeight();
  });
});

function drawWeightChart() {
  const canvas = document.getElementById('weight-chart');
  const fallback = document.getElementById('chart-fallback');

  if (typeof Chart === 'undefined') {
    canvas.hidden = true;
    fallback.hidden = false;
    return;
  }
  canvas.hidden = false;
  fallback.hidden = true;

  let entries = [...data.weight.entries].sort((a, b) => a.date.localeCompare(b.date));
  if (data.weight.range !== 'all') {
    const cutoff = daysAgoStr(Number(data.weight.range) - 1);
    entries = entries.filter(e => e.date >= cutoff);
  }
  const labels = entries.map(e => fmtDate(e.date));
  const weights = entries.map(e => e.lbs);
  const trend = movingAverage(weights, 7);
  const goal = data.weight.goal;

  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const tickColor = dark ? '#9aa4af' : '#65707c';
  const gridColor = dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const legendColor = dark ? '#e6e9ec' : '#1c1e21';

  if (weightChart) weightChart.destroy();
  weightChart = new Chart(canvas, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Trend (7-entry avg)',
          data: trend,
          borderColor: '#2563eb',
          backgroundColor: '#2563eb',
          borderWidth: 3,
          pointRadius: 0,
          tension: 0.35,
        },
        {
          label: 'Daily weigh-in',
          data: weights,
          borderColor: 'rgba(100, 116, 139, 0.4)',
          backgroundColor: 'rgba(100, 116, 139, 0.5)',
          borderWidth: 1,
          pointRadius: 3,
          tension: 0,
        },
        {
          label: `Goal (${goal} lb)`,
          data: labels.map(() => goal),
          borderColor: '#16a34a',
          borderDash: [6, 6],
          borderWidth: 2,
          pointRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { labels: { boxWidth: 14, font: { size: 11 }, color: legendColor } },
      },
      scales: {
        y: { ticks: { font: { size: 11 }, color: tickColor }, grid: { color: gridColor } },
        x: { ticks: { font: { size: 10 }, maxTicksLimit: 8, color: tickColor }, grid: { color: gridColor } },
      },
    },
  });
}

document.getElementById('weight-add').addEventListener('click', () => {
  const date = document.getElementById('weight-date').value;
  const lbs = document.getElementById('weight-lbs').value.trim();
  const waist = document.getElementById('weight-waist').value.trim();
  if (!date || !lbs || Number(lbs) <= 0) return;
  // drop the entry being edited, then enforce one entry per date
  if (editingWeightId) {
    data.weight.entries = data.weight.entries.filter(e => e.id !== editingWeightId);
    editingWeightId = null;
  }
  data.weight.entries = data.weight.entries.filter(e => e.date !== date);
  data.weight.entries.push({
    id: uid(), date,
    lbs: Number(lbs),
    waist: waist === '' ? null : Number(waist),
  });
  save();
  cancelWeightEdit();
  renderWeight();
});

document.getElementById('weight-goal').addEventListener('change', e => {
  const v = Number(e.target.value);
  if (v > 0) {
    data.weight.goal = v;
    save();
  }
  renderWeight();
});

/* ===================== DATA BACKUP ===================== */

function renderBackupStats() {
  const weighIns = data.weight.entries.length;
  const proteinDays = Object.keys(data.protein.entries).length;
  document.getElementById('backup-stats').textContent =
    `On this device: ${data.sessions.length} workout${data.sessions.length === 1 ? '' : 's'}, ` +
    `${data.cardio.length} cardio session${data.cardio.length === 1 ? '' : 's'}, ` +
    `${weighIns} weigh-in${weighIns === 1 ? '' : 's'}, ${proteinDays} protein day${proteinDays === 1 ? '' : 's'}.`;
}

document.getElementById('export-data').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `workout-backup-${todayStr()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});

function importData(parsed) {
  if (!parsed || typeof parsed !== 'object' ||
      !Array.isArray(parsed.sessions) || !Array.isArray(parsed.cardio) ||
      !parsed.protein || typeof parsed.protein.target !== 'number' ||
      !parsed.weight || !Array.isArray(parsed.weight.entries)) {
    return false;
  }
  data = {
    ...structuredClone(DEFAULT_DATA),
    ...parsed,
    protein: { ...structuredClone(DEFAULT_DATA.protein), ...parsed.protein },
    weight: { ...structuredClone(DEFAULT_DATA.weight), ...parsed.weight },
  };
  save();
  chosenDay = null;
  editingCardioId = null;
  editingWeightId = null;
  editingProteinId = null;
  return true;
}

document.getElementById('import-data').addEventListener('click', () => {
  document.getElementById('import-file').click();
});

document.getElementById('import-file').addEventListener('change', e => {
  const file = e.target.files[0];
  e.target.value = ''; // allow re-picking the same file
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    let parsed;
    try {
      parsed = JSON.parse(reader.result);
    } catch {
      alert("That file isn't a valid backup (couldn't read it as JSON).");
      return;
    }
    if (!confirm('Importing replaces ALL data on this device with the backup. Continue?')) return;
    if (importData(parsed)) {
      renderWeight();
      alert('Backup imported ✔');
    } else {
      alert("That file doesn't look like a workout-tracker backup — nothing was changed.");
    }
  };
  reader.readAsText(file);
});

/* ===================== APPLE HEALTH IMPORT ===================== */

const KG_TO_LB = 2.2046226218;
const CM_TO_IN = 1 / 2.54;

function healthAttr(tag, name) {
  const m = tag.match(new RegExp(name + '="([^"]*)"'));
  return m ? m[1] : null;
}

// Streams through export.xml in chunks so a multi-hundred-MB Health export
// doesn't have to fit in memory. Keeps the newest sample per calendar day.
async function importHealthFile(file, chunkSize = 4 * 1024 * 1024, onProgress = null) {
  const weightByDate = new Map(); // date -> { ts, lbs }
  const waistByDate = new Map();  // date -> { ts, inches }
  const recordRe = /<Record[^>]*type="HKQuantityTypeIdentifier(BodyMass|WaistCircumference)"[^>]*>/g;

  const processText = text => {
    let m;
    while ((m = recordRe.exec(text)) !== null) {
      const tag = m[0];
      const kind = m[1];
      const value = parseFloat(healthAttr(tag, 'value'));
      const start = healthAttr(tag, 'startDate') || '';
      const unit = (healthAttr(tag, 'unit') || '').toLowerCase();
      if (!isFinite(value) || value <= 0 || start.length < 10) continue;
      const date = start.slice(0, 10);
      if (kind === 'BodyMass') {
        let lbs = value;
        if (unit.startsWith('kg')) lbs = value * KG_TO_LB;
        else if (unit === 'g') lbs = (value / 1000) * KG_TO_LB;
        else if (unit === 'st') lbs = value * 14;
        const prev = weightByDate.get(date);
        if (!prev || start > prev.ts) weightByDate.set(date, { ts: start, lbs });
      } else {
        let inches = value;
        if (unit.startsWith('cm')) inches = value * CM_TO_IN;
        else if (unit === 'm') inches = value * 100 * CM_TO_IN;
        const prev = waistByDate.get(date);
        if (!prev || start > prev.ts) waistByDate.set(date, { ts: start, inches });
      }
    }
  };

  const decoder = new TextDecoder();
  let buf = '';
  for (let off = 0; off < file.size; off += chunkSize) {
    const ab = await file.slice(off, off + chunkSize).arrayBuffer();
    buf += decoder.decode(ab, { stream: true });
    // process complete lines; a '>' boundary is the fallback for unbroken text
    let cut = buf.lastIndexOf('\n');
    if (cut < 0) cut = buf.lastIndexOf('>');
    if (cut >= 0) {
      processText(buf.slice(0, cut + 1));
      buf = buf.slice(cut + 1);
    }
    if (onProgress) {
      onProgress(Math.min(100, Math.round(((off + chunkSize) / file.size) * 100)));
      await new Promise(r => setTimeout(r, 0)); // let the UI breathe
    }
  }
  buf += decoder.decode();
  processText(buf);

  // merge — entries already logged in the app always win
  let added = 0;
  let skipped = 0;
  let waistAdded = 0;
  const existingDates = new Set(data.weight.entries.map(e => e.date));
  for (const date of [...weightByDate.keys()].sort()) {
    if (existingDates.has(date)) { skipped++; continue; }
    data.weight.entries.push({
      id: uid(), date,
      lbs: Math.round(weightByDate.get(date).lbs * 10) / 10,
      waist: null,
    });
    added++;
  }
  for (const [date, w] of waistByDate) {
    const entry = data.weight.entries.find(e => e.date === date);
    if (entry && entry.waist == null) {
      entry.waist = Math.round(w.inches * 10) / 10;
      waistAdded++;
    }
  }
  if (added > 0 || waistAdded > 0) save();
  return { found: weightByDate.size, added, skipped, waistAdded };
}

document.getElementById('health-import').addEventListener('click', () => {
  document.getElementById('health-file').click();
});

document.getElementById('health-file').addEventListener('change', async e => {
  const file = e.target.files[0];
  e.target.value = '';
  if (!file) return;
  const btn = document.getElementById('health-import');
  const status = document.getElementById('health-status');
  status.hidden = false;
  status.textContent = 'Reading…';
  btn.disabled = true;
  try {
    const res = await importHealthFile(file, undefined, pct => {
      status.textContent = `Reading… ${pct}%`;
    });
    if (res.found === 0) {
      status.textContent = 'No weight records found — make sure you picked the export.xml from inside the Health export (not the zip itself).';
    } else {
      const bits = [`Imported ${res.added} weigh-in${res.added === 1 ? '' : 's'}`];
      if (res.waistAdded > 0) bits.push(`${res.waistAdded} waist measurement${res.waistAdded === 1 ? '' : 's'}`);
      let msg = bits.join(' and ');
      if (res.skipped > 0) msg += ` · ${res.skipped} day${res.skipped === 1 ? '' : 's'} already logged here (kept yours)`;
      status.textContent = msg + '.';
      renderWeight();
    }
  } catch (err) {
    status.textContent = `Import failed: ${err.message}`;
  } finally {
    btn.disabled = false;
  }
});

/* ===================== Init ===================== */

// offline support + installability (no-op when opened from file://)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

// redraw the chart with matching colors when the system theme flips
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (!document.getElementById('tab-weight').hidden) renderWeight();
});

showTab('lift');
