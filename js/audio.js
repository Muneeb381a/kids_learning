/* Audio — Web Audio API tones + real file support */

const Audio = {
  enabled: true,
  musicEnabled: false,
  _ctx: null,

  sounds: {
    click:   { freq: 880,  dur: 0.07, type: 'sine'     },
    correct: { freq: 523,  dur: 0.35, type: 'sine',  arp: [523, 659, 784] },
    wrong:   { freq: 180,  dur: 0.42, type: 'sawtooth', arp: [200, 160, 140] },
    win:     { freq: 523,  dur: 0.18, type: 'sine',  arp: [523, 659, 784, 1047, 1319] },
    levelup: { freq: 784,  dur: 0.6,  type: 'sine',  arp: [659, 784, 988, 1319] },
    star:    { freq: 1047, dur: 0.22, type: 'sine'     },
    sticker: { freq: 659,  dur: 0.28, type: 'sine',  arp: [659, 880] },
    streak:  { freq: 440,  dur: 0.4,  type: 'sine',  arp: [440, 554, 659] },
    pop:     { freq: 1200, dur: 0.1,  type: 'sine',  arp: [1200, 900] },
    tick:    { freq: 600,  dur: 0.05, type: 'square' },
    woosh:   { freq: 400,  dur: 0.25, type: 'sine',  arp: [400, 600, 300] },
    fanfare: { freq: 392,  dur: 0.14, type: 'sine',  arp: [392, 523, 659, 784, 1047, 1319, 1047, 784] },
    countdown: { freq: 440, dur: 0.08, type: 'square', arp: [880, 880] },
    bubble:  { freq: 800,  dur: 0.18, type: 'sine',  arp: [800, 1100, 700] },
    miss:    { freq: 300,  dur: 0.3,  type: 'sawtooth', arp: [300, 250] },
  },

  init(settings = {}) {
    this.enabled      = settings.sound !== false;
    this.musicEnabled = settings.music === true;
  },

  play(name) {
    if (!this.enabled) return;
    const cfg = this.sounds[name];
    if (!cfg) return;
    this._tone(cfg);
  },

  _getCtx() {
    if (!this._ctx) {
      try {
        this._ctx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (_) { return null; }
    }
    if (this._ctx.state === 'suspended') {
      this._ctx.resume().catch(() => {});
    }
    return this._ctx;
  },

  _tone(cfg) {
    const ctx = this._getCtx();
    if (!ctx) return;

    const notes = cfg.arp || [cfg.freq];
    const step  = cfg.arp ? cfg.dur / notes.length : cfg.dur;

    notes.forEach((freq, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = cfg.type;
      const t  = ctx.currentTime + i * step * 0.8;

      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0.28, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + step * 0.95);

      osc.start(t);
      osc.stop(t + step);
    });
  },

  toggle(type) {
    if (type === 'music') {
      this.musicEnabled = !this.musicEnabled;
      return this.musicEnabled;
    }
    this.enabled = !this.enabled;
    return this.enabled;
  }
};
