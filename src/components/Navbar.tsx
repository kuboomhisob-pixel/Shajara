import React, { useState, useRef, useEffect } from 'react';
import {
  TreeDeciduous,
  Home,
  Share2,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  FileDown,
  FileImage,
  FileText,
  Lock,
  Check,
  Link as LinkIcon,
} from 'lucide-react';
import { exportElementAsImage, exportElementAsPdf } from '../utils/exportUtils';
import { audioEngine } from '../utils/audioEngine';

interface NavbarProps {
  activeTab: 'home' | 'tree';
  onSelectTab: (tab: 'home' | 'tree') => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onLockApp: () => void;
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  isDark,
  onToggleTheme,
  onLockApp,
  isPlayingAudio,
  onToggleAudio,
}) => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowShareMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleExport = async (format: 'png' | 'jpg' | 'pdf') => {
    setIsExporting(true);
    setShowShareMenu(false);

    // If currently on home, switch to tree first
    if (activeTab !== 'tree') {
      onSelectTab('tree');
      // Wait for DOM to render the tree view
      await new Promise((r) => setTimeout(r, 300));
    }

    try {
      if (format === 'pdf') {
        await exportElementAsPdf('shajaraTreeCapture', 'Shajara-Bizning-Oilamiz');
      } else {
        await exportElementAsImage('shajaraTreeCapture', format, 'Shajara-Bizning-Oilamiz');
      }
    } finally {
      setIsExporting(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => {
      setCopiedLink(false);
      setShowShareMenu(false);
    }, 1800);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/80 dark:bg-slate-950/85 border-b border-amber-500/20 text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Left: Brand with Golden Tree */}
        <div
          onClick={() => onSelectTab('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-amber-500/25 to-amber-700/30 border border-amber-400/40 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform shadow-md shadow-amber-500/10">
            <TreeDeciduous className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-bold font-serif text-white tracking-wide group-hover:text-amber-400 transition-colors">
              Shajara
            </span>
            <span className="block text-[10px] sm:text-xs text-amber-400/80 italic font-medium -mt-0.5">
              Bizning oilaviy tariximiz
            </span>
          </div>
        </div>

        {/* Center: Navigation Tabs */}
        <nav className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => onSelectTab('home')}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'home'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Bosh sahifa</span>
          </button>

          <button
            onClick={() => onSelectTab('tree')}
            className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'tree'
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <TreeDeciduous className="w-4 h-4" />
            <span>Shajara</span>
          </button>
        </nav>

        {/* Right: Actions (Share / Theme / Audio / Lock) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Audio Toggle */}
          <button
            onClick={onToggleAudio}
            className={`p-2 sm:p-2.5 rounded-full border transition-all cursor-pointer ${
              isPlayingAudio
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 animate-pulse'
                : 'bg-slate-900/80 text-slate-400 border-slate-700/80 hover:text-white hover:border-slate-600'
            }`}
            title={isPlayingAudio ? "Musiqani to'xtatish" : "Fon musiqasini yoqish"}
          >
            {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Share & Export Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              disabled={isExporting}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-900/80 border border-slate-700/80 hover:border-amber-500/50 text-slate-200 hover:text-amber-300 text-xs sm:text-sm font-medium transition-all cursor-pointer disabled:opacity-50"
              title="Shajarani yuklab olish va ulashish"
            >
              <Share2 className="w-4 h-4 text-amber-400" />
              <span className="hidden md:inline">Ulashish</span>
            </button>

            {showShareMenu && (
              <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-slate-900 border border-amber-500/30 p-2 shadow-2xl text-xs space-y-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 font-semibold text-[11px] uppercase tracking-wider text-amber-400/90 border-b border-slate-800">
                  Shajarani yuklab olish
                </div>

                <button
                  onClick={() => handleExport('png')}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-800 text-slate-200 hover:text-white transition-colors cursor-pointer text-left"
                >
                  <FileImage className="w-4 h-4 text-sky-400" />
                  <span>PNG formatda yuklash</span>
                </button>

                <button
                  onClick={() => handleExport('jpg')}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-800 text-slate-200 hover:text-white transition-colors cursor-pointer text-left"
                >
                  <FileDown className="w-4 h-4 text-emerald-400" />
                  <span>JPG formatda yuklash</span>
                </button>

                <button
                  onClick={() => handleExport('pdf')}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-800 text-slate-200 hover:text-white transition-colors cursor-pointer text-left"
                >
                  <FileText className="w-4 h-4 text-rose-400" />
                  <span>PDF formatda yuklash</span>
                </button>

                <div className="pt-1 border-t border-slate-800">
                  <button
                    onClick={handleCopyLink}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Nusxa olindi!</span>
                      </>
                    ) : (
                      <>
                        <LinkIcon className="w-4 h-4 text-amber-400" />
                        <span>Sayt havolasini nusxalash</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Theme Toggle (Light / Night) */}
          <button
            onClick={onToggleTheme}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-full bg-slate-900/80 border border-slate-700/80 hover:border-amber-500/50 text-slate-200 hover:text-amber-300 text-xs sm:text-sm font-medium transition-all cursor-pointer"
            title={isDark ? "Kunduzgi rejimga o'tish" : "Tungi rejimga o'tish"}
          >
            {isDark ? (
              <>
                <Moon className="w-4 h-4 text-amber-400" />
                <span className="hidden lg:inline">Night</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 text-amber-500" />
                <span className="hidden lg:inline">Light</span>
              </>
            )}
          </button>

          {/* Lock App */}
          <button
            onClick={onLockApp}
            className="p-2 sm:p-2.5 rounded-full bg-slate-900/80 border border-slate-700/80 hover:border-red-500/50 text-slate-400 hover:text-red-400 transition-all cursor-pointer"
            title="Qulflash (Parolni qayta so'rash)"
          >
            <Lock className="w-4 h-4" />
          </button>

          {/* Language pill */}
          <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-bold text-amber-400">
            UZ
          </div>
        </div>
      </div>
    </header>
  );
};
