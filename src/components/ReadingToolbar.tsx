import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw, MoreHorizontal, Eye } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface ReadingToolbarProps {
  onToggleMirror?: (enabled: boolean) => void;
  onToggleSyllable?: (enabled: boolean) => void;
  onToggleFocusMode?: (enabled: boolean) => void;
  onPreviousLine?: () => void;
  onNextLine?: () => void;
  onPlayText?: () => void;
  isMirrorEnabled?: boolean;
  isSyllableMode?: boolean;
  isFocusMode?: boolean;
  isPlaying?: boolean;
}

export function ReadingToolbar({ 
  onToggleMirror, 
  onToggleSyllable,
  onToggleFocusMode,
  onPreviousLine,
  onNextLine,
  onPlayText,
  isMirrorEnabled = false,
  isSyllableMode = false,
  isFocusMode = false,
  isPlaying = false
}: ReadingToolbarProps) {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current && 
        !popupRef.current.contains(event.target as Node) &&
        moreButtonRef.current &&
        !moreButtonRef.current.contains(event.target as Node)
      ) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div className="relative flex items-center justify-center">
      <div className="flex items-center justify-center gap-6 px-8 py-5 bg-[#FAF7F0] rounded-3xl border-2 border-[#E8DCC8] shadow-md w-fit">
        {/* Previous Sentence/Line */}
        <button 
          onClick={onPreviousLine}
          className="p-4 rounded-2xl hover:bg-[#FFE8CC] transition-all border-2 border-transparent hover:border-[#E8DCC8]"
          aria-label={isFocusMode ? "Previous line" : "Previous sentence"}
        >
          <ChevronLeft className="w-6 h-6 text-[#111111]" />
        </button>

        {/* Play/Pause Toggle */}
        {onPlayText && (
          <button 
            className="p-4 rounded-2xl hover:bg-[#FFE8CC] transition-all border-2 border-transparent hover:border-[#E8DCC8]"
            onClick={onPlayText}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-[#111111]" />
            ) : (
              <Play className="w-6 h-6 text-[#111111]" />
            )}
          </button>
        )}

        {/* Next Sentence/Line */}
        <button 
          onClick={onNextLine}
          className="p-4 rounded-2xl hover:bg-[#FFE8CC] transition-all border-2 border-transparent hover:border-[#E8DCC8]"
          aria-label={isFocusMode ? "Next line" : "Next sentence"}
        >
          <ChevronRight className="w-6 h-6 text-[#111111]" />
        </button>

        {/* Reset */}
        <button 
          className="p-4 rounded-2xl hover:bg-[#FFE8CC] transition-all border-2 border-transparent hover:border-[#E8DCC8]"
          aria-label="Reset"
        >
          <RotateCcw className="w-6 h-6 text-[#111111]" />
        </button>

        {/* More Options */}
        <button 
          ref={moreButtonRef}
          className="p-4 rounded-2xl hover:bg-[#FFE8CC] transition-all border-2 border-transparent hover:border-[#E8DCC8]"
          aria-label="More options"
          onClick={() => setShowPopup(!showPopup)}
        >
          <MoreHorizontal className="w-6 h-6 text-[#111111]" />
        </button>
      </div>

      {/* Compact Popup Menu */}
      {showPopup && moreButtonRef.current && (
        <div 
          ref={popupRef}
          className="absolute bg-[#FFFDF5] rounded-xl border-2 border-[#E8DCC8] shadow-xl p-3 w-24 animate-in fade-in slide-in-from-bottom-1 duration-150"
          style={{
            bottom: `calc(100% + 8px)`,
            left: `${moreButtonRef.current.offsetLeft + moreButtonRef.current.offsetWidth / 2 - 48}px`,
          }}
        >
          {/* Mirror Letter Highlighting Toggle */}
          <button
            onClick={() => onToggleMirror?.(!isMirrorEnabled)}
            className={`w-full h-10 rounded-lg flex items-center justify-center transition-all mb-2 ${
              isMirrorEnabled 
                ? 'bg-[#D4E7F5] hover:bg-[#C5DCF0] shadow-md' 
                : 'bg-[#FFF8E7] hover:bg-[#FFE8CC] shadow-sm'
            }`}
            aria-label="Toggle mirror letter highlighting"
            title="Highlight similar letters"
          >
            <span 
              className="text-[#111111]"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              b↔d
            </span>
          </button>

          {/* Word/Syllable Segmentation Toggle */}
          <button
            onClick={() => onToggleSyllable?.(!isSyllableMode)}
            className={`w-full h-10 rounded-lg flex items-center justify-center transition-all mb-2 ${
              isSyllableMode 
                ? 'bg-[#C9F6C9] hover:bg-[#B8E8B8] shadow-md' 
                : 'bg-[#FFF8E7] hover:bg-[#FFE8CC] shadow-sm'
            }`}
            aria-label="Toggle syllable mode"
            title="Toggle word-syllable mode"
          >
            <span 
              className="text-[#111111]"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              a·b
            </span>
          </button>

          {/* Focus Mode Toggle */}
          <button
            onClick={() => onToggleFocusMode?.(!isFocusMode)}
            className={`w-full h-10 rounded-lg flex items-center justify-center transition-all ${
              isFocusMode 
                ? 'bg-[#FFE8CC] hover:bg-[#FFDDB3] shadow-md' 
                : 'bg-[#FFF8E7] hover:bg-[#FFE8CC] shadow-sm'
            }`}
            aria-label="Toggle focus mode"
            title="Focus Mode"
          >
            <Eye className="w-5 h-5 text-[#111111]" />
          </button>
        </div>
      )}
    </div>
  );
}
