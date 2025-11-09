import { Sidebar } from './Sidebar';
import { Slider } from './ui/slider';
import { Input } from './ui/input';
import { Check, ArrowLeft, Save } from 'lucide-react';
import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import { toast } from 'sonner';

interface DisplaySettingsPageProps {
  onNavigate?: (page: 'Home' | 'Reading' | 'ReadingSelection' | 'Speaking' | 'SpeakingSelection' | 'Library' | 'SettingsOverview' | 'DisplaySettings' | 'AudioSettings' | 'OCRImport') => void;
  isSidebarCollapsed?: boolean;
  onToggleCollapse?: () => void;
  onSignOut?: () => void;
}

type ColorTheme = {
  name: string;
  background: string;
  text: string;
  preview: string;
};

const colorThemes: ColorTheme[] = [
  {
    name: 'Kem & Đen',
    background: '#FFF8E7',
    text: '#111111',
    preview: '#FFEB99',
  },
  {
    name: 'Chế độ Tối',
    background: '#1A1A1A',
    text: '#FFFFFF',
    preview: '#2A2A2A',
  },
  {
    name: 'Xanh & Đen',
    background: '#E3F2FD',
    text: '#111111',
    preview: '#BBDEFB',
  },
];

const fontOptions = [
  { name: 'Arial', value: 'Arial, sans-serif' },
  { name: 'Lexend', value: "'Lexend', sans-serif" },
  { name: 'OpenDyslexic', value: "'OpenDyslexic', 'Lexend', sans-serif" },
  { name: 'Verdana', value: 'Verdana, sans-serif' },
];

export function DisplaySettingsPage({ onNavigate, isSidebarCollapsed = false, onToggleCollapse, onSignOut }: DisplaySettingsPageProps) {
  const [selectedFont, setSelectedFont] = useState(fontOptions[2].value);
  const [fontSize, setFontSize] = useState(26);
  const [letterSpacing, setLetterSpacing] = useState(0.14);
  const [lineSpacing, setLineSpacing] = useState(1.8);
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Load settings on mount
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const userId = localStorage.getItem('userId') || 'demo';
        const response = await api.settings.getDisplay(userId);
        
        if (response.data) {
          setSelectedFont(response.data.fontFamily || fontOptions[2].value);
          setFontSize(response.data.fontSize || 26);
          setLetterSpacing(response.data.letterSpacing || 0.14);
          setLineSpacing(response.data.lineSpacing || 1.8);
          setSelectedTheme(typeof response.data.theme === 'number' ? response.data.theme : 0);
        }
      } catch (error) {
        console.error('Error loading settings:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSettings();
  }, []);

  const currentTheme = colorThemes[selectedTheme];

  const handleBack = () => {
    if (onNavigate) {
      onNavigate('SettingsOverview');
    }
  };

  const handleSave = async () => {
    try {
      const userId = localStorage.getItem('userId') || 'demo';
      const response = await api.settings.updateDisplay(
        {
          fontFamily: selectedFont,
          fontSize,
          letterSpacing,
          lineSpacing,
          theme: selectedTheme,
        },
        userId
      );

      if (response.error) {
        toast.error('Không thể lưu cài đặt. Vui lòng thử lại.');
        console.error('Save settings error:', response.error);
      } else {
        toast.success('Đã lưu cài đặt thành công!');
        if (onNavigate) {
          onNavigate('SettingsOverview');
        }
      }
    } catch (error) {
      console.error('Error saving settings:', error);
      toast.error('Không thể lưu cài đặt. Vui lòng thử lại.');
    }
  };

  return (
    <div className="flex h-screen bg-[#FFF8E7]">
      {/* Sidebar */}
      <Sidebar activePage="Cài đặt" onNavigate={onNavigate} isCollapsed={isSidebarCollapsed} onToggleCollapse={onToggleCollapse} onSignOut={onSignOut} />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto px-12 py-8">
          {/* Header with Back Button */}
          <div className="flex items-center gap-6 mb-6">
            <button
              onClick={handleBack}
              className="w-10 h-10 rounded-xl bg-[#FFF8E7] border-2 border-[#E0DCCC] flex items-center justify-center hover:bg-[#FFF4E0] transition-all"
              aria-label="Back to Settings"
            >
              <ArrowLeft className="w-5 h-5 text-[#111111]" />
            </button>
            <h1 
              className="text-[#111111]"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              }}
            >
              Cài đặt Hiển thị & Đọc
            </h1>
          </div>

          {/* Preview Box */}
          <div className="mb-10">
            <div 
              className="rounded-3xl border-2 shadow-lg p-12 flex items-center justify-center min-h-[160px]"
              style={{
                backgroundColor: currentTheme.background,
                borderColor: currentTheme.preview,
              }}
            >
              <p
                style={{
                  fontFamily: selectedFont,
                  fontSize: `${fontSize}px`,
                  letterSpacing: `${letterSpacing}em`,
                  lineHeight: lineSpacing,
                  color: currentTheme.text,
                }}
              >
                Con cò bay lả bay la
              </p>
            </div>
          </div>

          {/* Font Selection */}
          <div className="mb-10">
            <label 
              className="block text-[#111111] mb-5"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '28px',
                letterSpacing: '0.02em',
              }}
            >
              Phông chữ
            </label>
            <div className="flex gap-4 flex-wrap">
              {fontOptions.map((font) => (
                <button
                  key={font.value}
                  onClick={() => setSelectedFont(font.value)}
                  className={`px-8 py-3 rounded-2xl border-2 transition-all shadow-sm ${
                    selectedFont === font.value
                      ? 'bg-[#D4E7F5] border-[#B8D4E8] text-[#111111]'
                      : 'bg-[#FFF8E7] border-[#E0DCCC] text-[#111111] hover:bg-[#FFF4E0]'
                  }`}
                  style={{
                    fontFamily: font.value,
                    fontSize: '20px',
                  }}
                >
                  {font.name}
                </button>
              ))}
            </div>
          </div>

          {/* Font Size */}
          <div className="mb-8">
            <div className="flex items-center gap-6">
              <label 
                className="text-[#111111] w-48 flex-shrink-0"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '28px',
                  letterSpacing: '0.02em',
                }}
              >
                Cỡ chữ
              </label>
              <div className="w-80">
                <Slider
                  value={[fontSize]}
                  onValueChange={(value) => setFontSize(value[0])}
                  min={16}
                  max={36}
                  step={0.5}
                  className="w-full"
                />
              </div>
              <Input
                type="number"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                min={16}
                max={36}
                step={0.5}
                className="w-24 text-center bg-[#FFF8E7] border-2 border-[#E0DCCC] rounded-xl h-11"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '20px',
                }}
              />
            </div>
          </div>

          {/* Letter Spacing */}
          <div className="mb-8">
            <div className="flex items-center gap-6">
              <label 
                className="text-[#111111] w-48 flex-shrink-0"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '28px',
                  letterSpacing: '0.02em',
                }}
              >
                Khoảng cách chữ
              </label>
              <div className="w-80">
                <Slider
                  value={[letterSpacing * 100]}
                  onValueChange={(value) => setLetterSpacing(value[0] / 100)}
                  min={0}
                  max={30}
                  step={0.5}
                  className="w-full"
                />
              </div>
              <Input
                type="number"
                value={(letterSpacing * 100).toFixed(1)}
                onChange={(e) => setLetterSpacing(Number(e.target.value) / 100)}
                min={0}
                max={30}
                step={0.5}
                className="w-24 text-center bg-[#FFF8E7] border-2 border-[#E0DCCC] rounded-xl h-11"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '20px',
                }}
              />
            </div>
          </div>

          {/* Line Spacing */}
          <div className="mb-8">
            <div className="flex items-center gap-6">
              <label 
                className="text-[#111111] w-48 flex-shrink-0"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '28px',
                  letterSpacing: '0.02em',
                }}
              >
                Khoảng cách dòng
              </label>
              <div className="w-80">
                <Slider
                  value={[lineSpacing * 10]}
                  onValueChange={(value) => setLineSpacing(value[0] / 10)}
                  min={10}
                  max={30}
                  step={0.5}
                  className="w-full"
                />
              </div>
              <Input
                type="number"
                value={lineSpacing.toFixed(2)}
                onChange={(e) => setLineSpacing(Number(e.target.value))}
                min={1.0}
                max={3.0}
                step={0.05}
                className="w-24 text-center bg-[#FFF8E7] border-2 border-[#E0DCCC] rounded-xl h-11"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '20px',
                }}
              />
            </div>
          </div>

          {/* Color Theme */}
          <div className="mb-10">
            <label 
              className="block text-[#111111] mb-5"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '28px',
                letterSpacing: '0.02em',
              }}
            >
              Chủ đề màu
            </label>
            <div className="flex gap-6">
              {colorThemes.map((theme, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTheme(index)}
                  className={`relative w-16 h-16 rounded-full border-4 transition-all ${
                    selectedTheme === index
                      ? 'border-[#111111] scale-110'
                      : 'border-[#E0DCCC] hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: theme.background,
                  }}
                  aria-label={theme.name}
                >
                  {selectedTheme === index && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ color: theme.text }}
                    >
                      <Check className="w-8 h-8" strokeWidth={3} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center pt-4 pb-8">
            <button
              onClick={handleSave}
              className="bg-[#D4E7F5] hover:bg-[#C5DCF0] text-[#111111] px-12 py-4 rounded-2xl border-2 border-[#B8D4E8] shadow-md hover:shadow-lg transition-all flex items-center gap-4"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '24px',
                letterSpacing: '0.02em',
              }}
            >
              <Save className="w-6 h-6" />
              Lưu cài đặt
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}