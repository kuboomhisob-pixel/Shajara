import React from 'react';
import { TreeDeciduous, Heart, Shield, Sparkles, BookOpen, Users, ArrowRight, Award } from 'lucide-react';
import { FamilyAvatar } from './Avatars';

interface HomeSectionProps {
  onNavigateToTree: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigateToTree }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 space-y-12">
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 p-6 sm:p-10 md:p-14 shadow-2xl">
        {/* Background visual overlay using user's asset */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url('/assets/aistudio/file_00000000da9c82108803cf0f3959eb84_18a1de37.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <TreeDeciduous className="w-4 h-4 text-amber-400" />
            <span>Mahmudxoʻja nuqtayi nazaridan</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight leading-tight mb-4">
            Bizning oilaviy <span className="text-amber-400">tariximiz</span> va shajaramiz
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
            Har bir inson oʻz nasl-nasabi, ota-bobolari va ajdodlarini bilishi, ularning ezgu anʼanalarini asrab-avaylashi muqaddas burchdir. Ushbu shajara orqali oilamizning uch avlodi, ildizlari va rishtalarini ehtirom ila jamladik.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onNavigateToTree}
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 cursor-pointer transition-all active:scale-[0.98]"
            >
              <span>Shajarani koʻrish</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-300 text-xs font-medium">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Parol bilan himoyalangan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lineage Breakdown Cards */}
      <div>
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 dark:text-white mb-2">
            Sulolamizning Muqaddas Ildizlari
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Otam va Onam tomon ajdodlarimiz, shuningdek yangi kamol topayotgan avlodimiz tarixi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Otam Tomoni */}
          <div className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between group hover:border-amber-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/60">
                  Otam tomoni
                </span>
                <span className="text-lg">🏛️</span>
              </div>

              <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white mb-3">
                Mamasharipovlar sulolasi
              </h3>

              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <FamilyAvatar type="grandfather_paternal" size={42} />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Gʻofurxoʻja Mamasharipov</div>
                    <div className="text-slate-500 dark:text-slate-400">Dodam (buvam)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <FamilyAvatar type="grandmother_paternal" size={42} />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Shoiraxon Mamasharipova</div>
                    <div className="text-slate-500 dark:text-slate-400">Katta oyim (buvim)</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 pt-3">
              Ushbu muborak xonadonda otamiz <strong>Abdumannonxoʻja Mamasharipov</strong> 1981-yil 22-iyunda tavallud topganlar.
            </p>
          </div>

          {/* Card 2: Onam Tomoni */}
          <div className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between group hover:border-amber-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800/60">
                  Onam tomoni
                </span>
                <span className="text-lg">🕌</span>
              </div>

              <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white mb-3">
                Mahmudovlar sulolasi
              </h3>

              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <FamilyAvatar type="grandfather_maternal" size={42} />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Suratbek Mahmudov</div>
                    <div className="text-slate-500 dark:text-slate-400">Hoji dodam (buvam)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <FamilyAvatar type="grandmother_maternal" size={42} />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Zulfiya Mahmudova</div>
                    <div className="text-slate-500 dark:text-slate-400">Hoji buvim</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 pt-3">
              Ushbu tabarruk xonadonda onamiz <strong>Hilolaxon Mamasharipova</strong> 1987-yil 10-iyulda tavallud topganlar.
            </p>
          </div>

          {/* Card 3: Yangi Avlod */}
          <div className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between group hover:border-amber-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60">
                  Yangi Avlod
                </span>
                <span className="text-lg">🌱</span>
              </div>

              <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white mb-3">
                Toʻrt nafar farzand
              </h3>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-center">
                  <div className="font-bold text-slate-900 dark:text-white text-[11px]">Mahmudxoʻja</div>
                  <div className="text-[10px] text-amber-500 font-semibold">1-farzand (Men)</div>
                  <div className="text-[10px] text-slate-400">26.08.2008</div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-center">
                  <div className="font-bold text-slate-900 dark:text-white text-[11px]">Halimaxon</div>
                  <div className="text-[10px] text-rose-400 font-semibold">2-farzand</div>
                  <div className="text-[10px] text-slate-400">...</div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-center">
                  <div className="font-bold text-slate-900 dark:text-white text-[11px]">Muhammadsharifxoʻja</div>
                  <div className="text-[10px] text-sky-400 font-semibold">3-farzand</div>
                  <div className="text-[10px] text-slate-400">...</div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-center">
                  <div className="font-bold text-slate-900 dark:text-white text-[11px]">Muhammadsodiq</div>
                  <div className="text-[10px] text-sky-400 font-semibold">4-farzand</div>
                  <div className="text-[10px] text-slate-400">...</div>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 pt-3">
              Abdumannonxoʻja va Hilolaxon xonadonida 4 farzand mehr-oqibat va ibratda unib-oʻsmoqda.
            </p>
          </div>
        </div>
      </div>

      {/* Facts & Statistics Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center">
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-500 font-serif mb-1">3</div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Avlod bogʻlanishi
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center">
          <div className="text-2xl sm:text-3xl font-extrabold text-sky-500 font-serif mb-1">10</div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Aziz oila aʼzosi
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center">
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-500 font-serif mb-1">100%</div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Xavfsiz va shaxsiy
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center">
          <div className="text-2xl sm:text-3xl font-extrabold text-rose-500 font-serif mb-1">2008</div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Mahmudxoʻja yili
          </div>
        </div>
      </div>
    </div>
  );
};
