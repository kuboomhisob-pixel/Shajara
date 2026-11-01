import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, Heart } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface AudioBarProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const AudioBar: React.FC<AudioBarProps> = ({ isPlaying, onTogglePlay }) => {
  const [volume, setVolume] = useState(0.4);
  const [waveStep, setWaveStep] = useState(0);

  useEffect(() => {
    let animId: any;
    if (isPlaying) {
      animId = setInterval(() => {
        setWaveStep((prev) => (prev + 1) % 100);
      }, 150);
    }
    return () => clearInterval(animId);
  }, [isPlaying]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    audioEngine.setVolume(val);
  };

  return (
    <footer className="sticky bottom-0 z-30 bg-slate-950/90 backdrop-blur-xl border-t border-amber-500/20 px-4 py-3 text-slate-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        {/* Left: Music info and Player controls */}
        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-start">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Music className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-semibold text-slate-200">Oila madhiyasi</span>
              <span className="hidden md:inline text-slate-500 ml-1.5 text-[11px]">
                (Sharqona sokin navo)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Play/Pause Button */}
            <button
              onClick={onTogglePlay}
              className="w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-md shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
              title={isPlaying ? "Musiqani to'xtatish" : "Musiqani tinglash"}
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              )}
            </button>

            {/* Visual Equalizer Waves */}
            <div className="flex items-end gap-1 h-4 w-12 px-1">
              {[0.4, 0.9, 0.6, 0.8, 0.5].map((heightFactor, i) => {
                const activeHeight = isPlaying
                  ? Math.sin(waveStep * 0.4 + i * 1.2) * 8 + 10
                  : 3;
                return (
                  <div
                    key={i}
                    className="w-1 bg-amber-400/80 rounded-full transition-all duration-150"
                    style={{ height: `${activeHeight}px` }}
                  />
                );
              })}
            </div>

            {/* Volume Slider */}
            <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-slate-800">
              <button
                onClick={() => {
                  const newVol = volume > 0 ? 0 : 0.4;
                  setVolume(newVol);
                  audioEngine.setVolume(newVol);
                }}
                className="text-slate-400 hover:text-white"
              >
                {volume === 0 ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Right: Copyright & Version tag */}
        <div className="flex items-center gap-2 text-slate-400 text-[11px]">
          <span>Shajara v1.0</span>
          <span>•</span>
          <span>Bizning oilaviy tariximiz</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-current ml-0.5 inline" />
        </div>
      </div>
    </footer>
  );
};
