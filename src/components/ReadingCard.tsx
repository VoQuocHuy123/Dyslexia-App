import { Badge } from './ui/badge';
import { BookOpen } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface ReadingCardProps {
  title: string;
  topic: string;
  level: string;
  onClick?: () => void;
}

export function ReadingCard({ title, topic, level, onClick }: ReadingCardProps) {
  const { themeColors } = useTheme();
  
  return (
    <button
      onClick={onClick}
      className="group w-full rounded-3xl border-2 shadow-md p-8 transition-all hover:scale-105 hover:shadow-xl text-left"
      style={{
        backgroundColor: themeColors.cardBackground,
        borderColor: themeColors.border,
      }}
    >
      {/* Icon */}
      <div 
        className="mb-6 w-16 h-16 rounded-2xl flex items-center justify-center"
        style={{
          backgroundColor: themeColors.accentMain,
        }}
      >
        <BookOpen className="w-9 h-9" style={{ color: themeColors.textMain }} />
      </div>

      {/* Title */}
      <h3 
        className="mb-3"
        style={{
          fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
          fontSize: '28px',
          letterSpacing: '0.12em',
          color: themeColors.textMain,
        }}
      >
        {title}
      </h3>

      {/* Topic */}
      <p 
        className="mb-5"
        style={{
          fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
          fontSize: '24px',
          letterSpacing: '0.12em',
          color: themeColors.textMuted,
        }}
      >
        {topic}
      </p>

      {/* Level Badge */}
      <Badge 
        className="border-2 px-4 py-2 rounded-xl"
        style={{
          fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
          fontSize: '24px',
          letterSpacing: '0.12em',
          backgroundColor: themeColors.accentMain,
          color: themeColors.textMain,
          borderColor: themeColors.border,
        }}
      >
        {level}
      </Badge>
    </button>
  );
}