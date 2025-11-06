import { Settings, Check } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Slider } from './ui/slider';

interface QuickSettingsDrawerProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
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

export function QuickSettingsDrawer({ isCollapsed = true, onToggle }: QuickSettingsDrawerProps) {
  const [selectedFont, setSelectedFont] = useState(fontOptions[2].value);
  const [fontSize, setFontSize] = useState(26);
  const [letterSpacing, setLetterSpacing] = useState(0.14);
  const [lineSpacing, setLineSpacing] = useState(1.8);
  const [selectedTheme, setSelectedTheme] = useState(0);
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
      <aside ref={drawerRef} className="w-20 bg-[#FFFCF2] border-l-2 border-[#E8DCC8] shadow-sm flex flex-col">
        {/* Settings Icon - Top */}
        <div className="p-4 border-b-2 border-[#E8DCC8] flex justify-center">
          <button
            onClick={onToggle}
            className="w-14 h-14 bg-[#FFE8CC] rounded-full flex items-center justify-center hover:bg-[#FFDDB3] transition-colors"
            aria-label="Open Quick Settings"
            title="Quick Settings"
          >
            <Settings className="w-7 h-7 text-[#111111]" />
          </button>
        </div>
      </aside>
    );
  }

  return (
    <aside ref={drawerRef} className="w-80 bg-[#FFFCF2] border-l-2 border-[#E8DCC8] shadow-sm flex flex-col relative overflow-y-auto">
      {/* Settings Icon - Top Center */}
      <div className="p-6 border-b-2 border-[#E8DCC8] flex justify-center">
        <div className="w-16 h-16 bg-[#FFE8CC] rounded-full flex items-center justify-center">
          <Settings className="w-9 h-9 text-[#111111]" />
        </div>
      </div>

      {/* Settings Content */}
      <div className="flex-1 p-6 space-y-8">
        {/* Font Selection */}
        <div>
          <label
            className="block text-[#111111] mb-4"
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '22px',
              letterSpacing: '0.02em',
            }}
          >
            Phông chữ
          </label>
          <div className="grid grid-cols-2 gap-3">
            {fontOptions.map((font) => (
              <button
                key={font.value}
                onClick={() => setSelectedFont(font.value)}
                className={`px-4 py-3 rounded-2xl border-2 transition-all shadow-sm ${
                  selectedFont === font.value
                    ? 'bg-[#D4E7F5] border-[#B8D4E8] text-[#111111]'
                    : 'bg-[#FFFCF2] border-[#E0DCCC] text-[#111111] hover:bg-[#FFF4E0]'
                }`}
                style={{
                  fontFamily: font.value,
                  fontSize: '18px',
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
            className="block text-[#111111] mb-3"
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '22px',
              letterSpacing: '0.02em',
            }}
          >
            Cỡ chữ
          </label>
          <Slider
            value={[fontSize]}
            onValueChange={(value) => setFontSize(value[0])}
            min={16}
            max={36}
            step={0.5}
            className="w-full"
          />
          <div
            className="text-center mt-2 text-[#666666]"
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '18px',
            }}
          >
            {fontSize}px
          </div>
        </div>

        {/* Letter Spacing */}
        <div>
          <label
            className="block text-[#111111] mb-3"
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '22px',
              letterSpacing: '0.02em',
            }}
          >
            Khoảng cách chữ
          </label>
          <Slider
            value={[letterSpacing * 100]}
            onValueChange={(value) => setLetterSpacing(value[0] / 100)}
            min={0}
            max={30}
            step={0.5}
            className="w-full"
          />
          <div
            className="text-center mt-2 text-[#666666]"
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '18px',
            }}
          >
            {(letterSpacing * 100).toFixed(1)}%
          </div>
        </div>

        {/* Line Spacing */}
        <div>
          <label
            className="block text-[#111111] mb-3"
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '22px',
              letterSpacing: '0.02em',
            }}
          >
            Khoảng cách dòng
          </label>
          <Slider
            value={[lineSpacing * 10]}
            onValueChange={(value) => setLineSpacing(value[0] / 10)}
            min={10}
            max={30}
            step={0.5}
            className="w-full"
          />
          <div
            className="text-center mt-2 text-[#666666]"
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '18px',
            }}
          >
            {lineSpacing.toFixed(1)}
          </div>
        </div>

        {/* Color Theme */}
        <div>
          <label
            className="block text-[#111111] mb-4"
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '22px',
              letterSpacing: '0.02em',
            }}
          >
            Chủ đề màu
          </label>
          <div className="flex gap-4 justify-center">
            {colorThemes.map((theme, index) => (
              <button
                key={index}
                onClick={() => setSelectedTheme(index)}
                className={`relative w-14 h-14 rounded-full border-4 transition-all ${
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
