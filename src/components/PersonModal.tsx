import React, { useState, useEffect } from 'react';
import { X, Calendar, UserCheck, Heart, Sparkles, BookOpen, Shield, Save } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Person } from '../types';
import { FamilyAvatar } from './Avatars';

interface PersonModalProps {
  person: Person | null;
  onClose: () => void;
}

export const PersonModal: React.FC<PersonModalProps> = ({ person, onClose }) => {
  const [note, setNote] = useState('');
  const [savedNotification, setSavedNotification] = useState(false);

  useEffect(() => {
    if (person) {
      const storedNote = localStorage.getItem(`shajara_note_${person.id}`) || '';
      setNote(storedNote);
      setSavedNotification(false);
    }
  }, [person]);

  if (!person) return null;

  const isMale = person.gender === 'male';

  const handleSaveNote = () => {
    localStorage.setItem(`shajara_note_${person.id}`, note);
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-slate-900 dark:bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top banner glow */}
          <div
            className={`absolute top-0 left-0 right-0 h-28 opacity-20 pointer-events-none ${
              isMale ? 'bg-gradient-to-b from-blue-500 to-transparent' : 'bg-gradient-to-b from-rose-500 to-transparent'
            }`}
          />

          {/* Header with Avatar and Gender Badge */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 relative pt-2">
            <div
              className={`relative p-1 rounded-2xl border-2 shrink-0 ${
                isMale
                  ? 'border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.35)]'
                  : 'border-rose-500 shadow-[0_0_20px_rgba(225,29,72,0.35)]'
              }`}
            >
              <FamilyAvatar type={person.avatarType} size={84} />

              {/* Gender Symbol as specified */}
              {isMale ? (
                <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-md">
                  ♂️
                </div>
              ) : (
                <div className="absolute -top-1 -right-1 bg-rose-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-[10px] font-bold shadow-md">
                  ♀️
                </div>
              )}

              {person.isMe && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow">
                  MEN
                </div>
              )}
            </div>

            <div className="text-center sm:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <span
                  className={`text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full border ${
                    isMale
                      ? 'bg-blue-950/60 text-blue-300 border-blue-800/60'
                      : 'bg-rose-950/60 text-rose-300 border-rose-800/60'
                  }`}
                >
                  {isMale ? "Oʻgʻil / Erkak" : "Qiz / Ayol"}
                </span>

                <span className="text-[11px] font-semibold text-amber-400 bg-amber-950/50 border border-amber-800/50 px-2.5 py-0.5 rounded-full">
                  {person.generation}-Avlod
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold font-serif text-white tracking-wide">
                {person.name}
              </h2>

              <p className="text-sm font-medium text-amber-300/90 mt-0.5">
                {person.role}
              </p>
            </div>
          </div>

          {/* Details list */}
          <div className="space-y-3.5 text-sm">
            {/* Tavallud Sanasi */}
            <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                  Tavallud sanasi / Maʼlumot
                </div>
                <div className="font-semibold text-slate-100 mt-0.5">
                  {person.birthDate && person.birthDate !== '...' ? (
                    <span className="text-amber-200">{person.birthDate}</span>
                  ) : (
                    <span className="text-slate-500 italic">...</span>
                  )}
                </div>
              </div>
            </div>

            {/* Sulolaviy o'rni va faktlar */}
            <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                  Sulolaviy oʻrni / Faktlar
                </div>
                <div className="text-slate-200 mt-0.5 leading-relaxed">
                  {person.bio && person.bio !== '...' ? (
                    person.bio
                  ) : (
                    <span className="text-slate-500 italic">...</span>
                  )}
                </div>
              </div>
            </div>

            {/* Qarindoshlik rishtasi */}
            <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                <Heart className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                  Shajara yoʻnalishi
                </div>
                <div className="text-slate-200 mt-0.5">
                  {person.branch === 'paternal' && 'Otam tomondan (Buvam va buvim sulolasi)'}
                  {person.branch === 'maternal' && 'Onam tomondan (Hoji buvam va hoji buvim sulolasi)'}
                  {person.branch === 'parents' && 'Ota-onamiz (Sulola asosi)'}
                  {person.branch === 'children' && `Farzandlar davomchilari (${person.childNumber}-farzand)`}
                </div>
              </div>
            </div>

            {/* Shaxsiy xotira / eslatma qo'shish */}
            <div className="p-3.5 rounded-2xl bg-slate-800/40 border border-slate-700/40">
              <div className="flex items-center justify-between mb-2">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Shaxsiy xotira yoki eslatma yozish
                </label>
                {savedNotification && (
                  <span className="text-[11px] text-emerald-400 font-medium">Saqlandi!</span>
                )}
              </div>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Ushbu shaxs haqida oʻzingiz bilgan qoʻshimcha xotira, ibratli soʻz yoki voqealarni yozib qoʻying..."
                rows={2}
                className="w-full bg-slate-900/90 border border-slate-700 rounded-xl p-2.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
              />
              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  onClick={handleSaveNote}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 cursor-pointer transition-colors"
                >
                  <Save className="w-3.5 h-3.5" />
                  Saqlash
                </button>
              </div>
            </div>
          </div>

          {/* Privacy footer */}
          <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              Mahfiy & himoyalangan maʼlumot
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              Yopish
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
