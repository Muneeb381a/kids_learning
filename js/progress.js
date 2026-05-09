/* Progress — localStorage data layer */

const STORAGE_KEY = 'sikho_star_v1';

const DEFAULT_DATA = {
  profile: {
    name: '',
    age: 6,
    avatar: 'boy1',
    createdAt: ''
  },
  progress: {
    maths:   { completed: [], stars: {}, unlocked: 1 },
    science: { completed: [], stars: {}, unlocked: 1 },
    english: { completed: [], stars: {}, unlocked: 1 },
    urdu:    { completed: [], stars: {}, unlocked: 1 }
  },
  stickers: [],
  streak: { current: 0, lastDate: '', longest: 0 },
  totalStars: 0,
  totalTime: 0,
  settings: {
    music: true,
    sound: true,
    language: 'en',
    parentPIN: '',
    dailyLimit: 60
  }
};

const Progress = {
  data: null,

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      this.data = raw ? JSON.parse(raw) : null;
      if (this.data) this._migrate();
    } catch (_) {
      this.data = null;
    }
    return this.data;
  },

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.warn('Save failed:', e);
    }
  },

  hasProfile() {
    return !!(this.data && this.data.profile && this.data.profile.name);
  },

  createProfile(name, age, avatar) {
    this.data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    this.data.profile.name      = name;
    this.data.profile.age       = age;
    this.data.profile.avatar    = avatar;
    this.data.profile.createdAt = today();
    this._checkStreak();
    this.save();
  },

  getSubjectProgress(subject) {
    return this.data.progress[subject] || { completed: [], stars: {}, unlocked: 1 };
  },

  completeLevel(subject, level, stars) {
    const p = this.data.progress[subject];
    const prev = p.stars[level] || 0;

    if (!p.completed.includes(level)) {
      p.completed.push(level);
      this.data.totalStars += stars;
    } else if (stars > prev) {
      this.data.totalStars += (stars - prev);
    }

    p.stars[level] = Math.max(prev, stars);
    p.unlocked     = Math.max(p.unlocked, level + 1);

    this._checkStreak();
    this.save();
  },

  addTime(seconds) {
    this.data.totalTime = (this.data.totalTime || 0) + seconds;
    this.save();
  },

  addSticker(id) {
    if (!this.data.stickers.includes(id)) {
      this.data.stickers.push(id);
      this.save();
    }
  },

  updateSettings(patch) {
    Object.assign(this.data.settings, patch);
    this.save();
  },

  updateAvatarConfig(config) {
    this.data.profile.avatarConfig = config;
    this.save();
  },

  bumpMiniGames() {
    this.data.miniGamesPlayed = (this.data.miniGamesPlayed || 0) + 1;
    this.save();
  },

  getTotalProgress() {
    const subjects = ['maths', 'science', 'english', 'urdu'];
    const completed = subjects.reduce(
      (n, s) => n + this.data.progress[s].completed.length, 0
    );
    return { total: 40, completed, percent: Math.round((completed / 40) * 100) };
  },

  /* ---- internals ---- */

  _checkStreak() {
    const todayStr = today();
    const s        = this.data.streak;
    if (s.lastDate === todayStr) return;

    const yesterday = new Date(Date.now() - 86_400_000)
      .toISOString().split('T')[0];

    s.current  = s.lastDate === yesterday ? s.current + 1 : 1;
    s.longest  = Math.max(s.longest, s.current);
    s.lastDate = todayStr;
  },

  _migrate() {
    const d = DEFAULT_DATA;
    if (!this.data.settings) this.data.settings = { ...d.settings };
    if (!this.data.streak)   this.data.streak   = { ...d.streak };
    if (!this.data.stickers) this.data.stickers = [];
    if (this.data.totalTime  === undefined) this.data.totalTime  = 0;
    if (this.data.totalStars === undefined) this.data.totalStars = 0;

    for (const subject of ['maths', 'science', 'english', 'urdu']) {
      if (!this.data.progress[subject]) {
        this.data.progress[subject] = { completed: [], stars: {}, unlocked: 1 };
      }
      if (this.data.progress[subject].unlocked === undefined) {
        this.data.progress[subject].unlocked = 1;
      }
    }
  }
};

function today() {
  return new Date().toISOString().split('T')[0];
}
