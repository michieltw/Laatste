import { useState } from 'react';
import ScorekeeperScreen from './components/ScorekeeperScreen';
import SettingsScreen from './components/SettingsScreen';
import { defaultSettingsContract } from './settingsContract';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'settings' | 'scorekeeper'>('settings');
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`w-full min-h-screen font-body overflow-x-hidden selection:bg-tertiary selection:text-on-tertiary flex relative ${isDarkMode ? 'bg-background text-on-background' : 'bg-white text-black light-mode'}`}>
      <div className="flex-1 flex flex-col min-h-screen relative w-full transition-all duration-300">
        <div className={`flex-1 w-full flex flex-col relative z-10 pb-8`}>
          {currentScreen === 'settings' && (
            <SettingsScreen
              scheduledGameData={null}
              contract={defaultSettingsContract}
              onStart={() => setCurrentScreen('scorekeeper')}
              onBack={() => {}}
            />
          )}

          {currentScreen === 'scorekeeper' && (
            <ScorekeeperScreen
              contract={defaultSettingsContract}
              onBack={() => setCurrentScreen('settings')}
            />
          )}
        </div>
      </div>
    </div>
  );
}
