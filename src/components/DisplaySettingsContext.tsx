import { createContext, useContext, useEffect, useMemo, useState, ReactNode, useCallback } from 'react';

interface DisplaySettings {
  fontFamily: string;
  fontSize: number;
  letterSpacing: number;
  lineSpacing: number;
}

interface DisplaySettingsContextType extends DisplaySettings {
  updateSettings: (settings: Partial<DisplaySettings>) => void;
  resetSettings: () => void;
}

const DEFAULT_SETTINGS: DisplaySettings = {
  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
  fontSize: 26,
  letterSpacing: 0.14,
  lineSpacing: 1.8,
};

const FONT_KEY = 'app-font';
const FONT_SIZE_KEY = 'app-font-size';
const LETTER_SPACING_KEY = 'app-letter-spacing';
const LINE_SPACING_KEY = 'app-line-spacing';

const DisplaySettingsContext = createContext<DisplaySettingsContextType | undefined>(undefined);

export function DisplaySettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<DisplaySettings>(DEFAULT_SETTINGS);

  // Load persisted settings after mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedFont = localStorage.getItem(FONT_KEY);
    const savedFontSize = Number(localStorage.getItem(FONT_SIZE_KEY));
    const savedLetterSpacing = Number(localStorage.getItem(LETTER_SPACING_KEY));
    const savedLineSpacing = Number(localStorage.getItem(LINE_SPACING_KEY));

    setSettings({
      fontFamily: savedFont || DEFAULT_SETTINGS.fontFamily,
      fontSize: Number.isFinite(savedFontSize) && savedFontSize > 0 ? savedFontSize : DEFAULT_SETTINGS.fontSize,
      letterSpacing: Number.isFinite(savedLetterSpacing) ? savedLetterSpacing : DEFAULT_SETTINGS.letterSpacing,
      lineSpacing: Number.isFinite(savedLineSpacing) && savedLineSpacing > 0 ? savedLineSpacing : DEFAULT_SETTINGS.lineSpacing,
    });
  }, []);

  // Apply settings to CSS variables so the entire app can react
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.style.setProperty('--display-font-family', settings.fontFamily);
    root.style.setProperty('--display-font-size', `${settings.fontSize}px`);
    root.style.setProperty('--display-letter-spacing', `${settings.letterSpacing}em`);
    root.style.setProperty('--display-line-spacing', settings.lineSpacing.toString());
  }, [settings]);

  const updateSettings = useCallback((partial: Partial<DisplaySettings>) => {
    setSettings((prev) => {
      const merged = { ...prev, ...partial };
      if (typeof window !== 'undefined') {
        localStorage.setItem(FONT_KEY, merged.fontFamily);
        localStorage.setItem(FONT_SIZE_KEY, merged.fontSize.toString());
        localStorage.setItem(LETTER_SPACING_KEY, merged.letterSpacing.toString());
        localStorage.setItem(LINE_SPACING_KEY, merged.lineSpacing.toString());
      }
      return merged;
    });
  }, []);

  const resetSettings = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(FONT_KEY, DEFAULT_SETTINGS.fontFamily);
      localStorage.setItem(FONT_SIZE_KEY, DEFAULT_SETTINGS.fontSize.toString());
      localStorage.setItem(LETTER_SPACING_KEY, DEFAULT_SETTINGS.letterSpacing.toString());
      localStorage.setItem(LINE_SPACING_KEY, DEFAULT_SETTINGS.lineSpacing.toString());
    }
    setSettings(DEFAULT_SETTINGS);
  }, []);

  const value = useMemo<DisplaySettingsContextType>(() => ({
      ...settings,
      updateSettings,
      resetSettings,
    }), [settings, updateSettings, resetSettings]);

  return (
    <DisplaySettingsContext.Provider value={value}>
      {children}
    </DisplaySettingsContext.Provider>
  );
}

export function useDisplaySettings() {
  const context = useContext(DisplaySettingsContext);
  if (!context) {
    throw new Error('useDisplaySettings must be used within DisplaySettingsProvider');
  }
  return context;
}

