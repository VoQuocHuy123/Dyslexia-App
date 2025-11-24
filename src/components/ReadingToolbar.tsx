import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw, MoreHorizontal, Eye } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from './ThemeContext';

interface ReadingToolbarProps {
  onToggleMirror?: (enabled: boolean) => void;
  onToggleSyllable?: (enabled: boolean) => void;
  onToggleFocusMode?: (enabled: boolean) => void;
  onPreviousLine?: () => void;
  onNextLine?: () => void;
  isMirrorEnabled?: boolean;
  isSyllableMode?: boolean;
  isFocusMode?: boolean;
}

export function ReadingToolbar({ 
  onToggleMirror, 
  onToggleSyllable,
  onToggleFocusMode,
  onPreviousLine,
  onNextLine,
  isMirrorEnabled = false,
  isSyllableMode = false,
  isFocusMode = false
}: ReadingToolbarProps) {
  const { themeColors } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
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
      <div 
        className="flex items-center justify-center gap-6 px-8 py-5 rounded-3xl border-2 shadow-md w-fit"
        style={{
          backgroundColor: themeColors.sidebarBackground,
          borderColor: themeColors.border,
        }}
      >
        {/* Previous Sentence/Line */}
        <button 
          onClick={onPreviousLine}
          className="p-4 rounded-2xl transition-all border-2"
          style={{
            borderColor: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = themeColors.accentMain;
            e.currentTarget.style.borderColor = themeColors.border;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = 'transparent';
          }}
          aria-label={isFocusMode ? "Previous line" : "Previous sentence"}
        >
          <ChevronLeft className="w-6 h-6" style={{ color: themeColors.textMain }} />
        </button>

        {/* Play/Pause Toggle */}
        <button 
          className="p-4 rounded-2xl transition-all border-2"
          style={{
            borderColor: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = themeColors.accentMain;
            e.currentTarget.style.borderColor = themeColors.border;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = 'transparent';
          }}
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" style={{ color: themeColors.textMain }} />
          ) : (
            <Play className="w-6 h-6" style={{ color: themeColors.textMain }} />
          )}
        </button>

        {/* Next Sentence/Line */}
        <button 
          onClick={onNextLine}
          className="p-4 rounded-2xl transition-all border-2"
          style={{
            borderColor: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = themeColors.accentMain;
            e.currentTarget.style.borderColor = themeColors.border;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = 'transparent';
          }}
          aria-label={isFocusMode ? "Next line" : "Next sentence"}
        >
          <ChevronRight className="w-6 h-6" style={{ color: themeColors.textMain }} />
        </button>

        {/* Reset */}
        <button 
          className="p-4 rounded-2xl transition-all border-2"
          style={{
            borderColor: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = themeColors.accentMain;
            e.currentTarget.style.borderColor = themeColors.border;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = 'transparent';
          }}
          aria-label="Reset"
        >
          <RotateCcw className="w-6 h-6" style={{ color: themeColors.textMain }} />
        </button>

        {/* More Options */}
        <button 
          ref={moreButtonRef}
          className="p-4 rounded-2xl transition-all border-2"
          style={{
            borderColor: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = themeColors.accentMain;
            e.currentTarget.style.borderColor = themeColors.border;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = 'transparent';
          }}
          aria-label="More options"
          onClick={() => setShowPopup(!showPopup)}
        >
          <MoreHorizontal className="w-6 h-6" style={{ color: themeColors.textMain }} />
        </button>
      </div>

      {/* Compact Popup Menu */}
      {showPopup && moreButtonRef.current && (
        <div 
          ref={popupRef}
          className="absolute rounded-xl border-2 shadow-xl p-3 w-24 animate-in fade-in slide-in-from-bottom-1 duration-150"
          style={{
            bottom: `calc(100% + 8px)`,
            left: `${moreButtonRef.current.offsetLeft + moreButtonRef.current.offsetWidth / 2 - 48}px`,
            backgroundColor: themeColors.cardBackground,
            borderColor: themeColors.border,
          }}
        >
          {/* Mirror Letter Highlighting Toggle */}
          <button
            onClick={() => onToggleMirror?.(!isMirrorEnabled)}
            className="w-full h-10 rounded-lg flex items-center justify-center transition-all mb-2"
            style={{
              backgroundColor: isMirrorEnabled ? '#D4E7F5' : themeColors.appBackground,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = isMirrorEnabled ? '#C5DCF0' : themeColors.accentMain;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isMirrorEnabled ? '#D4E7F5' : themeColors.appBackground;
            }}
            aria-label="Toggle mirror letter highlighting"
            title="Highlight similar letters"
          >
            <span 
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '16px',
                fontWeight: 600,
                color: themeColors.textMain,
              }}
            >
              b↔d
            </span>
          </button>

          {/* Word/Syllable Segmentation Toggle */}
          <button
            onClick={() => onToggleSyllable?.(!isSyllableMode)}
            className="w-full h-10 rounded-lg flex items-center justify-center transition-all mb-2"
            style={{
              backgroundColor: isSyllableMode ? '#C9F6C9' : themeColors.appBackground,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = isSyllableMode ? '#B8E8B8' : themeColors.accentMain;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isSyllableMode ? '#C9F6C9' : themeColors.appBackground;
            }}
            aria-label="Toggle syllable mode"
            title="Toggle word-syllable mode"
          >
            <span 
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '16px',
                fontWeight: 600,
                color: themeColors.textMain,
              }}
            >
              a·b
            </span>
          </button>

          {/* Focus Mode Toggle */}
          <button
            onClick={() => onToggleFocusMode?.(!isFocusMode)}
            className="w-full h-10 rounded-lg flex items-center justify-center transition-all"
            style={{
              backgroundColor: isFocusMode ? themeColors.accentMain : themeColors.appBackground,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            aria-label="Toggle focus mode"
            title="Focus Mode"
          >
            <Eye className="w-5 h-5" style={{ color: themeColors.textMain }} />
          </button>
        </div>
      )}
    </div>
  );
}