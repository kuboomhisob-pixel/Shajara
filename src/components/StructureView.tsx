import React, { useState } from 'react';
import { Person } from '../types';
import { FAMILY_DATA, GENERATIONS } from '../data/familyData';
import { PersonCard } from './PersonCard';
import { Search, TreeDeciduous, ListTree, GitFork, Users, Sparkles } from 'lucide-react';

interface StructureViewProps {
  onSelectPerson: (person: Person) => void;
  activeView: 'tree' | 'struct';
  onChangeView: (view: 'tree' | 'struct') => void;
}

export const StructureView: React.FC<StructureViewProps> = ({
  onSelectPerson,
  activeView,
  onChangeView,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGenerations = GENERATIONS.map((gen) => {
    const members = gen.members
      .map((id) => FAMILY_DATA[id])
      .filter((person) => {
        if (!person) return false;
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          person.name.toLowerCase().includes(q) ||
          person.role.toLowerCase().includes(q) ||
          (person.birthDate && person.birthDate.toLowerCase().includes(q))
        );
      });
    return { ...gen, memberObjects: members };
  });

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 mb-2 shadow-sm">
          <TreeDeciduous className="w-7 h-7" />
        </div>

        <div className="flex items-center justify-center gap-3 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-[0.25em] mb-1">
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-amber-500/60" />
          <span>STRUKTURALI TAQSIMOT</span>
          <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-amber-500/60" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 dark:text-white tracking-tight mb-2">
          Avlodlar Strukturasi
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 italic max-w-xl mx-auto leading-relaxed">
          Sulolamiz aʼzolarini avlodlar va oilaviy oʻrni boʻyicha tizimli koʻrinishi.
        </p>

        {/* View Switcher buttons */}
        <div className="flex items-center justify-center gap-3 mt-5">
          <button
            onClick={() => onChangeView('struct')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-sm ${
              activeView === 'struct'
                ? 'bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 shadow-md ring-2 ring-amber-500/30'
                : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            <ListTree className="w-4 h-4" />
            <span>Struktura</span>
          </button>

          <button
            onClick={() => onChangeView('tree')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-sm ${
              activeView === 'tree'
                ? 'bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 shadow-md ring-2 ring-amber-500/30'
                : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            <GitFork className="w-4 h-4" />
            <span>Oilaviy daraxt</span>
          </button>
        </div>

        {/* Search input */}
        <div className="relative max-w-md mx-auto mt-6">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Shajaradan shaxs yoki rolni izlash..."
            className="w-full pl-10 pr-4 py-2.5 bg-white/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 rounded-full text-sm placeholder:text-slate-400 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-amber-500 shadow-sm"
          />
        </div>
      </div>

      {/* Generations list */}
      <div className="space-y-8">
        {filteredGenerations.map((gen) => (
          <div
            key={gen.level}
            className="p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/60 border border-amber-500/20 backdrop-blur-md shadow-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-slate-800 gap-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center font-bold text-sm">
                  {gen.level}
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold font-serif text-slate-900 dark:text-white">
                    {gen.title}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {gen.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-500" />
                  {gen.memberObjects.length} nafar shaxs
                </span>
              </div>
            </div>

            {gen.memberObjects.length === 0 ? (
              <p className="text-center py-6 text-sm text-slate-500 italic">
                Ushbu avlodda mos natija topilmadi.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                {gen.memberObjects.map((person) => (
                  <PersonCard
                    key={person.id}
                    person={person}
                    onClick={onSelectPerson}
                    subText={person.shortRole}
                    className="w-full max-w-[220px]"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
