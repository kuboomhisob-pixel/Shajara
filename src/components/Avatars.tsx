import React from 'react';
import { AvatarType } from '../types';

interface AvatarProps {
  type: AvatarType;
  className?: string;
  size?: number;
}

export const FamilyAvatar: React.FC<AvatarProps> = ({ type, className = '', size = 80 }) => {
  switch (type) {
    case 'grandfather_paternal':
    case 'grandfather_maternal':
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          className={`rounded-full shrink-0 select-none ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="bg-grad-grandpa" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </radialGradient>
            <linearGradient id="suit-grandpa" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          {/* Background circle */}
          <circle cx="50" cy="50" r="48" fill="url(#bg-grad-grandpa)" />
          
          {/* Shoulders & Suit */}
          <path d="M18 96 C20 74 34 68 50 68 C66 68 80 74 82 96 Z" fill="url(#suit-grandpa)" />
          {/* Shirt */}
          <polygon points="43,68 57,68 50,88" fill="#ffffff" />
          {/* Tie */}
          <polygon points="48,70 52,70 53,88 47,88" fill="#2563eb" />
          {/* Collar */}
          <path d="M42 68 L50 78 L47 70 Z" fill="#f1f5f9" />
          <path d="M58 68 L50 78 L53 70 Z" fill="#f1f5f9" />

          {/* Neck */}
          <rect x="44" y="52" width="12" height="18" rx="4" fill="#fed7aa" />

          {/* Head */}
          <ellipse cx="50" cy="46" rx="19" ry="22" fill="#ffedd5" />
          {/* Ears */}
          <circle cx="30" cy="46" r="4.5" fill="#fed7aa" />
          <circle cx="70" cy="46" r="4.5" fill="#fed7aa" />

          {/* Grey hair */}
          <path d="M31 42 C30 24 40 18 50 18 C60 18 70 24 69 42 C67 30 62 25 50 25 C38 25 33 30 31 42 Z" fill="#94a3b8" />
          <path d="M30 40 C28 32 34 26 40 24 C34 29 32 35 30 40 Z" fill="#64748b" />
          <path d="M70 40 C72 32 66 26 60 24 C66 29 68 35 70 40 Z" fill="#64748b" />

          {/* Eyebrows */}
          <path d="M38 38 Q43 36 47 38" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
          <path d="M62 38 Q57 36 53 38" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />

          {/* Eyes */}
          <circle cx="42" cy="43" r="2.2" fill="#1e293b" />
          <circle cx="58" cy="43" r="2.2" fill="#1e293b" />

          {/* Glasses frame (distinguished grandfather look) */}
          <rect x="35" y="38" width="13" height="10" rx="3" stroke="#475569" strokeWidth="1.6" fill="rgba(255,255,255,0.2)" />
          <rect x="52" y="38" width="13" height="10" rx="3" stroke="#475569" strokeWidth="1.6" fill="rgba(255,255,255,0.2)" />
          <path d="M48 43 L52 43" stroke="#475569" strokeWidth="1.6" />

          {/* Nose */}
          <path d="M49 46 Q51 49 48 51" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" />

          {/* Warm smile & mustache */}
          <path d="M43 54 Q50 52 57 54" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M45 56 Q50 60 55 56" stroke="#c2410c" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'grandmother_paternal':
    case 'grandmother_maternal':
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          className={`rounded-full shrink-0 select-none ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="bg-grad-grandma" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fdf2f8" />
              <stop offset="100%" stopColor="#fce7f3" />
            </radialGradient>
            <linearGradient id="hijab-fold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
          </defs>
          {/* Background circle */}
          <circle cx="50" cy="50" r="48" fill="url(#bg-grad-grandma)" />

          {/* White Hijab / Scarf Backing & Shoulders */}
          <path d="M22 96 C22 70 34 62 50 62 C66 62 78 70 78 96 Z" fill="url(#hijab-fold)" />
          <path d="M26 62 C22 40 26 22 50 20 C74 22 78 40 74 62 C74 80 66 94 50 94 C34 94 26 80 26 62 Z" fill="#ffffff" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
          <path d="M30 68 Q50 78 70 68" stroke="#cbd5e1" strokeWidth="1.5" />

          {/* Face cutout from scarf */}
          <ellipse cx="50" cy="47" rx="16" ry="18" fill="#ffedd5" />

          {/* Cheeks blush */}
          <ellipse cx="40" cy="51" rx="4" ry="2.5" fill="#fbcfe8" opacity="0.6" />
          <ellipse cx="60" cy="51" rx="4" ry="2.5" fill="#fbcfe8" opacity="0.6" />

          {/* Gentle grey/dark eyebrows */}
          <path d="M40 39 Q44 37 47 39" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M60 39 Q56 37 53 39" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" />

          {/* Eyes */}
          <ellipse cx="43" cy="44" rx="2.4" ry="2.8" fill="#1e293b" />
          <circle cx="44" cy="43" r="0.8" fill="#ffffff" />
          <ellipse cx="57" cy="44" rx="2.4" ry="2.8" fill="#1e293b" />
          <circle cx="58" cy="43" r="0.8" fill="#ffffff" />

          {/* Gentle smiling mouth */}
          <path d="M45 54 Q50 58 55 54" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Nose */}
          <path d="M49 46 Q51 49 48 50" stroke="#ea580c" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );

    case 'father':
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          className={`rounded-full shrink-0 select-none ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="bg-grad-father" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#eff6ff" />
              <stop offset="100%" stopColor="#dbeafe" />
            </radialGradient>
            <linearGradient id="suit-father" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#bg-grad-father)" />

          {/* Shoulders & Jacket */}
          <path d="M18 96 C20 74 34 68 50 68 C66 68 80 74 82 96 Z" fill="url(#suit-father)" />
          {/* White shirt */}
          <polygon points="42,68 58,68 50,88" fill="#ffffff" />
          {/* Blue necktie */}
          <polygon points="48,70 52,70 54,92 46,92" fill="#2563eb" />
          <path d="M41 68 L50 78 L47 70 Z" fill="#e2e8f0" />
          <path d="M59 68 L50 78 L53 70 Z" fill="#e2e8f0" />

          {/* Neck */}
          <rect x="44" y="52" width="12" height="18" rx="4" fill="#fed7aa" />

          {/* Head */}
          <ellipse cx="50" cy="45" rx="18" ry="21" fill="#ffedd5" />
          {/* Ears */}
          <circle cx="31" cy="46" r="4" fill="#fed7aa" />
          <circle cx="69" cy="46" r="4" fill="#fed7aa" />

          {/* Stylish modern black hair */}
          <path d="M30 42 C29 23 40 17 50 17 C60 17 71 23 70 42 C67 27 61 22 50 23 C38 23 33 27 30 42 Z" fill="#0f172a" />
          <path d="M34 26 C42 19 56 19 65 24 C58 20 44 20 34 26 Z" fill="#1e293b" />

          {/* Eyebrows */}
          <path d="M38 37 Q43 35 47 37" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M62 37 Q57 35 53 37" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" />

          {/* Eyes */}
          <ellipse cx="42" cy="42" rx="2.5" ry="3" fill="#0f172a" />
          <circle cx="43" cy="41" r="0.9" fill="#ffffff" />
          <ellipse cx="58" cy="42" rx="2.5" ry="3" fill="#0f172a" />
          <circle cx="59" cy="41" r="0.9" fill="#ffffff" />

          {/* Nose */}
          <path d="M49 45 Q51 48 48 49" stroke="#ea580c" strokeWidth="1.6" strokeLinecap="round" />

          {/* Confident gentle smile */}
          <path d="M44 54 Q50 59 56 54" stroke="#b91c1c" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'mother':
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          className={`rounded-full shrink-0 select-none ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="bg-grad-mother" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fff1f2" />
              <stop offset="100%" stopColor="#ffe4e6" />
            </radialGradient>
            <linearGradient id="dress-mother" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#9f1239" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#bg-grad-mother)" />

          {/* Back hair */}
          <path d="M26 44 C24 64 28 82 33 96 C40 98 60 98 67 96 C72 82 76 64 74 44 C72 26 62 18 50 18 C38 18 28 26 26 44 Z" fill="#2d150b" />

          {/* Blouse / Shoulders */}
          <path d="M20 96 C24 74 36 68 50 68 C64 68 76 74 80 96 Z" fill="url(#dress-mother)" />
          {/* Elegant V-neck cutout */}
          <polygon points="44,68 56,68 50,76" fill="#fed7aa" />

          {/* Neck */}
          <rect x="45" y="52" width="10" height="18" rx="4" fill="#fed7aa" />

          {/* Face */}
          <ellipse cx="50" cy="46" rx="17" ry="20" fill="#ffedd5" />
          {/* Ears */}
          <circle cx="32" cy="47" r="3.5" fill="#fed7aa" />
          <circle cx="68" cy="47" r="3.5" fill="#fed7aa" />
          {/* Pearl earrings */}
          <circle cx="32" cy="50" r="2" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5" />
          <circle cx="68" cy="50" r="2" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5" />

          {/* Front brown hair framing face */}
          <path d="M29 38 C32 23 40 18 50 18 C60 18 68 23 71 38 C67 28 59 23 50 25 C41 23 33 28 29 38 Z" fill="#3b1d11" />
          <path d="M30 38 Q34 50 36 60 Q32 48 30 38 Z" fill="#3b1d11" />
          <path d="M70 38 Q66 50 64 60 Q68 48 70 38 Z" fill="#3b1d11" />

          {/* Eyebrows */}
          <path d="M39 37 Q44 35 47 37" stroke="#3b1d11" strokeWidth="2" strokeLinecap="round" />
          <path d="M61 37 Q56 35 53 37" stroke="#3b1d11" strokeWidth="2" strokeLinecap="round" />

          {/* Eyes & eyelashes */}
          <ellipse cx="43" cy="43" rx="2.6" ry="3.2" fill="#1e293b" />
          <circle cx="44" cy="42" r="1" fill="#ffffff" />
          <ellipse cx="57" cy="43" rx="2.6" ry="3.2" fill="#1e293b" />
          <circle cx="58" cy="42" r="1" fill="#ffffff" />

          {/* Subtle blush */}
          <ellipse cx="39" cy="49" rx="3.5" ry="2" fill="#fda4af" opacity="0.6" />
          <ellipse cx="61" cy="49" rx="3.5" ry="2" fill="#fda4af" opacity="0.6" />

          {/* Nose */}
          <path d="M49 46 Q51 49 49 50" stroke="#ea580c" strokeWidth="1.4" strokeLinecap="round" />

          {/* Sweet radiant smile */}
          <path d="M44 54 Q50 60 56 54" stroke="#e11d48" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'son_older': // Mahmudxo'ja (Men)
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          className={`rounded-full shrink-0 select-none ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="bg-grad-me" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#ecfdf5" />
              <stop offset="100%" stopColor="#d1fae5" />
            </radialGradient>
            <linearGradient id="shirt-me" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#bg-grad-me)" />

          {/* Shoulders */}
          <path d="M20 96 C22 76 34 70 50 70 C66 70 78 76 80 96 Z" fill="url(#shirt-me)" />
          <polygon points="44,70 56,70 50,82" fill="#ffffff" />

          {/* Neck */}
          <rect x="44" y="54" width="12" height="18" rx="4" fill="#fed7aa" />

          {/* Head */}
          <ellipse cx="50" cy="46" rx="18" ry="20" fill="#ffedd5" />
          <circle cx="31" cy="47" r="3.8" fill="#fed7aa" />
          <circle cx="69" cy="47" r="3.8" fill="#fed7aa" />

          {/* Youthful modern haircut */}
          <path d="M30 42 C29 24 40 17 50 17 C60 17 71 24 70 42 C66 27 60 21 50 21 C39 21 33 27 30 42 Z" fill="#0f172a" />
          {/* Fringe/Bangs */}
          <path d="M32 30 Q44 24 54 28 Q46 22 34 26" fill="#1e293b" />

          {/* Eyebrows */}
          <path d="M38 38 Q43 36 47 38" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M62 38 Q57 36 53 38" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" />

          {/* Bright youthful eyes */}
          <ellipse cx="42" cy="43" rx="2.5" ry="3" fill="#0f172a" />
          <circle cx="43" cy="42" r="1" fill="#ffffff" />
          <ellipse cx="58" cy="43" rx="2.5" ry="3" fill="#0f172a" />
          <circle cx="59" cy="42" r="1" fill="#ffffff" />

          {/* Nose */}
          <path d="M49 46 Q51 49 48 50" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" />

          {/* Broad warm smile */}
          <path d="M44 54 Q50 60 56 54" stroke="#dc2626" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'daughter': // Halimaxon
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          className={`rounded-full shrink-0 select-none ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="bg-grad-daughter" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fff1f2" />
              <stop offset="100%" stopColor="#fce7f3" />
            </radialGradient>
            <linearGradient id="shirt-daughter" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#e11d48" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#bg-grad-daughter)" />

          {/* Back dark hair */}
          <path d="M28 44 C26 62 28 78 32 94 C42 96 58 96 68 94 C72 78 74 62 72 44 C70 26 62 19 50 19 C38 19 30 26 28 44 Z" fill="#2d150b" />

          {/* Cute dress */}
          <path d="M22 96 C24 76 36 70 50 70 C64 70 76 76 78 96 Z" fill="url(#shirt-daughter)" />
          {/* White Peter Pan collar */}
          <path d="M42 70 Q46 76 50 72 Q54 76 58 70" stroke="#ffffff" strokeWidth="3" fill="none" />

          {/* Neck */}
          <rect x="45" y="54" width="10" height="18" rx="4" fill="#fed7aa" />

          {/* Face */}
          <ellipse cx="50" cy="46" rx="17" ry="19" fill="#ffedd5" />
          <circle cx="32" cy="47" r="3.5" fill="#fed7aa" />
          <circle cx="68" cy="47" r="3.5" fill="#fed7aa" />

          {/* Front cute bangs/haircut */}
          <path d="M30 40 C32 24 40 19 50 19 C60 19 68 24 70 40 C66 30 58 24 50 25 C42 24 34 30 30 40 Z" fill="#3b1d11" />
          <path d="M36 30 Q50 33 64 30 Q50 25 36 30" fill="#3b1d11" />

          {/* Eyebrows */}
          <path d="M39 38 Q43 36 47 38" stroke="#3b1d11" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M61 38 Q57 36 53 38" stroke="#3b1d11" strokeWidth="1.8" strokeLinecap="round" />

          {/* Sparkly dark eyes */}
          <ellipse cx="43" cy="43" rx="2.5" ry="3" fill="#1e293b" />
          <circle cx="44" cy="42" r="1" fill="#ffffff" />
          <ellipse cx="57" cy="43" rx="2.5" ry="3" fill="#1e293b" />
          <circle cx="58" cy="42" r="1" fill="#ffffff" />

          {/* Rosy cheeks */}
          <ellipse cx="38" cy="49" rx="3" ry="1.8" fill="#fda4af" opacity="0.6" />
          <ellipse cx="62" cy="49" rx="3" ry="1.8" fill="#fda4af" opacity="0.6" />

          {/* Nose */}
          <path d="M49 46 Q51 49 49 50" stroke="#ea580c" strokeWidth="1.3" strokeLinecap="round" />

          {/* Happy smile */}
          <path d="M44 54 Q50 59 56 54" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'son_middle': // Muhammadsharifxo'ja
    case 'son_younger': // Muhammadsodiq
    default:
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          className={`rounded-full shrink-0 select-none ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="bg-grad-boy" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#f0f9ff" />
              <stop offset="100%" stopColor="#e0f2fe" />
            </radialGradient>
            <linearGradient id="shirt-boy" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#bg-grad-boy)" />

          {/* Shoulders */}
          <path d="M22 96 C24 76 36 70 50 70 C64 70 76 76 78 96 Z" fill="url(#shirt-boy)" />
          <polygon points="45,70 55,70 50,78" fill="#ffffff" />

          {/* Neck */}
          <rect x="45" y="54" width="10" height="18" rx="4" fill="#fed7aa" />

          {/* Head */}
          <ellipse cx="50" cy="46" rx="17" ry="19" fill="#ffedd5" />
          <circle cx="32" cy="47" r="3.6" fill="#fed7aa" />
          <circle cx="68" cy="47" r="3.6" fill="#fed7aa" />

          {/* Boy haircut */}
          <path d="M30 42 C29 25 40 18 50 18 C60 18 71 25 70 42 C66 28 60 22 50 22 C39 22 34 28 30 42 Z" fill="#0f172a" />

          {/* Eyebrows */}
          <path d="M39 38 Q43 36 47 38" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
          <path d="M61 38 Q57 36 53 38" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />

          {/* Eyes */}
          <ellipse cx="43" cy="43" rx="2.4" ry="2.8" fill="#0f172a" />
          <circle cx="44" cy="42" r="0.9" fill="#ffffff" />
          <ellipse cx="57" cy="43" rx="2.4" ry="2.8" fill="#0f172a" />
          <circle cx="58" cy="42" r="0.9" fill="#ffffff" />

          {/* Nose */}
          <path d="M49 46 Q51 49 48 50" stroke="#ea580c" strokeWidth="1.4" strokeLinecap="round" />

          {/* Smile */}
          <path d="M45 54 Q50 59 55 54" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      );
  }
};
