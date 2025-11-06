import { Badge } from './ui/badge';
import { BookOpen } from 'lucide-react';

interface ReadingCardProps {
  title: string;
  topic: string;
  level: string;
  onClick?: () => void;
}

export function ReadingCard({ title, topic, level, onClick }: ReadingCardProps) {
  return (
    <button
      onClick={onClick}
      className="group w-full bg-[#FFFCF2] rounded-3xl border-2 border-[#E8DCC8] shadow-md p-8 transition-all hover:scale-105 hover:shadow-xl hover:border-[#D4C5A9] text-left"
    >
      {/* Icon */}
      <div className="mb-6 w-16 h-16 bg-[#FFE8CC] rounded-2xl flex items-center justify-center">
        <BookOpen className="w-9 h-9 text-[#111111]" />
      </div>

      {/* Title */}
      <h3 
        className="text-[#111111] mb-3"
        style={{
          fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
          fontSize: '28px',
          letterSpacing: '0.12em',
        }}
      >
        {title}
      </h3>

      {/* Topic */}
      <p 
        className="text-[#666666] mb-5"
        style={{
          fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
          fontSize: '24px',
          letterSpacing: '0.12em',
        }}
      >
        {topic}
      </p>

      {/* Level Badge */}
      <Badge 
        className="bg-[#FFE8CC] text-[#111111] hover:bg-[#FFE8CC] border-2 border-[#E8DCC8] px-4 py-2 rounded-xl"
        style={{
          fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
          fontSize: '24px',
          letterSpacing: '0.12em',
        }}
      >
        {level}
      </Badge>
    </button>
  );
}
