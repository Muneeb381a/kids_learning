/* app.js — splash + profile creation controller */

const AVATAR_EMOJIS = {
  boy1:  '👦',
  girl1: '👧',
  boy2:  '🧒',
  girl2: '🧕'
};

/* ---- Star particles background ---- */
function createStarParticles() {
  const container = document.getElementById('stars-bg');
  if (!container) return;

  const symbols = ['⭐', '🌟', '✨', '💫', '⭐'];
  for (let i = 0; i < 22; i++) {
    const el = document.createElement('div');
    el.className = 'star-particle';
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left     = Math.random() * 100 + '%';
    el.style.top      = Math.random() * 100 + '%';
    el.style.fontSize = (12 + Math.random() * 22) + 'px';
    el.style.animationDelay    = (Math.random() * 3) + 's';
    el.style.animationDuration = (2 + Math.random() * 3) + 's';
    container.appendChild(el);
  }
}

/* ---- Screen switching ---- */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });
  const target = document.getElementById(id);
  if (!target) return;
  target.classList.add('active');
  /* re-trigger fade */
  target.style.animation = 'none';
  target.offsetHeight;
  target.style.animation = '';
  target.classList.add('fade-in');
}

/* ---- Rotating mascot messages ---- */
const SPLASH_MSGS = [
  'Assalamu Alaikum! 👋',
  'Aao seekhte hain! 📚',
  'Tayyar ho? 🚀',
  'Aaj kya seekhain? ⭐'
];
let msgIdx = 0;

/* ---- Profile creation logic ---- */
let selectedAge    = null;
let selectedAvatar = null;

function initProfileCreation() {
  const nameInput = document.getElementById('input-name');
  const createBtn = document.getElementById('btn-create-profile');

  function checkReady() {
    const ok = nameInput.value.trim().length >= 2 && selectedAge && selectedAvatar;
    createBtn.disabled = !ok;
  }

  nameInput.addEventListener('input', checkReady);
  nameInput.focus();

  document.querySelectorAll('.age-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.age-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      btn.classList.add('pop-anim');
      btn.addEventListener('animationend', () => btn.classList.remove('pop-anim'), { once: true });
      selectedAge = parseInt(btn.dataset.age, 10);
      Audio.play('click');
      checkReady();
    });
  });

  document.querySelectorAll('.avatar-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selectedAvatar = opt.dataset.avatar;
      Audio.play('click');
      checkReady();
    });
  });

  createBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name || !selectedAge || !selectedAvatar) return;

    Audio.play('win');
    createBtn.textContent = '🎉 Chalein!';
    createBtn.disabled = true;

    launchConfetti();

    setTimeout(() => {
      Progress.createProfile(name, selectedAge, selectedAvatar);
      window.location.href = 'pages/dashboard.html';
    }, 900);
  });
}

/* ---- Confetti celebration ---- */
function launchConfetti() {
  const colors = ['#FFD54F', '#F06292', '#66BB6A', '#4FC3F7', '#FF9800', '#CE93D8'];
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.left            = Math.random() * 100 + 'vw';
      el.style.top             = '-20px';
      el.style.background      = colors[Math.floor(Math.random() * colors.length)];
      el.style.width           = (8 + Math.random() * 10) + 'px';
      el.style.height          = (8 + Math.random() * 10) + 'px';
      el.style.borderRadius    = Math.random() > 0.5 ? '50%' : '2px';
      el.style.animationDuration = (1.5 + Math.random() * 2) + 's';
      document.body.appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    }, i * 25);
  }
}

/* ---- Boot ---- */
document.addEventListener('DOMContentLoaded', () => {
  Progress.load();
  Audio.init({ sound: true, music: false });

  /* If already has a profile, go straight to dashboard */
  if (Progress.hasProfile()) {
    window.location.replace('pages/dashboard.html');
    return;
  }

  createStarParticles();
  showScreen('screen-splash');

  /* Rotate mascot message every 3 s */
  setInterval(() => {
    msgIdx = (msgIdx + 1) % SPLASH_MSGS.length;
    const bubble = document.getElementById('splash-bubble');
    if (bubble) bubble.textContent = SPLASH_MSGS[msgIdx];
  }, 3000);

  document.getElementById('btn-start').addEventListener('click', () => {
    Audio.play('click');
    showScreen('screen-profile-create');
    initProfileCreation();
  });
});
