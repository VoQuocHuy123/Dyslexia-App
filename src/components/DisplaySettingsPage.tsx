import { Sidebar } from './Sidebar';
import { Slider } from './ui/slider';
import { Input } from './ui/input';
import { Check, ArrowLeft, Save } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme, themes, ThemeType } from './ThemeContext';
import { useDisplaySettings } from './DisplaySettingsContext';

interface DisplaySettingsPageProps {
  onNavigate?: (page: 'Home' | 'Reading' | 'ReadingSelection' | 'Speaking' | 'SpeakingSelection' | 'Library' | 'SettingsOverview' | 'DisplaySettings' | 'AudioSettings' | 'OCRImport') => void;
  isSidebarCollapsed?: boolean;
  onToggleCollapse?: () => void;
  onSignOut?: () => void;
}

const fontOptions = [
  { name: 'Arial', value: 'Arial, sans-serif' },
  { name: 'Lexend', value: "'Lexend', sans-serif" },
  { name: 'OpenDyslexic', value: "'OpenDyslexic', 'Lexend', sans-serif" },
  { name: 'Verdana', value: 'Verdana, sans-serif' },
];

export function DisplaySettingsPage({ onNavigate, isSidebarCollapsed = false, onToggleCollapse, onSignOut }: DisplaySettingsPageProps) {
  const { currentTheme, themeColors, setTheme } = useTheme();
  const { fontFamily, fontSize: savedFontSize, letterSpacing: savedLetterSpacing, lineSpacing: savedLineSpacing, updateSettings } = useDisplaySettings();
  const [selectedFont, setSelectedFont] = useState(fontFamily);
  const [fontSize, setFontSize] = useState(savedFontSize);
  const [letterSpacing, setLetterSpacing] = useState(savedLetterSpacing);
  const [lineSpacing, setLineSpacing] = useState(savedLineSpacing);
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>(currentTheme);

  useEffect(() => {
    setSelectedFont(fontFamily);
    setFontSize(savedFontSize);
    setLetterSpacing(savedLetterSpacing);
    setLineSpacing(savedLineSpacing);
  }, [fontFamily, savedFontSize, savedLetterSpacing, savedLineSpacing]);

  useEffect(() => {
    setSelectedTheme(currentTheme);
  }, [currentTheme]);

  const handleBack = () => {
    if (onNavigate) {
      onNavigate('SettingsOverview');
    }
  };

  const handleSave = () => {
    // Apply theme
    setTheme(selectedTheme);

    updateSettings({
      fontFamily: selectedFont,
      fontSize,
      letterSpacing,
      lineSpacing,
    });

    console.log('Settings saved:', {
      font: selectedFont,
      fontSize,
      letterSpacing,
      lineSpacing,
      theme: selectedTheme,
    });
    
    // Navigate back
    if (onNavigate) {
      onNavigate('SettingsOverview');
    }
  };

  const previewTheme = themes[selectedTheme];

  return (
    <div className="flex h-screen" style={{ backgroundColor: themeColors.appBackground }}>
      {/* Sidebar */}
      <Sidebar activePage="Cài đặt" onNavigate={onNavigate} isCollapsed={isSidebarCollapsed} onToggleCollapse={onToggleCollapse} onSignOut={onSignOut} />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto px-12 py-8">
          {/* Header with Back Button */}
          <div className="flex items-center gap-6 mb-6">
            <button
              onClick={handleBack}
              className="w-10 h-10 rounded-xl border-2 flex items-center justify-center hover:opacity-80 transition-all"
              style={{
                backgroundColor: themeColors.appBackground,
                borderColor: themeColors.border,
              }}
              aria-label="Back to Settings"
            >
              <ArrowLeft className="w-5 h-5" style={{ color: themeColors.textMain }} />
            </button>
            <h1 
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                color: themeColors.textMain,
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
                backgroundColor: previewTheme.appBackground,
                borderColor: previewTheme.previewBorder,
              }}
            >
              <p
                style={{
                  fontFamily: selectedFont,
                  fontSize: `${fontSize}px`,
                  letterSpacing: `${letterSpacing}em`,
                  lineHeight: lineSpacing,
                  color: previewTheme.textMain,
                }}
              >
                Con cò bay lả bay la
              </p>
            </div>
          </div>

          {/* Font Selection */}
          <div className="mb-10">
            <label 
              className="block mb-5"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '28px',
                letterSpacing: '0.02em',
                color: themeColors.textMain,
              }}
            >
              Phông chữ
            </label>
            <div className="flex gap-4 flex-wrap">
              {fontOptions.map((font) => (
                <button
                  key={font.value}
                  onClick={() => setSelectedFont(font.value)}
                  className="px-8 py-3 rounded-2xl border-2 transition-all shadow-sm"
                  style={{
                    fontFamily: font.value,
                    fontSize: '20px',
                    backgroundColor: selectedFont === font.value ? themeColors.accentMain : themeColors.appBackground,
                    borderColor: selectedFont === font.value ? themeColors.border : themeColors.border,
                    color: themeColors.textMain,
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
                className="w-48 flex-shrink-0"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '28px',
                  letterSpacing: '0.02em',
                  color: themeColors.textMain,
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
                className="w-24 text-center border-2 rounded-xl h-11"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '20px',
                  backgroundColor: themeColors.appBackground,
                  borderColor: themeColors.border,
                  color: themeColors.textMain,
                }}
              />
            </div>
          </div>

          {/* Letter Spacing */}
          <div className="mb-8">
            <div className="flex items-center gap-6">
              <label 
                className="w-48 flex-shrink-0"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '28px',
                  letterSpacing: '0.02em',
                  color: themeColors.textMain,
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
                className="w-24 text-center border-2 rounded-xl h-11"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '20px',
                  backgroundColor: themeColors.appBackground,
                  borderColor: themeColors.border,
                  color: themeColors.textMain,
                }}
              />
            </div>
          </div>

          {/* Line Spacing */}
          <div className="mb-8">
            <div className="flex items-center gap-6">
              <label 
                className="w-48 flex-shrink-0"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '28px',
                  letterSpacing: '0.02em',
                  color: themeColors.textMain,
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
                className="w-24 text-center border-2 rounded-xl h-11"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '20px',
                  backgroundColor: themeColors.appBackground,
                  borderColor: themeColors.border,
                  color: themeColors.textMain,
                }}
              />
            </div>
          </div>

          {/* Color Theme */}
          <div className="mb-10">
            <label 
              className="block mb-5"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '28px',
                letterSpacing: '0.02em',
                color: themeColors.textMain,
              }}
            >
              Chủ đề màu
            </label>
            <div className="flex gap-6">
              {(Object.keys(themes) as ThemeType[]).map((themeKey) => {
                const theme = themes[themeKey];
                return (
                  <button
                    key={themeKey}
                    onClick={() => setSelectedTheme(themeKey)}
                    className="relative w-16 h-16 rounded-full border-4 transition-all"
                    style={{
                      backgroundColor: theme.appBackground,
                      borderColor: selectedTheme === themeKey ? themeColors.textMain : themeColors.border,
                      transform: selectedTheme === themeKey ? 'scale(1.1)' : 'scale(1)',
                    }}
                    aria-label={theme.displayName}
                  >
                    {selectedTheme === themeKey && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ color: theme.textMain }}
                      >
                        <Check className="w-8 h-8" strokeWidth={3} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            {/* Theme Names */}
            <div className="flex gap-6 mt-3">
              {(Object.keys(themes) as ThemeType[]).map((themeKey) => {
                const theme = themes[themeKey];
                return (
                  <div 
                    key={`name-${themeKey}`} 
                    className="w-16 text-center"
                    style={{
                      fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                      fontSize: '16px',
                      color: themeColors.textSecondary,
                    }}
                  >
                    {theme.displayName}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center pt-4 pb-8">
            <button
              onClick={handleSave}
              className="px-12 py-4 rounded-2xl border-2 shadow-md hover:shadow-lg transition-all flex items-center gap-4 hover:opacity-90"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '24px',
                letterSpacing: '0.02em',
                backgroundColor: themeColors.accentMain,
                borderColor: themeColors.border,
                color: themeColors.textMain,
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