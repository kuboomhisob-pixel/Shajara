import React from 'react';
import { Person } from '../types';
import { FAMILY_DATA } from '../data/familyData';
import { PersonCard } from './PersonCard';
import { TreeDeciduous, ListTree, GitFork } from 'lucide-react';

interface TreeViewProps {
  onSelectPerson: (person: Person) => void;
  activeView: 'tree' | 'struct';
  onChangeView: (view: 'tree' | 'struct') => void;
}

export const TreeView: React.FC<TreeViewProps> = ({
  onSelectPerson,
  activeView,
  onChangeView,
}) => {
  const pGofur = FAMILY_DATA['gofurxoja'];
  const pShoira = FAMILY_DATA['shoira'];
  const pSurat = FAMILY_DATA['suratbek'];
  const pZulfiya = FAMILY_DATA['zulfiya'];
  const pAbdumannon = FAMILY_DATA['abdumannon'];
  const pHilola = FAMILY_DATA['hilolaxon'];
  const pMahmud = FAMILY_DATA['mahmudxoja'];
  const pHalima = FAMILY_DATA['halimaxon'];
  const pSharif = FAMILY_DATA['muhammadsharif'];
  const pSodiq = FAMILY_DATA['muhammadsodiq'];

  return (
    <div className="w-full relative flex flex-col items-center pb-8">
      {/* Visual Header matching the screenshot */}
      <div className="text-center max-w-2xl mx-auto px-4 pt-3 pb-2">
        {/* Golden Tree Crest */}
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 mb-1.5 shadow-sm">
          <TreeDeciduous className="w-5 h-5" />
        </div>

        {/* Golden Banner */}
        <div className="flex items-center justify-center gap-2.5 text-amber-600 dark:text-amber-400 font-bold text-[11px] uppercase tracking-[0.25em] mb-1">
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-amber-500/60" />
          <span>AVLODLAR BOGʻLANISHI</span>
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-amber-500/60" />
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-slate-900 dark:text-white tracking-tight mb-1.5">
          Bizning shajara
        </h1>

        {/* Subtitle */}
        <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-400 italic max-w-lg mx-auto leading-relaxed">
          Har bir ism ustiga bosing — mavjud maʼlumotlar koʻrsatiladi. Maʼlumot berilmagan joylarda “...” aks etadi.
        </p>

        {/* Switch View Buttons (Struktura & Oilaviy daraxt) */}
        <div className="flex items-center justify-center gap-2.5 mt-3">
          <button
            onClick={() => onChangeView('struct')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer shadow-sm ${
              activeView === 'struct'
                ? 'bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 shadow-md ring-2 ring-amber-500/30'
                : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            <ListTree className="w-3.5 h-3.5" />
            <span>Struktura</span>
          </button>

          <button
            onClick={() => onChangeView('tree')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer shadow-sm ${
              activeView === 'tree'
                ? 'bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 shadow-md ring-2 ring-amber-500/30'
                : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            <GitFork className="w-3.5 h-3.5" />
            <span>Oilaviy daraxt</span>
          </button>
        </div>
      </div>

      {/* Capture Container for high-quality export (PNG/JPG/PDF) */}
      <div
        id="shajaraTreeCapture"
        className="w-full relative overflow-x-auto py-3 px-4 flex flex-col items-center select-none"
        style={{ minWidth: '920px' }}
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-amber-500/5 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* =========================================================================
            ROW 1: GRANDPARENTS (BOBO VA BUVILAR)
            ========================================================================= */}
        <div className="relative z-10 flex items-start justify-center gap-14 md:gap-20">
          {/* Paternal Grandparents */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <PersonCard
                  person={pGofur}
                  onClick={onSelectPerson}
                  subText="Otam tomondan"
                />
                <div className="w-0.5 h-3.5 bg-slate-400 dark:bg-slate-500" />
              </div>

              <div className="flex flex-col items-center">
                <PersonCard
                  person={pShoira}
                  onClick={onSelectPerson}
                  subText="Otam tomondan"
                />
                <div className="w-0.5 h-3.5 bg-slate-400 dark:bg-slate-500" />
              </div>
            </div>

            {/* Horizontal connector spanning G'ofurxo'ja & Shoira centers */}
            <div className="w-[188px] h-0 border-b-2 border-slate-400 dark:border-slate-500 -mt-0.5" />
            {/* Vertical stem connecting down to Father */}
            <div className="w-0.5 h-6 bg-slate-400 dark:bg-slate-500" />
          </div>

          {/* Maternal Grandparents */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <PersonCard
                  person={pSurat}
                  onClick={onSelectPerson}
                  subText="Onam tomondan"
                />
                <div className="w-0.5 h-3.5 bg-slate-400 dark:bg-slate-500" />
              </div>

              <div className="flex flex-col items-center">
                <PersonCard
                  person={pZulfiya}
                  onClick={onSelectPerson}
                  subText="Onam tomondan"
                />
                <div className="w-0.5 h-3.5 bg-slate-400 dark:bg-slate-500" />
              </div>
            </div>

            {/* Horizontal connector spanning Suratbek & Zulfiya centers */}
            <div className="w-[188px] h-0 border-b-2 border-slate-400 dark:border-slate-500 -mt-0.5" />
            {/* Vertical stem connecting down to Mother */}
            <div className="w-0.5 h-6 bg-slate-400 dark:bg-slate-500" />
          </div>
        </div>

        {/* =========================================================================
            ROW 2: PARENTS (OTA VA ONA)
            Joined together with wedding rings
            ========================================================================= */}
        <div className="relative z-10 flex items-center justify-center gap-5 my-0">
          {/* Father */}
          <PersonCard
            person={pAbdumannon}
            onClick={onSelectPerson}
            subText="(22.06.1981)"
          />

          {/* Golden Wedding Rings */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/30 ring-2 ring-amber-300/40">
            <span className="text-lg font-bold select-none leading-none">💍</span>
          </div>

          {/* Mother */}
          <PersonCard
            person={pHilola}
            onClick={onSelectPerson}
            subText="(10.07.1987)"
          />
        </div>

        {/* =========================================================================
            CONNECTOR 2: Stems to 4 Children
            ========================================================================= */}
        <div className="relative flex flex-col items-center pointer-events-none mt-0.5">
          {/* Stem dropping down from parents' wedding rings */}
          <div className="w-0.5 h-5 bg-slate-400 dark:bg-slate-500" />

          {/* Crossbar spanning across all 4 children centers:
              Each card is 172px wide, gap is 16px (172 + 16 = 188px between centers)
              Total span from 1st card center to 4th card center is 3 * 188px = 564px */}
          <div className="w-[564px] h-0 border-b-2 border-slate-400 dark:border-slate-500" />
        </div>

        {/* =========================================================================
            ROW 3: CHILDREN (FARZANDLAR)
            ========================================================================= */}
        <div className="relative z-10 flex items-start justify-center gap-4 pt-0">
          {/* 1-farzand (Mahmudxo'ja - Men) */}
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-4 bg-slate-400 dark:bg-slate-500" />
            <PersonCard
              person={pMahmud}
              onClick={onSelectPerson}
              subText="(26.08.2008 • 1-farzand)"
            />
          </div>

          {/* 2-farzand (Halimaxon) */}
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-4 bg-slate-400 dark:bg-slate-500" />
            <PersonCard
              person={pHalima}
              onClick={onSelectPerson}
              subText="(2-farzand)"
            />
          </div>

          {/* 3-farzand (Muhammadsharifxo'ja) */}
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-4 bg-slate-400 dark:bg-slate-500" />
            <PersonCard
              person={pSharif}
              onClick={onSelectPerson}
              subText="(3-farzand)"
            />
          </div>

          {/* 4-farzand (Muhammadsodiq) */}
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-4 bg-slate-400 dark:bg-slate-500" />
            <PersonCard
              person={pSodiq}
              onClick={onSelectPerson}
              subText="(4-farzand)"
            />
          </div>
        </div>

        {/* Bottom Filigree and Quote */}
        <div className="mt-6 text-center relative z-10">
          <div className="flex items-center justify-center gap-2.5 text-amber-500 mb-1">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-amber-500" />
            <TreeDeciduous className="w-4 h-4 text-amber-500" />
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-amber-500" />
          </div>
          <p className="text-sm sm:text-base font-serif italic text-slate-800 dark:text-amber-200/90 font-medium tracking-wide">
            Oila — baxt va mehr manbai...
          </p>
        </div>
      </div>
    </div>
  );
};
