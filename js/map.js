/* map.js — level selection map */

const SUBJECT_META = {
  maths:   { data: typeof MATHS_DATA   !== 'undefined' ? MATHS_DATA   : null, color: '#5C6BC0', bg: 'linear-gradient(135deg,#5C6BC0,#3949AB)' },
  science: { data: typeof SCIENCE_DATA !== 'undefined' ? SCIENCE_DATA : null, color: '#26A69A', bg: 'linear-gradient(135deg,#26A69A,#00796B)' },
  english: { data: typeof ENGLISH_DATA !== 'undefined' ? ENGLISH_DATA : null, color: '#EF5350', bg: 'linear-gradient(135deg,#EF5350,#C62828)' },
  urdu:    { data: typeof URDU_DATA    !== 'undefined' ? URDU_DATA    : null, color: '#AB47BC', bg: 'linear-gradient(135deg,#AB47BC,#7B1FA2)' }
};

function starsHTML(count, max = 3) {
  return Array.from({ length: max }, (_, i) =>
    `<span style="opacity:${i < count ? '1' : '0.25'}">${i < count ? '⭐' : '☆'}</span>`
  ).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  Progress.load();
  if (!Progress.hasProfile()) {
    window.location.replace('../index.html');
    return;
  }

  const params  = new URLSearchParams(location.search);
  const subject = params.get('subject') || 'maths';
  const meta    = SUBJECT_META[subject];
  const subData = meta?.data;

  if (!subData) {
    document.getElementById('map-title').textContent = 'Coming soon!';
    return;
  }

  Audio.init(Progress.data.settings);

  /* Style header */
  const header = document.getElementById('page-header');
  header.style.background = meta.bg;
  header.querySelectorAll('*').forEach(el => el.style.color = 'white');

  document.getElementById('map-title').textContent = subData.name + ' — ' + subData.world;
  document.getElementById('map-icon').textContent  = subData.icon;

  const prog    = Progress.getSubjectProgress(subject);
  const path    = document.getElementById('level-path');
  path.innerHTML = '';

  subData.levels.forEach((level, idx) => {
    const num       = idx + 1;
    const done      = prog.completed.includes(num);
    const unlocked  = num <= (prog.unlocked || 1);
    const stars     = prog.stars[num] || 0;

    const node = document.createElement('a');
    node.className  = `level-node slide-in-up${done ? ' completed' : ''}${!unlocked ? ' locked' : ''}`;
    node.style.animationDelay = (idx * 0.06) + 's';

    if (unlocked) {
      node.href = level.specialPage
        ? `${level.specialPage}?subject=${subject}&level=${num}`
        : `level.html?subject=${subject}&level=${num}`;
    } else {
      node.href = '#';
      node.addEventListener('click', e => {
        e.preventDefault();
        Audio.play('wrong');
        node.classList.add('shake-anim');
        node.addEventListener('animationend', () => node.classList.remove('shake-anim'), { once: true });
      });
    }

    node.innerHTML = `
      <div class="level-num" style="background:${meta.color}">
        ${unlocked ? num : '🔒'}
      </div>
      <div class="level-details">
        <div class="level-title">${level.icon || ''} ${level.title}</div>
        <div class="level-stars">${unlocked ? starsHTML(stars) : 'Complete previous level first'}</div>
      </div>
      ${done ? '<span class="level-badge">Done! ✓</span>' : ''}
      ${!unlocked ? '<span class="level-lock">🔒</span>' : ''}
    `;

    path.appendChild(node);
  });
});
