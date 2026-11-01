import React, { useState, useEffect } from 'react';
import { PasswordLock } from './components/PasswordLock';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { TreeView } from './components/TreeView';
import { StructureView } from './components/StructureView';
import { PersonModal } from './components/PersonModal';
import { AudioBar } from './components/AudioBar';
import { Person } from './types';
import { audioEngine } from './utils/audioEngine';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('shajara_auth_token') === 'authorized';
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('shajara_theme');
    return saved ? saved === 'dark' : true; // Dark by default for regal aesthetic
  });

  const [activeTab, setActiveTab] = useState<'home' | 'tree'>('tree');
  const [activeView, setActiveView] = useState<'tree' | 'struct'>('tree');
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Sync theme with <html> class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('shajara_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('shajara_theme', 'light');
    }
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleLockApp = () => {
    sessionStorage.removeItem('shajara_auth_token');
    setIsAuthenticated(false);
    if (isPlayingAudio) {
      audioEngine.stopMusic();
      setIsPlayingAudio(false);
    }
  };

  const handleToggleAudio = () => {
    const nextState = audioEngine.toggle();
    setIsPlayingAudio(nextState);
  };

  const handlePersonClick = (person: Person) => {
    // Play subtle soft chime when clicking on a person card
    audioEngine.playCardChime();
    setSelectedPerson(person);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 dark:bg-[#0b131f] text-slate-900 dark:text-slate-100 selection:bg-amber-500/30 selection:text-amber-300 transition-colors">
      {/* Password protection layer */}
      {!isAuthenticated && (
        <PasswordLock onUnlock={() => setIsAuthenticated(true)} />
      )}

      {/* Main App Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={(tab) => setActiveTab(tab)}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onLockApp={handleLockApp}
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden">
        {/* Subtle decorative oriental motif in corners */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-[radial-gradient(ellipse_at_top_left,rgba(217,119,6,0.12),transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none" />

        {activeTab === 'home' ? (
          <HomeSection onNavigateToTree={() => setActiveTab('tree')} />
        ) : activeView === 'tree' ? (
          <TreeView
            onSelectPerson={handlePersonClick}
            activeView={activeView}
            onChangeView={setActiveView}
          />
        ) : (
          <StructureView
            onSelectPerson={handlePersonClick}
            activeView={activeView}
            onChangeView={setActiveView}
          />
        )}
      </main>

      {/* Person Details Modal */}
      <PersonModal
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />

      {/* Ambient Audio Bar */}
      <AudioBar
        isPlaying={isPlayingAudio}
        onTogglePlay={handleToggleAudio}
      />
    </div>
  );
}
