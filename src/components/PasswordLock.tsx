import React, { useState } from 'react';
import { Lock, KeyRound, ShieldCheck, Eye, EyeOff, TreeDeciduous, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface PasswordLockProps {
  onUnlock: () => void;
}

export const PasswordLock: React.FC<PasswordLockProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Shajara*2008') {
      setIsSubmitting(true);
      sessionStorage.setItem('shajara_auth_token', 'authorized');
      setTimeout(() => {
        onUnlock();
      }, 400);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden bg-slate-950/95 backdrop-blur-2xl">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-600/15 via-emerald-600/10 to-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative oriental stars and geometry */}
      <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="relative w-full max-w-md bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-amber-500/25 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/80 text-center"
      >
        {/* Top Emblem */}
        <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-emerald-500/20 border border-amber-500/40 flex items-center justify-center shadow-lg shadow-amber-500/10 mb-6 group">
          <TreeDeciduous className="w-10 h-10 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 font-serif tracking-wide mb-2">
          Shajara
        </h1>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500/80 mb-3">
          Bizning oilaviy tariximiz
        </p>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          Oilamiz shajarasi va avlodlar rishtalarini koʻrish uchun maxfiy parolni kiriting.
        </p>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <KeyRound className="w-4 h-4 text-amber-400/80" />
            </div>

            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Maxfiy parolni kiriting..."
              autoFocus
              className={`w-full pl-10 pr-12 py-3.5 bg-slate-900/80 border ${
                error
                  ? 'border-red-500 ring-2 ring-red-500/30'
                  : 'border-slate-700/80 focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20'
              } rounded-xl text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none transition-all`}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-medium text-red-400 bg-red-950/40 border border-red-800/40 py-2 px-3 rounded-lg"
            >
              Noto‘g‘ri parol kiritildi! Iltimos, qaytadan tekshirib kiring.
            </motion.p>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !password.trim()}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-slate-950 shadow-lg shadow-amber-600/25 hover:shadow-amber-600/40 active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <Lock className="w-4 h-4" />
            <span>Saytga kirish</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </button>
        </form>

        {/* Security & Privacy Commitment */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-start gap-2.5 text-left text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed text-[11px]">
            <strong className="text-slate-300">Maxfiylik va Xavfsizlik Kafolati:</strong> Berilgan barcha ma'lumotlar faqat sizning qurilmangizda saqlanadi. Hech qanday tashqi serverlarga yuborilmaydi va sotilmaydi.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
