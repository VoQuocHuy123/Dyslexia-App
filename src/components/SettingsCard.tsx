import { ArrowRight, LucideIcon } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface SettingsCardProps {
  icon: LucideIcon | string;
  title: string;
  onClick: () => void;
}

export function SettingsCard({ icon: Icon, title, onClick }: SettingsCardProps) {
  const { themeColors } = useTheme();
  
  return (
    <button
      onClick={onClick}
      className="group rounded-3xl border-2 shadow-md hover:shadow-xl transition-all hover:scale-105 p-12 flex flex-col items-center justify-center min-h-[400px] w-full"
      style={{
        backgroundColor: themeColors.cardBackground,
        borderColor: themeColors.border,
      }}
    >
      {/* Icon */}
      <div 
        className="mb-8 w-24 h-24 rounded-3xl flex items-center justify-center"
        style={{ backgroundColor: themeColors.accentMain }}
      >
        {typeof Icon === 'string' ? (
          <span 
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '54px',
              color: themeColors.textMain,
            }}
          >
            {Icon}
          </span>
        ) : (
          <Icon className="w-14 h-14" style={{ color: themeColors.textMain }} />
        )}
      </div>

      {/* Title */}
      <h3 
        className="mb-6 text-center"
        style={{
          fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
          fontSize: '32px',
          letterSpacing: '0.12em',
          lineHeight: '1.4',
          color: themeColors.textMain,
        }}
      >
        {title}
      </h3>

      {/* Arrow indicator */}
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="w-8 h-8" style={{ color: themeColors.textMain }} />
      </div>
    </button>
  );
}