import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeType = 'cream' | 'light' | 'coolBlue' | 'dark';

export interface ThemeColors {
  name: string;
  displayName: string;
  appBackground: string;
  sidebarBackground: string;
  cardBackground: string;
  border: string;
  textMain: string;
  textSecondary: string;
  textMuted: string;
  textLight: string;
  accentMain: string;
  accentHover: string;
  exerciseCard1: string;
  exerciseCard2: string;
  exerciseCard3: string;
  exerciseCard4: string;
  shadow: string;
  previewBorder: string; // For settings preview box
}

export const themes: Record<ThemeType, ThemeColors> = {
  cream: {
    name: 'cream',
    displayName: 'Vàng Kem',
    appBackground: '#FFF8E7',
    sidebarBackground: '#FFFCF2',
    cardBackground: '#FFFCF2',
    border: '#E8DCC8',
    textMain: '#111111',
    textSecondary: '#333333',
    textMuted: '#666666',
    textLight: '#888888',
    accentMain: '#FFE8CC',
    accentHover: '#FFDDB3',
    exerciseCard1: '#FFF4CC',
    exerciseCard2: '#FFE9D6',
    exerciseCard3: '#DFF7E2',
    exerciseCard4: '#DDEFFF',
    shadow: 'rgba(0, 0, 0, 0.1)',
    previewBorder: '#FFEB99',
  },
  light: {
    name: 'light',
    displayName: 'Sáng',
    appBackground: '#F5F5F0',      // Off-white với chút warm tone → giảm chói
    sidebarBackground: '#FAFAF7',   // Nhẹ hơn một chút
    cardBackground: '#FFFFFF',      // Card sáng để nổi bật
    border: '#D4D0C0',             // Border đậm hơn → dễ phân biệt
    textMain: '#1A1A1A',           // Text đậm hơn → contrast cao
    textSecondary: '#3D3D3D',
    textMuted: '#6B6B6B',
    textLight: '#8C8C8C',
    accentMain: '#FFC266',         // Màu cam nhẹ → contrast tốt với nền
    accentHover: '#FFB347',        // Cam đậm khi hover
    exerciseCard1: '#FFF5CC',
    exerciseCard2: '#FFE9D6',
    exerciseCard3: '#E5F7E8',
    exerciseCard4: '#E3F0FF',
    shadow: 'rgba(0, 0, 0, 0.08)',  // Shadow rõ hơn một chút
    previewBorder: '#FFC266',
  },
  coolBlue: {
    name: 'coolBlue',
    displayName: 'Xanh Mát',
    appBackground: '#E8F1FF',
    sidebarBackground: '#F3F7FF',
    cardBackground: '#F3F7FF',
    border: '#C9D6EB',
    textMain: '#101623',
    textSecondary: '#2C384C',
    textMuted: '#52627A',
    textLight: '#7A8AA0',
    accentMain: '#A8CFFF',
    accentHover: '#8FC1FF',
    exerciseCard1: '#DDEFFF',
    exerciseCard2: '#CDE6FF',
    exerciseCard3: '#E0F4FF',
    exerciseCard4: '#D4E7FA',
    shadow: 'rgba(0, 0, 50, 0.1)',
    previewBorder: '#A8CFFF',
  },
  dark: {
    name: 'dark',
    displayName: 'Tối',
    appBackground: '#0F172A',
    sidebarBackground: '#111827',
    cardBackground: '#1E293B',
    border: '#334155',
    textMain: '#F8FAFC',
    textSecondary: '#CBD5F5',
    textMuted: '#94A3B8',
    textLight: '#CBD5F5',
    accentMain: '#3B82F6',
    accentHover: '#2563EB',
    exerciseCard1: '#1E293B',
    exerciseCard2: '#0F172A',
    exerciseCard3: '#1D4ED8',
    exerciseCard4: '#0EA5E9',
    shadow: 'rgba(15, 23, 42, 0.6)',
    previewBorder: '#2563EB',
  },
};

interface ThemeContextType {
  currentTheme: ThemeType;
  themeColors: ThemeColors;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('cream');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') as ThemeType | null;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('cream');
    }
  }, []);

  // Apply theme by setting CSS variables
  const applyTheme = (theme: ThemeType) => {
    const colors = themes[theme];
    const root = document.documentElement;

    root.style.setProperty('--app-background', colors.appBackground);
    root.style.setProperty('--sidebar-background', colors.sidebarBackground);
    root.style.setProperty('--card-background', colors.cardBackground);
    root.style.setProperty('--border', colors.border);
    root.style.setProperty('--text-main', colors.textMain);
    root.style.setProperty('--text-secondary', colors.textSecondary);
    root.style.setProperty('--text-muted', colors.textMuted);
    root.style.setProperty('--text-light', colors.textLight);
    root.style.setProperty('--accent-main', colors.accentMain);
    root.style.setProperty('--accent-hover', colors.accentHover);
    root.style.setProperty('--exercise-card-1', colors.exerciseCard1);
    root.style.setProperty('--exercise-card-2', colors.exerciseCard2);
    root.style.setProperty('--exercise-card-3', colors.exerciseCard3);
    root.style.setProperty('--exercise-card-4', colors.exerciseCard4);
    root.style.setProperty('--shadow', colors.shadow);
  };

  // Set theme and save to localStorage
  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    localStorage.setItem('app-theme', theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        themeColors: themes[currentTheme],
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}