import { Mic, RotateCcw } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface SpeakingToolbarProps {
  isRecording?: boolean;
  onToggleRecording?: () => void;
  onReset?: () => void;
}

export function SpeakingToolbar({ isRecording = false, onToggleRecording, onReset }: SpeakingToolbarProps) {
  const { themeColors } = useTheme();

  return (
    <div className="flex justify-center">
      <div 
        className="rounded-[1.75rem] border-2 shadow-md px-8 py-6 flex items-center gap-8"
        style={{
          backgroundColor: themeColors.sidebarBackground,
          borderColor: themeColors.border,
        }}
      >
        {/* Mic Button */}
        <button
          onClick={onToggleRecording}
          className="w-20 h-20 rounded-full transition-all flex items-center justify-center"
          style={{
            backgroundColor: isRecording ? '#E24E4E' : themeColors.appBackground,
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: isRecording ? '#E24E4E' : themeColors.border,
            boxShadow: isRecording ? '0 0 20px rgba(226,78,78,0.4)' : undefined,
          }}
          onMouseEnter={(e) => {
            if (!isRecording) {
              e.currentTarget.style.backgroundColor = themeColors.accentHover;
            }
          }}
          onMouseLeave={(e) => {
            if (!isRecording) {
              e.currentTarget.style.backgroundColor = themeColors.appBackground;
            }
          }}
          aria-label={isRecording ? "Stop recording" : "Start recording"}
        >
          <Mic className="w-9 h-9" style={{ color: isRecording ? '#FFFFFF' : themeColors.textMain }} />
        </button>

        {/* Reset Button */}
        <button
          onClick={onReset}
          className="w-16 h-16 rounded-2xl border-2 flex items-center justify-center transition-all"
          style={{
            backgroundColor: themeColors.appBackground,
            borderColor: themeColors.border,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = themeColors.accentHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = themeColors.appBackground;
          }}
          aria-label="Reset reading"
        >
          <RotateCcw className="w-6 h-6" style={{ color: themeColors.textMain }} />
        </button>
      </div>
    </div>
  );
}