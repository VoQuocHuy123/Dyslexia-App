import { ArrowRight, LucideIcon } from 'lucide-react';

interface SettingsCardProps {
  icon: LucideIcon | string;
  title: string;
  onClick: () => void;
}

export function SettingsCard({ icon: Icon, title, onClick }: SettingsCardProps) {
  return (
    <button
      onClick={onClick}
      className="group bg-[#FFFCF2] rounded-3xl border-2 border-[#E8DCC8] shadow-md hover:shadow-xl transition-all hover:scale-105 p-12 flex flex-col items-center justify-center min-h-[400px] w-full"
    >
      {/* Icon */}
      <div className="mb-8 w-24 h-24 bg-[#FFE8CC] rounded-3xl flex items-center justify-center">
        {typeof Icon === 'string' ? (
          <span 
            className="text-[#111111]"
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '54px',
            }}
          >
            {Icon}
          </span>
        ) : (
          <Icon className="w-14 h-14 text-[#111111]" />
        )}
      </div>

      {/* Title */}
      <h3 
        className="text-[#111111] mb-6 text-center"
        style={{
          fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
          fontSize: '32px',
          letterSpacing: '0.12em',
          lineHeight: '1.4',
        }}
      >
        {title}
      </h3>

      {/* Arrow indicator */}
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="w-8 h-8 text-[#111111]" />
      </div>
    </button>
  );
}
