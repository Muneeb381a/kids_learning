/* dashboard.js — home dashboard controller */

/* avatar.js loaded before this file on dashboard */

function greetingText(name) {
  const h = new Date().getHours();
  if (h < 5)  return `${name}, itni raat ko seekhna! 🌙 Wah!`;
  if (h < 12) return `Subah Bakhair, ${name}! ☀️ Aao seekhte hain!`;
  if (h < 17) return `Salam ${name}! 🌤️ Aaj kya seekhain?`;
  if (h < 20) return `Sham Mubarak, ${name}! 🌇 Kuch naya seekhain?`;
  return `Raat Mubarak, ${name}! 🌙 Kal bhi aana!`;
}

function streakMessage(n) {
  if (n === 0) return 'Aaj pehla din! Seekhna shuru karo! 📚';
  if (n === 1) return 'Pehla din! Kal bhi aana, streak barhegi! 🔥';
  if (n < 5)   return `${n} din! Aise hi chaltay raho! 💪`;
  if (n < 14)  return `${n} roz! Tum star ho! 🌟`;
  if (n < 30)  return `${n} roz! Zabardast dedication! 🏆`;
  return `${n} roz! Tum LEGEND ho! 👑`;
}

function setProgress(subject, completed) {
  const pct = Math.round((completed / 10) * 100);
  const bar  = document.getElementById(`prog-${subject}`);
  const txt  = document.getElementById(`prog-text-${subject}`);
  if (bar) bar.style.width = pct + '%';
  if (txt) txt.textContent  = `${completed}/10 Levels`;
}

/* ---- Settings modal ---- */
function initSettings(data) {
  const modal      = document.getElementById('settings-modal');
  const btnOpen    = document.getElementById('btn-settings');
  const btnClose   = document.getElementById('btn-close-settings');
  const btnReset   = document.getElementById('btn-reset');
  const btnSound   = document.getElementById('toggle-sound');
  const btnMusic   = document.getElementById('toggle-music');

  function updateLabels() {
    btnSound.textContent = Audio.enabled      ? 'ON ✓' : 'OFF';
    btnMusic.textContent = Audio.musicEnabled ? 'ON ✓' : 'OFF';
    btnSound.style.background = Audio.enabled      ? '#66BB6A' : '';
    btnSound.style.color      = Audio.enabled      ? 'white'   : '';
    btnMusic.style.background = Audio.musicEnabled ? '#66BB6A' : '';
    btnMusic.style.color      = Audio.musicEnabled ? 'white'   : '';
  }

  btnOpen.addEventListener('click', () => {
    Audio.play('click');
    modal.style.display = 'flex';
    updateLabels();
  });

  btnClose.addEventListener('click', () => {
    Audio.play('click');
    modal.style.display = 'none';
    Progress.updateSettings({ sound: Audio.enabled, music: Audio.musicEnabled });
  });

  btnSound.addEventListener('click', () => {
    Audio.toggle('sound');
    Audio.play('click');
    updateLabels();
  });

  btnMusic.addEventListener('click', () => {
    Audio.toggle('music');
    updateLabels();
  });

  btnReset.addEventListener('click', () => {
    if (confirm('Sach mein reset karna hai? Sab progress delete ho jaigi! ⚠️')) {
      localStorage.clear();
      window.location.replace('../index.html');
    }
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });

  updateLabels();
}

/* ---- Subject card click sounds ---- */
function initSubjectCards() {
  document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', () => Audio.play('click'));
  });
}

/* ---- Boot ---- */
document.addEventListener('DOMContentLoaded', () => {
  Progress.load();

  if (!Progress.hasProfile()) {
    window.location.replace('../index.html');
    return;
  }

  const data    = Progress.data;
  const profile = data.profile;

  Audio.init(data.settings);

  /* Avatar & name */
  const avatarContainer = document.getElementById('kid-avatar');
  if (typeof renderAvatar !== 'undefined') {
    renderAvatar(getAvatarConfig(profile), avatarContainer, 48);
  }
  document.getElementById('kid-name').textContent = profile.name;
  document.getElementById('total-stars').textContent = data.totalStars || 0;

  /* Streak */
  const streak = data.streak.current || 0;
  document.getElementById('streak-count').textContent = streak;
  document.getElementById('streak-title').textContent =
    streak === 0 ? 'Aaj pehla din!' : `${streak} Roz ka Silsila! 🔥`;
  document.getElementById('streak-desc').textContent = streakMessage(streak);

  /* Greeting */
  document.getElementById('greeting-text').textContent = greetingText(profile.name);

  /* Progress bars — animate after paint */
  requestAnimationFrame(() => {
    setTimeout(() => {
      ['maths', 'science', 'english', 'urdu'].forEach(subject => {
        const completed = Progress.getSubjectProgress(subject).completed.length;
        setProgress(subject, completed);
      });
    }, 300);
  });

  initSettings(data);
  initSubjectCards();

  /* Update streak on each visit */
  Progress.save();
});
