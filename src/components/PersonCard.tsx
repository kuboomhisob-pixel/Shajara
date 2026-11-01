import React from 'react';
import { Person } from '../types';
import { FamilyAvatar } from './Avatars';

interface PersonCardProps {
  person: Person;
  onClick: (person: Person) => void;
  subText?: string;
  className?: string;
}

export const PersonCard: React.FC<PersonCardProps> = ({
  person,
  onClick,
  subText,
  className = '',
}) => {
  const isMale = person.gender === 'male';

  return (
    <div
      onClick={() => onClick(person)}
      className={`group relative flex flex-col items-center justify-between p-3 sm:p-3.5 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.03] select-none text-center bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md ${
        isMale
          ? 'border-2 border-sky-500 shadow-sky-500/15 hover:shadow-sky-500/30 hover:border-sky-400'
          : 'border-2 border-rose-400 shadow-rose-500/15 hover:shadow-rose-500/30 hover:border-rose-300'
      } ${className}`}
      style={{ minWidth: '160px', width: '172px' }}
    >
      {/* Gender symbol badge as specified by user */}
      {isMale ? (
        <span
          className="absolute top-2 right-2 text-sky-500 font-bold text-xs leading-none select-none drop-shadow-sm"
          title="Erkak / Oʻgʻil"
        >
          ♂
        </span>
      ) : (
        <span
          className="absolute top-2 right-2 text-rose-500 font-bold text-[10px] leading-none select-none drop-shadow-sm"
          title="Ayol / Qiz"
        >
          ♀
        </span>
      )}

      {/* "MEN" special badge for Mahmudxo'ja */}
      {person.isMe && (
        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-600/30 ring-1 ring-white/50">
          MEN
        </span>
      )}

      {/* Center Avatar */}
      <div className="relative mb-2 mt-0.5 group-hover:scale-105 transition-transform duration-300">
        <FamilyAvatar type={person.avatarType} size={58} />
      </div>

      {/* Name */}
      <h3 className="text-xs sm:text-[12.5px] font-bold text-slate-900 dark:text-slate-100 font-serif leading-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
        {person.name}
      </h3>

      {/* Secondary Meta (Dates or Subtext) */}
      <div className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium mt-1">
        {subText || (person.birthDate && person.birthDate !== '...' ? person.birthDate.split(' ')[0] : '...')}
      </div>
    </div>
  );
};
