/* level.js — quiz engine */

const ALL_DATA = {
  maths:   typeof MATHS_DATA   !== 'undefined' ? MATHS_DATA   : null,
  science: typeof SCIENCE_DATA !== 'undefined' ? SCIENCE_DATA : null,
  english: typeof ENGLISH_DATA !== 'undefined' ? ENGLISH_DATA : null,
  urdu:    typeof URDU_DATA    !== 'undefined' ? URDU_DATA    : null
};

const SUBJECT_COLORS = {
  maths:   { fill: '#5C6BC0', bg: 'linear-gradient(135deg,#5C6BC0,#3949AB)' },
  science: { fill: '#26A69A', bg: 'linear-gradient(135deg,#26A69A,#00796B)' },
  english: { fill: '#EF5350', bg: 'linear-gradient(135deg,#EF5350,#C62828)' },
  urdu:    { fill: '#AB47BC', bg: 'linear-gradient(135deg,#AB47BC,#7B1FA2)' }
};

const CORRECT_MSGS = ['Shabaash! 🌟', 'Wah! Bilkul sahi! ⭐', 'Kya baat! 🎉', 'Perfect! 💯', 'Zabardast! 🏆'];
const WRONG_MSGS   = ['Koi baat nahi! 💪', 'Dobara sochein! 🤔', 'Galat — try karo! 😊', 'Himmat rakh! 🌟'];

let questions    = [];
let current      = 0;
let score        = 0;
let answered     = false;
let subject      = '';
let levelNum     = 1;

function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

/* ---- Render question ---- */
function renderQuestion() {
  const q     = questions[current];
  const total = questions.length;

  document.getElementById('q-counter').textContent = `Sawaal ${current + 1} / ${total}`;
  document.getElementById('quiz-progress').style.width = ((current / total) * 100) + '%';

  const qText = document.getElementById('q-text');
  qText.textContent = q.q;
  /* RTL for Urdu */
  qText.dir = subject === 'urdu' ? 'rtl' : 'ltr';

  const grid = document.getElementById('choices-grid');
  grid.innerHTML = '';
  answered = false;

  document.getElementById('feedback-bar').className = 'feedback-bar';
  document.getElementById('feedback-bar').innerHTML = '';
  document.getElementById('btn-next').classList.add('hidden');

  /* Mascot alternates */
  document.getElementById('q-mascot').textContent = current % 2 === 0 ? '🤖' : '⭐';

  q.choices.forEach((text, idx) => {
    const btn = document.createElement('button');
    btn.className   = 'choice-btn';
    btn.textContent = text;
    btn.dir         = subject === 'urdu' ? 'rtl' : 'ltr';
    btn.addEventListener('click', () => handleAnswer(idx, q.answer));
    grid.appendChild(btn);
  });
}

/* ---- Handle answer ---- */
function handleAnswer(chosen, correct) {
  if (answered) return;
  answered = true;

  const btns = document.querySelectorAll('.choice-btn');
  btns.forEach(b => b.disabled = true);

  const isRight = chosen === correct;
  if (isRight) score++;

  btns[chosen].classList.add(isRight ? 'correct' : 'wrong');
  if (!isRight) btns[correct].classList.add('correct');

  const fb  = document.getElementById('feedback-bar');
  fb.className = `feedback-bar show ${isRight ? 'correct-fb' : 'wrong-fb'}`;
  fb.innerHTML = isRight
    ? `✅ ${rand(CORRECT_MSGS)}`
    : `❌ ${rand(WRONG_MSGS)} — Sahi jawab: "${btns[correct].textContent}"`;

  Audio.play(isRight ? 'correct' : 'wrong');

  /* Show next / finish button */
  const nextBtn = document.getElementById('btn-next');
  nextBtn.classList.remove('hidden');

  if (current + 1 >= questions.length) {
    nextBtn.textContent = '🏆 Jawab Dekh!';
  } else {
    nextBtn.textContent = 'Agla Sawaal ➡️';
  }
}

/* ---- Next question or show result ---- */
function nextStep() {
  Audio.play('click');
  current++;
  if (current < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

/* ---- Calculate stars ---- */
function calcStars(score, total) {
  const pct = score / total;
  if (pct >= 0.8) return 3;
  if (pct >= 0.6) return 2;
  return 1;
}

/* ---- Show result overlay ---- */
function showResult() {
  const total  = questions.length;
  const stars  = calcStars(score, total);
  const pct    = Math.round((score / total) * 100);
  const isBoss = ALL_DATA[subject]?.levels[levelNum - 1]?.isBoss;

  Progress.completeLevel(subject, levelNum, stars);

  document.getElementById('quiz-progress').style.width = '100%';

  const overlay = document.getElementById('result-overlay');

  let mascot = '🤖', title = '';
  if (pct === 100) { mascot = '🏆'; title = 'Perfect! Zabardast! 🎊'; }
  else if (pct >= 80) { mascot = '⭐'; title = 'Wah! Shabaash! 🌟'; }
  else if (pct >= 60) { mascot = '😊'; title = 'Acha kiya! 👍'; }
  else { mascot = '💪'; title = 'Koi baat nahi! Dobara karo!'; }

  document.getElementById('res-mascot').textContent = mascot;
  document.getElementById('res-title').textContent  = title;
  document.getElementById('res-stars').textContent  =
    Array.from({ length: 3 }, (_, i) => i < stars ? '⭐' : '☆').join('');
  document.getElementById('res-score').textContent  =
    `${score}/${total} sahi jawab! (${pct}%)`;

  overlay.classList.add('show');
  Audio.play(pct === 100 ? 'win' : 'levelup');
  launchConfetti(pct >= 80 ? 50 : 20);

  document.getElementById('btn-map').addEventListener('click', () => {
    window.location.href = `map.html?subject=${subject}`;
  });
  document.getElementById('btn-minigame').addEventListener('click', () => {
    const themeId = Math.floor(Math.random() * 5);
    window.location.href = `minigame.html?theme=${themeId}&from=map.html%3Fsubject%3D${subject}`;
  });
  document.getElementById('btn-retry').addEventListener('click', () => {
    window.location.reload();
  });
}

/* ---- Confetti ---- */
function launchConfetti(count = 40) {
  const colors = ['#FFD54F','#F06292','#66BB6A','#4FC3F7','#FF9800','#CE93D8','#fff'];
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.cssText = `
        left:${Math.random()*100}vw;
        top:-20px;
        background:${colors[Math.floor(Math.random()*colors.length)]};
        width:${8+Math.random()*10}px;
        height:${8+Math.random()*10}px;
        border-radius:${Math.random()>0.5?'50%':'2px'};
        animation-duration:${1.5+Math.random()*2}s;
      `;
      document.body.appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    }, i * 30);
  }
}

/* ---- Exit confirmation ---- */
function confirmExit() {
  if (current === 0 || answered || confirm('Level chord dein? Progress save nahi hogi!')) {
    history.back();
  }
}

/* ---- Boot ---- */
document.addEventListener('DOMContentLoaded', () => {
  Progress.load();
  if (!Progress.hasProfile()) {
    window.location.replace('../index.html');
    return;
  }

  Audio.init(Progress.data.settings);

  const params = new URLSearchParams(location.search);
  subject      = params.get('subject') || 'maths';
  levelNum     = parseInt(params.get('level') || '1', 10);

  const subData  = ALL_DATA[subject];
  const levelDef = subData?.levels.find(l => l.id === levelNum);

  if (!subData || !levelDef) {
    document.getElementById('q-text').textContent = 'Level nahi mila! 😅';
    return;
  }

  /* Style header */
  const color = SUBJECT_COLORS[subject];
  const header = document.getElementById('level-header');
  header.style.background = color.bg;
  header.querySelectorAll('*').forEach(el => el.style.color = 'white');

  document.getElementById('quiz-progress').style.background = color.fill;
  document.getElementById('level-title').textContent = `Level ${levelNum}: ${levelDef.title}`;
  document.getElementById('level-icon').textContent  = levelDef.icon || '';

  questions = [...levelDef.questions];
  renderQuestion();

  document.getElementById('btn-next').addEventListener('click', nextStep);
});
