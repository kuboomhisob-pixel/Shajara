/**
 * Generative soothing oriental / ambient music synthesizer using the Web Audio API.
 * High fidelity, zero external network dependency, plays peaceful melodic phrases.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private intervalId: any = null;
  private volume: number = 0.5;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  // Play a soft resonant harp / santur note
  public playPluckNote(freq: number, duration: number = 3.5, timeOffset: number = 0) {
    if (!this.ctx || !this.masterGain) return;

    const t = this.ctx.currentTime + timeOffset;

    // Dual oscillator for rich organic timbre
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();

    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Pentatonic oriental harmony: warm low-pass resonance
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(freq * 3.5, t);
    filter.frequency.exponentialRampToValueAtTime(freq * 0.8, t + duration * 0.7);
    filter.Q.setValueAtTime(4.0, t);

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, t);

    // Subtle detune for natural chorus warmth
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 1.002, t);

    // Warm sub-bass body
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(freq / 2, t);

    // Pluck envelope (fast attack, gentle slow decay)
    noteGain.gain.setValueAtTime(0.0001, t);
    noteGain.gain.linearRampToValueAtTime(0.18, t + 0.04);
    noteGain.gain.exponentialRampToValueAtTime(0.04, t + 0.8);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    subOsc.connect(filter);

    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc1.start(t);
    osc2.start(t);
    subOsc.start(t);

    osc1.stop(t + duration);
    osc2.stop(t + duration);
    subOsc.stop(t + duration);
  }

  public playCardChime() {
    this.initCtx();
    const chimeFrequencies = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    chimeFrequencies.forEach((freq, idx) => {
      this.playPluckNote(freq, 1.4, idx * 0.08);
    });
  }

  public startMusic(onTick?: (noteIndex: number) => void) {
    this.initCtx();
    if (this.isPlaying) return;
    this.isPlaying = true;

    // Classic meditative maqom/pentatonic scale frequencies (F#, G#, A#, C#, D#)
    const scale = [
      185.00, // F#3
      220.00, // A3
      246.94, // B3
      277.18, // C#4
      329.63, // E4
      369.99, // F#4
      440.00, // A4
      493.88, // B4
      554.37, // C#5
      659.25, // E5
      739.99, // F#5
    ];

    let step = 0;
    const playNext = () => {
      if (!this.isPlaying) return;

      // Select melodious patterns
      const chordNotes = [
        scale[0], // root
        scale[3], // fifth
        scale[5 + (step % 5)],
      ];

      // Pluck root
      this.playPluckNote(chordNotes[0], 4.5, 0);

      // Gentle arpeggio
      if (Math.random() > 0.3) {
        this.playPluckNote(scale[4 + Math.floor(Math.random() * 5)], 3.0, 0.4);
      }
      if (Math.random() > 0.4) {
        this.playPluckNote(scale[6 + Math.floor(Math.random() * 4)], 2.5, 0.9);
      }

      if (onTick) {
        onTick(step);
      }
      step++;
    };

    // First notes immediately
    playNext();
    this.intervalId = setInterval(playNext, 2400);
  }

  public stopMusic() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public toggle(onTick?: (noteIndex: number) => void): boolean {
    if (this.isPlaying) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic(onTick);
      return true;
    }
  }
}

export const audioEngine = new SoundEngine();
