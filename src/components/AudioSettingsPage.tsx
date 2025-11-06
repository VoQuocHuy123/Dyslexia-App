import { Sidebar } from './Sidebar';
import { ArrowLeft, Save, Volume2 } from 'lucide-react';
import { useState } from 'react';
import { Slider } from './ui/slider';
import { Input } from './ui/input';

interface AudioSettingsPageProps {
  onNavigate?: (page: 'Home' | 'Reading' | 'ReadingSelection' | 'Speaking' | 'SpeakingSelection' | 'Library' | 'SettingsOverview' | 'DisplaySettings' | 'AudioSettings' | 'OCRImport') => void;
  isSidebarCollapsed?: boolean;
  onToggleCollapse?: () => void;
  onSignOut?: () => void;
}

const maleVoices = [
  { id: 'male-1', label: 'Nam 1', name: 'Vietnamese Male Voice 1' },
  { id: 'male-2', label: 'Nam 2', name: 'Vietnamese Male Voice 2' },
  { id: 'male-3', label: 'Nam 3', name: 'Vietnamese Male Voice 3' },
];

const femaleVoices = [
  { id: 'female-1', label: 'Nữ 1', name: 'Vietnamese Female Voice 1' },
  { id: 'female-2', label: 'Nữ 2', name: 'Vietnamese Female Voice 2' },
  { id: 'female-3', label: 'Nữ 3', name: 'Vietnamese Female Voice 3' },
];

export function AudioSettingsPage({ onNavigate, isSidebarCollapsed = false, onToggleCollapse, onSignOut }: AudioSettingsPageProps) {
  const [selectedVoice, setSelectedVoice] = useState('male-1');
  const [readingSpeed, setReadingSpeed] = useState(1.0);
  const previewText = "Nội dung nghe thử";

  const handleBack = () => {
    if (onNavigate) {
      onNavigate('SettingsOverview');
    }
  };

  const handleSave = () => {
    // Save settings logic here
    console.log('Voice settings saved:', selectedVoice);
    if (onNavigate) {
      onNavigate('SettingsOverview');
    }
  };

  const handleVoiceSelect = (voiceId: string) => {
    setSelectedVoice(voiceId);
    playPreview(voiceId);
  };

  const playPreview = (voiceId?: string) => {
    const voice = voiceId || selectedVoice;
    console.log('Playing preview with voice:', voice, 'Text:', previewText, 'Speed:', readingSpeed);
    
    // Web Speech API implementation (browser-dependent)
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(previewText);
      utterance.lang = 'vi-VN';
      utterance.rate = readingSpeed;
      
      // Try to find Vietnamese voice
      const voices = window.speechSynthesis.getVoices();
      const vietnameseVoice = voices.find(v => v.lang.includes('vi'));
      if (vietnameseVoice) {
        utterance.voice = vietnameseVoice;
      }
      
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="flex h-screen bg-[#FFF8E7]">
      {/* Sidebar */}
      <Sidebar activePage="Cài đặt" onNavigate={onNavigate} isCollapsed={isSidebarCollapsed} onToggleCollapse={onToggleCollapse} onSignOut={onSignOut} />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full px-12 py-10">
          {/* Header with Back Button */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={handleBack}
              className="w-12 h-12 rounded-xl bg-[#FFF8E7] border-2 border-[#E0DCCC] flex items-center justify-center hover:bg-[#FFF4E0] transition-all flex-shrink-0"
              aria-label="Back to Settings"
            >
              <ArrowLeft className="w-6 h-6 text-[#111111]" />
            </button>
            <h1 
              className="text-[#111111]"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              }}
            >
              Cài đặt Âm thanh & Giọng nói
            </h1>
          </div>

          {/* Main Settings Panel */}
          <div className="bg-[#FFFCF2] rounded-2xl border-2 border-[#E0DCCC] shadow-lg p-8 flex-1 flex flex-col overflow-hidden">
            {/* Listening Preview Section */}
            <div className="mb-6 flex-shrink-0">
              <label 
                className="block text-[#111111] mb-3"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '20px',
                  letterSpacing: '0.02em',
                }}
              >
                Nghe thử
              </label>
              <div className="bg-[#FFF4E0] rounded-2xl border-2 border-[#E8DCC8] p-5 flex items-center justify-between">
                <p
                  className="text-[#111111]"
                  style={{
                    fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                    fontSize: '20px',
                    letterSpacing: '0.14em',
                    lineHeight: '1.8',
                  }}
                >
                  {previewText}
                </p>
                <button
                  onClick={() => playPreview()}
                  className="ml-6 w-11 h-11 rounded-xl bg-[#D4E7F5] hover:bg-[#C5DCF0] border-2 border-[#B8D4E8] flex items-center justify-center transition-all shadow-sm hover:shadow-md flex-shrink-0"
                  aria-label="Play preview"
                >
                  <Volume2 className="w-5 h-5 text-[#111111]" />
                </button>
              </div>
            </div>

            {/* Reading Speed Section */}
            <div className="mb-6 flex-shrink-0">
              <div className="flex items-center gap-6">
                <label 
                  className="text-[#111111] w-48 flex-shrink-0"
                  style={{
                    fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                    fontSize: '20px',
                    letterSpacing: '0.02em',
                  }}
                >
                  Tốc độ đọc
                </label>
                <div className="w-80">
                  <Slider
                    value={[readingSpeed * 10]}
                    onValueChange={(value) => setReadingSpeed(value[0] / 10)}
                    min={5}
                    max={20}
                    step={0.5}
                    className="w-full"
                  />
                </div>
                <Input
                  type="number"
                  value={readingSpeed.toFixed(2)}
                  onChange={(e) => setReadingSpeed(Number(e.target.value))}
                  min={0.5}
                  max={2.0}
                  step={0.05}
                  className="w-20 text-center bg-[#FFF8E7] border-2 border-[#E0DCCC] rounded-xl h-11"
                  style={{
                    fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                    fontSize: '18px',
                  }}
                />
              </div>
            </div>

            {/* Male Voices Section */}
            <div className="mb-6 flex-shrink-0">
              <label 
                className="block text-[#111111] mb-3"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '20px',
                  letterSpacing: '0.02em',
                }}
              >
                Nam (Male)
              </label>
              <div className="flex gap-4">
                {maleVoices.map((voice) => (
                  <button
                    key={voice.id}
                    onClick={() => handleVoiceSelect(voice.id)}
                    className={`flex-1 px-5 py-4 rounded-2xl border-2 transition-all shadow-sm ${
                      selectedVoice === voice.id
                        ? 'bg-[#D4E7F5] border-[#B8D4E8] shadow-md ring-2 ring-[#B8D4E8] ring-offset-2 ring-offset-[#FFFCF2]'
                        : 'bg-[#FFF8E7] border-[#E0DCCC] hover:bg-[#FFF4E0] hover:shadow-md'
                    }`}
                    style={{
                      fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                      fontSize: '18px',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {voice.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Female Voices Section */}
            <div className="mb-6 flex-shrink-0">
              <label 
                className="block text-[#111111] mb-3"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '20px',
                  letterSpacing: '0.02em',
                }}
              >
                Nữ (Female)
              </label>
              <div className="flex gap-4">
                {femaleVoices.map((voice) => (
                  <button
                    key={voice.id}
                    onClick={() => handleVoiceSelect(voice.id)}
                    className={`flex-1 px-5 py-4 rounded-2xl border-2 transition-all shadow-sm ${
                      selectedVoice === voice.id
                        ? 'bg-[#D4E7F5] border-[#B8D4E8] shadow-md ring-2 ring-[#B8D4E8] ring-offset-2 ring-offset-[#FFFCF2]'
                        : 'bg-[#FFF8E7] border-[#E0DCCC] hover:bg-[#FFF4E0] hover:shadow-md'
                    }`}
                    style={{
                      fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                      fontSize: '18px',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {voice.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-center mt-auto pt-4 flex-shrink-0">
              <button
                onClick={handleSave}
                className="bg-[#D4E7F5] hover:bg-[#C5DCF0] text-[#111111] px-12 py-3.5 rounded-2xl border-2 border-[#B8D4E8] shadow-md hover:shadow-lg transition-all flex items-center gap-3"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '20px',
                  letterSpacing: '0.02em',
                }}
              >
                <Save className="w-5 h-5" />
                Lưu
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}