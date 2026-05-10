/* minigame.js — Memory Match card game */

const THEMES = [
  { name: '🐾 Janwar',  pairs: ['🐱','🐶','🐸','🐼','🦊','🐰','🦁','🐯'] },
  { name: '🍎 Phal',    pairs: ['🍎','🍊','🍋','🍇','🍓','🍒','🥭','🍍'] },
  { name: '🌌 Space',   pairs: ['⭐','🌙','🚀','🌈','☀️','🪐','💫','🌟'] },
  { name: '⚽ Sports',  pairs: ['⚽','🏀','🎾','🏏','🎯','🏆','🎮','🎲'] },
  { name: '🌺 Phool',   pairs: ['🌸','🌼','🌻','🌹','💐','🌷','🍀','🌿'] },
];

let theme   = null;
let cards   = [];        // { emoji, id, el }
let flipped = [];        // currently face-up (max 2)
let matched = 0;
let moves   = 0;
let locked  = false;     // prevent clicks during animation
let returnUrl = '';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function calcStars(moves) {
  if (moves <= 16) return 3;
  if (moves <= 24) return 2;
  return 1;
}

function updateUI() {
  document.getElementById('moves-count').textContent = moves;
  document.getElementById('match-count').textContent = matched;

  const dots = document.querySelectorAll('.match-dot');
  dots.forEach((d, i) => d.classList.toggle('done', i < matched));
}

function buildGrid() {
  const grid = document.getElementById('card-grid');
  grid.innerHTML = '';

  const pairs = shuffle([...theme.pairs, ...theme.pairs]);

  cards = pairs.map((emoji, i) => {
    const card = document.createElement('div');
    card.className = 'mem-card';
    card.innerHTML = `
      <div class="mem-card-inner">
        <div class="card-back">⭐</div>
        <div class="card-face">${emoji}</div>
      </div>`;

    card.addEventListener('click', () => flipCard(card, emoji, i));
    grid.appendChild(card);
    return { emoji, id: i, el: card };
  });
}

function flipCard(cardEl, emoji, id) {
  if (locked) return;
  if (cardEl.classList.contains('flipped')) return;
  if (cardEl.classList.contains('matched')) return;

  cardEl.classList.add('flipped');
  Audio.play('click');
  flipped.push({ el: cardEl, emoji, id });

  if (flipped.length < 2) return;

  /* Two cards flipped — check match */
  locked = true;
  moves++;
  updateUI();

  const [a, b] = flipped;

  if (a.emoji === b.emoji && a.id !== b.id) {
    /* Match! */
    setTimeout(() => {
      a.el.classList.add('matched');
      b.el.classList.add('matched');
      matched++;
      updateUI();
      Audio.play('correct');
      flipped = [];
      locked = false;

      if (matched === 8) {
        setTimeout(showResult, 600);
      }
    }, 400);
  } else {
    /* No match — flip back */
    setTimeout(() => {
      a.el.classList.remove('flipped');
      b.el.classList.remove('flipped');
      Audio.play('wrong');
      flipped = [];
      locked = false;
    }, 900);
  }
}

function showResult() {
  const stars  = calcStars(moves);
  const mascot = stars === 3 ? '🏆' : stars === 2 ? '⭐' : '😊';
  const title  = stars === 3 ? 'Perfect! Outstanding! 🎊'
               : stars === 2 ? 'Excellent! Well Done! 🌟'
               : 'Completed! Great effort! 💪';

  document.getElementById('res-mascot').textContent = mascot;
  document.getElementById('res-title').textContent  = title;
  document.getElementById('res-stars').textContent  =
    Array.from({ length: 3 }, (_, i) => i < stars ? '⭐' : '☆').join('');
  document.getElementById('res-detail').textContent =
    `${matched}/8 pairs found in ${moves} moves!`;

  document.getElementById('game-result').classList.add('show');
  Audio.play('win');
  launchConfetti(stars === 3 ? 60 : 30);

  /* Track mini-games played */
  if (Progress.data) {
    Progress.data.miniGamesPlayed = (Progress.data.miniGamesPlayed || 0) + 1;
    Progress.save();
  }
}

function launchConfetti(count) {
  const colors = ['#FFD54F','#F06292','#66BB6A','#4FC3F7','#FF9800','#CE93D8'];
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.cssText = `
        left:${Math.random()*100}vw; top:-20px;
        background:${colors[Math.floor(Math.random()*colors.length)]};
        width:${8+Math.random()*10}px; height:${8+Math.random()*10}px;
        border-radius:${Math.random()>.5?'50%':'2px'};
        animation-duration:${1.5+Math.random()*2}s;
      `;
      document.body.appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    }, i * 30);
  }
}

function confirmExit() {
  if (matched === 8 || moves === 0 || confirm('Leave the game?')) {
    window.location.href = returnUrl || 'dashboard.html';
  }
}

function initDots() {
  const container = document.getElementById('match-progress');
  container.innerHTML = '';
  for (let i = 0; i < 8; i++) {
    const d = document.createElement('div');
    d.className = 'match-dot';
    container.appendChild(d);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Progress.load();
  if (!Progress.hasProfile()) {
    window.location.replace('../index.html');
    return;
  }

  Audio.init(Progress.data.settings);

  const params  = new URLSearchParams(location.search);
  const themeId = parseInt(params.get('theme') || '-1', 10);
  returnUrl     = params.get('from') || 'dashboard.html';

  theme = themeId >= 0 && themeId < THEMES.length
    ? THEMES[themeId]
    : THEMES[Math.floor(Math.random() * THEMES.length)];

  document.getElementById('theme-name').textContent = `🎮 ${theme.name}`;

  initDots();
  buildGrid();

  document.getElementById('btn-play-again').addEventListener('click', () => {
    document.getElementById('game-result').classList.remove('show');
    matched = 0; moves = 0; flipped = []; locked = false;
    initDots();
    updateUI();
    buildGrid();
  });

  document.getElementById('btn-go-back').addEventListener('click', () => {
    window.location.href = returnUrl;
  });
});
