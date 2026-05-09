/* Avatar system — shared across all pages */

const AVATAR_BASES = [
  { emoji: '👦', label: 'Ali'    },
  { emoji: '👧', label: 'Sara'   },
  { emoji: '🧒', label: 'Usman'  },
  { emoji: '🧕', label: 'Aisha'  },
  { emoji: '👨', label: 'Bilal'  },
  { emoji: '👩', label: 'Fatima' },
];

const AVATAR_HATS = [
  { emoji: '',   label: 'Koi Nahi' },
  { emoji: '🧢', label: 'Cap'      },
  { emoji: '🎓', label: 'Scholar'  },
  { emoji: '👑', label: 'Crown'    },
  { emoji: '🎊', label: 'Party'    },
  { emoji: '⛑️', label: 'Hero'     },
];

const AVATAR_BG = [
  { color: '#FFD54F', label: 'Yellow' },
  { color: '#4FC3F7', label: 'Blue'   },
  { color: '#F48FB1', label: 'Pink'   },
  { color: '#A5D6A7', label: 'Green'  },
  { color: '#CE93D8', label: 'Purple' },
  { color: '#FFCC80', label: 'Orange' },
];

const AVATAR_ACCESSORIES = [
  { emoji: '',   label: 'Koi Nahi'  },
  { emoji: '👓', label: 'Glasses'   },
  { emoji: '🕶️', label: 'Cool'      },
  { emoji: '⭐', label: 'Star'      },
  { emoji: '📚', label: 'Bookworm'  },
];

const LEGACY_BASE_MAP = {
  boy1: '👦', girl1: '👧', boy2: '🧒', girl2: '🧕'
};

function getAvatarConfig(profile) {
  if (profile && profile.avatarConfig) return profile.avatarConfig;
  return {
    base:      LEGACY_BASE_MAP[profile?.avatar] || '👦',
    hat:       '',
    bg:        '#FFD54F',
    accessory: ''
  };
}

function renderAvatar(config, container, size) {
  if (!container) return;
  size = size || 64;
  const cfg  = config || { base: '👦', hat: '', bg: '#FFD54F', accessory: '' };
  const fSz  = Math.round(size * 0.55);
  const hSz  = Math.round(size * 0.40);
  const aSz  = Math.round(size * 0.30);
  const hTop = Math.round(size * 0.18);

  const wrap = document.createElement('div');
  wrap.style.cssText = `
    width:${size}px; height:${size}px; border-radius:50%;
    background:${cfg.bg || '#FFD54F'};
    position:relative; display:inline-flex;
    align-items:center; justify-content:center;
    flex-shrink:0; overflow:visible;
    box-shadow:0 4px 14px rgba(0,0,0,0.18);
  `;

  const face = document.createElement('span');
  face.style.cssText = `font-size:${fSz}px; line-height:1; user-select:none;`;
  face.textContent = cfg.base || '👦';
  wrap.appendChild(face);

  if (cfg.hat) {
    const hat = document.createElement('span');
    hat.style.cssText = `
      position:absolute; top:-${hTop}px; left:50%;
      transform:translateX(-50%); font-size:${hSz}px;
      line-height:1; user-select:none;
    `;
    hat.textContent = cfg.hat;
    wrap.appendChild(hat);
  }

  if (cfg.accessory) {
    const acc = document.createElement('span');
    acc.style.cssText = `
      position:absolute; bottom:0; right:-4px;
      font-size:${aSz}px; line-height:1; user-select:none;
    `;
    acc.textContent = cfg.accessory;
    wrap.appendChild(acc);
  }

  container.innerHTML = '';
  container.appendChild(wrap);
}
