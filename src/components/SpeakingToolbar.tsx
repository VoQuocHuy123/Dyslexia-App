import { Mic, RotateCcw, Play, Pause } from 'lucide-react';

interface SpeakingToolbarProps {
  isRecording: boolean;
  isPlaying?: boolean;
  onToggleRecording: () => void;
  onReset: () => void;
  onPlayText?: () => void;
}

export function SpeakingToolbar({ isRecording, isPlaying = false, onToggleRecording, onReset, onPlayText }: SpeakingToolbarProps) {
  return (
    <div className="flex justify-center">
      <div className="bg-[#FAF7F0] rounded-[1.75rem] border-2 border-[#E8DCC8] shadow-md px-8 py-6 flex items-center gap-8">
        {/* Play Button */}
        {onPlayText && (
          <button
            onClick={onPlayText}
            disabled={isPlaying || isRecording}
            className="w-16 h-16 rounded-2xl bg-[#D4E7F5] border-2 border-[#B8D4E8] hover:bg-[#C5DCF0] flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={isPlaying ? 'Playing' : 'Play text'}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-[#111111]" />
            ) : (
              <Play className="w-8 h-8 text-[#111111]" />
            )}
          </button>
        )}

        {/* Mic Button */}
        <button
          onClick={onToggleRecording}
          disabled={isPlaying}
          className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${
            isRecording
              ? 'bg-[#E24E4E] shadow-[0_0_20px_rgba(226,78,78,0.4)] border-2 border-[#E24E4E]'
              : 'bg-[#FFF8E7] border-2 border-[#E8DCC8] hover:bg-[#FFF4E0]'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
          aria-label={isRecording ? 'Stop recording' : 'Start recording'}
        >
          <Mic 
            className={`w-8 h-8 ${isRecording ? 'text-white' : 'text-[#111111]'}`}
            fill={isRecording ? 'white' : 'none'}
          />
        </button>

        {/* Reset Button */}
        <button
          onClick={onReset}
          disabled={isPlaying}
          className="w-16 h-16 rounded-2xl bg-[#FFF8E7] border-2 border-[#E8DCC8] hover:bg-[#FFF4E0] flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Reset reading"
        >
          <RotateCcw className="w-8 h-8 text-[#111111]" />
        </button>
      </div>
    </div>
  );
}
