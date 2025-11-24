import { Settings, Check } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Slider } from './ui/slider';
import { useTheme, ThemeType } from './ThemeContext';
import { useDisplaySettings } from './DisplaySettingsContext';

interface QuickSettingsDrawerProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
}

type ColorTheme = {
  name: string;
  themeKey: ThemeType;
  background: string;
  text: string;
  preview: string;
};

const colorThemes: ColorTheme[] = [
  {
    name: 'Kem & Đen',
    themeKey: 'cream',
    background: '#FFF8E7',
    text: '#111111',
    preview: '#FFEB99',
  },
  {
    name: 'Chế độ Tối',
    themeKey: 'dark',
    background: '#111827',
    text: '#FFFFFF',
    preview: '#1F2937',
  },
  {
    name: 'Xanh & Đen',
    themeKey: 'coolBlue',
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

export function QuickSettingsDrawer({ isCollapsed = true, onToggle }: QuickSettingsDrawerProps) {
  const { themeColors, currentTheme, setTheme } = useTheme();
  const { fontFamily, fontSize, letterSpacing, lineSpacing, updateSettings } = useDisplaySettings();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close drawer
  useEffect(() => {
    if (!isCollapsed) {
      const handleClickOutside = (event: MouseEvent) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
          onToggle?.();
        }
      };

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onToggle?.();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isCollapsed, onToggle]);

  if (isCollapsed) {
    return (
      <aside ref={drawerRef} className="w-20 border-l-2 shadow-sm flex flex-col" style={{ backgroundColor: themeColors.sidebarBackground, borderColor: themeColors.border }}>
        {/* Settings Icon - Top */}
        <div className="p-4 border-b-2 flex justify-center" style={{ borderColor: themeColors.border }}>
          <button
            onClick={onToggle}
            className="w-14 h-14 rounded-full flex items-center justify-center transition-colors"
            style={{ backgroundColor: themeColors.accentMain }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            aria-label="Open Quick Settings"
            title="Quick Settings"
          >
            <Settings className="w-7 h-7" style={{ color: themeColors.textMain }} />
          </button>
        </div>
      </aside>
    );
  }

  return (
    <aside ref={drawerRef} className="w-80 border-l-2 shadow-sm flex flex-col relative overflow-y-auto" style={{ backgroundColor: themeColors.sidebarBackground, borderColor: themeColors.border }}>
      {/* Settings Icon - Top Center */}
      <div className="p-6 border-b-2 flex justify-center" style={{ borderColor: themeColors.border }}>
        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: themeColors.accentMain }}>
          <Settings className="w-9 h-9" style={{ color: themeColors.textMain }} />
        </div>
      </div>

      {/* Settings Content */}
      <div className="flex-1 p-6 space-y-8">
        {/* Font Selection */}
        <div>
          <label
            className="block mb-4"
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '22px',
              letterSpacing: '0.02em',
              color: themeColors.textMain,
            }}
          >
            Phông chữ
          </label>
          <div className="grid grid-cols-2 gap-3">
            {fontOptions.map((font) => (
              <button
                key={font.value}
                onClick={() => updateSettings({ fontFamily: font.value })}
                className="px-4 py-3 rounded-2xl border-2 transition-all shadow-sm"
                style={{
                  fontFamily: font.value,
                  fontSize: '18px',
                  backgroundColor: fontFamily === font.value ? '#D4E7F5' : themeColors.cardBackground,
                  borderColor: fontFamily === font.value ? '#B8D4E8' : themeColors.border,
                  color: themeColors.textMain,
                }}
                onMouseEnter={(e) => {
                  if (fontFamily !== font.value) {
                    e.currentTarget.style.backgroundColor = themeColors.accentMain;
                  }
                }}
                onMouseLeave={(e) => {
                  if (fontFamily !== font.value) {
                    e.currentTarget.style.backgroundColor = themeColors.cardBackground;
                  }
                }}
              >
                {font.name}
              </button>
            ))}
          </div>
        </div>

        {/* Font Size */}
        <div>
          <label
            className="block mb-3"
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '22px',
              letterSpacing: '0.02em',
              color: themeColors.textMain,
            }}
          >
            Cỡ chữ
          </label>
          <Slider
            value={[fontSize]}
            onValueChange={(value) => updateSettings({ fontSize: value[0] })}
            min={16}
            max={36}
            step={0.5}
            className="w-full"
          />
          <div
            className="text-center mt-2"
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '18px',
              color: themeColors.textMuted,
            }}
          >
            {fontSize}px
          </div>
        </div>

        {/* Letter Spacing */}
        <div>
          <label
            className="block mb-3"
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '22px',
              letterSpacing: '0.02em',
              color: themeColors.textMain,
            }}
          >
            Khoảng cách chữ
          </label>
          <Slider
            value={[letterSpacing * 100]}
            onValueChange={(value) => updateSettings({ letterSpacing: value[0] / 100 })}
            min={0}
            max={30}
            step={0.5}
            className="w-full"
          />
          <div
            className="text-center mt-2"
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '18px',
              color: themeColors.textMuted,
            }}
          >
            {(letterSpacing * 100).toFixed(1)}%
          </div>
        </div>

        {/* Line Spacing */}
        <div>
          <label
            className="block mb-3"
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '22px',
              letterSpacing: '0.02em',
              color: themeColors.textMain,
            }}
          >
            Khoảng cách dòng
          </label>
          <Slider
            value={[lineSpacing * 10]}
            onValueChange={(value) => updateSettings({ lineSpacing: value[0] / 10 })}
            min={10}
            max={30}
            step={0.5}
            className="w-full"
          />
          <div
            className="text-center mt-2"
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '18px',
              color: themeColors.textMuted,
            }}
          >
            {lineSpacing.toFixed(1)}
          </div>
        </div>

        {/* Color Theme */}
        <div>
          <label
            className="block mb-4"
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '22px',
              letterSpacing: '0.02em',
              color: themeColors.textMain,
            }}
          >
            Chủ đề màu
          </label>
          <div className="flex gap-4 justify-center">
            {colorThemes.map((theme, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedThemeIndex(index);
                  setTheme(theme.themeKey);
                }}
                className="relative w-14 h-14 rounded-full border-4 transition-all"
                style={{
                  backgroundColor: theme.background,
                  borderColor: theme.themeKey === currentTheme ? themeColors.textMain : themeColors.border,
                  transform: theme.themeKey === currentTheme ? 'scale(1.1)' : 'scale(1)',
                }}
                onMouseEnter={(e) => {
                  if (theme.themeKey !== currentTheme) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (theme.themeKey !== currentTheme) {
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
                aria-label={theme.name}
              >
                {theme.themeKey === currentTheme && (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ color: theme.text }}
                  >
                    <Check className="w-7 h-7" strokeWidth={3} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}