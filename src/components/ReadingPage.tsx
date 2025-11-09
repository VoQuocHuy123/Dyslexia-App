import { Sidebar } from './Sidebar';
import { ReadingToolbar } from './ReadingToolbar';
import { QuickSettingsDrawer } from './QuickSettingsDrawer';
import { useState, useRef, useEffect } from 'react';
import { Plus, Volume2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { speakText } from '../utils/textToSpeech';

interface ReadingPageProps {
  onNavigate?: (page: 'Home' | 'Reading' | 'ReadingSelection' | 'Speaking' | 'SpeakingSelection' | 'Library' | 'SettingsOverview' | 'DisplaySettings' | 'AudioSettings' | 'OCRImport') => void;
  onSignOut?: () => void;
  isSidebarCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

interface ContextualToolbarProps {
  word: string;
  position: { x: number; y: number };
  onClose: () => void;
  onAddToLibrary: (word: string) => void;
  onToggleBold: (word: string) => void;
  onPlayWord: (word: string) => void;
  isBold: boolean;
}

function ContextualToolbar({ word, position, onClose, onAddToLibrary, onToggleBold, onPlayWord, isBold }: ContextualToolbarProps) {
  const toolbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toolbarRef.current && !toolbarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={toolbarRef}
      className="fixed z-50 bg-[#FFFDF5] rounded-xl border-2 border-[#E8DCC8] shadow-xl p-2 flex gap-2 animate-in fade-in slide-in-from-bottom-1 duration-200"
      style={{
        left: `${position.x}px`,
        top: `${position.y - 60}px`,
      }}
    >
      {/* Add to Library */}
      <button
        onClick={() => {
          onAddToLibrary(word);
          onClose();
        }}
        className="w-10 h-10 rounded-full bg-[#D4E7F5] hover:bg-[#C5DCF0] flex items-center justify-center transition-all shadow-sm hover:shadow-md"
        aria-label="Add to library"
        title="Thêm vào thư viện"
      >
        <Plus className="w-5 h-5 text-[#111111]" />
      </button>

      {/* Bold Toggle */}
      <button
        onClick={() => {
          onToggleBold(word);
        }}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm hover:shadow-md ${
          isBold ? 'bg-[#FFE8CC] hover:bg-[#FFDDB3]' : 'bg-[#D4E7F5] hover:bg-[#C5DCF0]'
        }`}
        aria-label="Toggle bold"
        title="Đậm"
        style={{
          fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
        }}
      >
        <span className={isBold ? 'font-bold' : ''}>B</span>
      </button>

      {/* Play Word */}
      <button
        onClick={() => {
          onPlayWord(word);
          onClose();
        }}
        className="w-10 h-10 rounded-full bg-[#D4E7F5] hover:bg-[#C5DCF0] flex items-center justify-center transition-all shadow-sm hover:shadow-md"
        aria-label="Play pronunciation"
        title="Phát âm"
      >
        <Volume2 className="w-5 h-5 text-[#111111]" />
      </button>
    </div>
  );
}

export function ReadingPage({ onNavigate, onSignOut, isSidebarCollapsed = false, onToggleCollapse }: ReadingPageProps) {
  const [isMirrorEnabled, setIsMirrorEnabled] = useState(false);
  const [isSyllableMode, setIsSyllableMode] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [toolbarPosition, setToolbarPosition] = useState({ x: 0, y: 0 });
  const [boldWords, setBoldWords] = useState<Set<string>>(new Set());
  const [isQuickSettingsOpen, setIsQuickSettingsOpen] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const readingBoxRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastScrollTime = useRef<number>(0);
  const scrollThrottle = 400; // Milliseconds between line changes
  
  const sampleText = `Con bướm đáp nhẹ nhàng trên bông hoa đầy màu sắc. Đôi cánh của nó có màu cam và đen tươi sáng, với những hoa văn đẹp trông giống như những ô cửa sổ nhỏ. Con bướm nghỉ ở đó một lúc, tận hưởng ánh nắng ấm áp. Đột nhiên, một cơn gió nhẹ thổi qua khu vườn. Con bướm mở và khép đôi cánh từ từ, như thể nó đang chào gió. Sau đó nó bay lên bầu trời, nhảy múa giữa những đám mây. Lũ trẻ quan sát từ bên dưới, chỉ tay và mỉm cười. Chúng thích nhìn con bướm nhảy múa trên không. Đó là một ngày hè hoàn hảo.`;

  const handleWordClick = (word: string, event: React.MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setSelectedWord(word);
    setToolbarPosition({
      x: rect.left + rect.width / 2 - 70,
      y: rect.top,
    });
  };

  const handleAddToLibrary = (word: string) => {
    toast.success(`"${word}" đã được thêm vào thư viện!`);
  };

  const handleToggleBold = (word: string) => {
    setBoldWords(prev => {
      const newSet = new Set(prev);
      if (newSet.has(word)) {
        newSet.delete(word);
      } else {
        newSet.add(word);
      }
      return newSet;
    });
  };

  const handlePlayWord = async (word: string) => {
    try {
      await speakText({
        text: word,
        lang: 'vi-VN',
        rate: 1.0,
      });
    } catch (error) {
      console.error('Error playing word:', error);
      toast.error('Không thể phát âm. Vui lòng thử lại.');
    }
  };

  const handlePlayText = async () => {
    if (isPlaying) {
      // Stop speaking
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    try {
      await speakText({
        text: sampleText,
        lang: 'vi-VN',
        rate: 1.0,
      });
    } catch (error) {
      console.error('Error playing text:', error);
      toast.error('Không thể phát âm. Vui lòng thử lại.');
    } finally {
      setIsPlaying(false);
    }
  };

  // Highlight mirror letters within a word
  const highlightMirrorLetters = (text: string) => {
    if (!isMirrorEnabled) return text;
    
    const chars = text.split('');
    return chars.map((char, idx) => {
      const lowerChar = char.toLowerCase();
      
      // Check for m/n/u group
      if (['m', 'n', 'u'].includes(lowerChar)) {
        return (
          <span 
            key={idx} 
            className="rounded px-0.5"
            style={{ backgroundColor: '#CBE7FF' }}
          >
            {char}
          </span>
        );
      }
      
      // Check for q/p/b/d group
      if (['q', 'p', 'b', 'd'].includes(lowerChar)) {
        return (
          <span 
            key={idx} 
            className="rounded px-0.5"
            style={{ backgroundColor: '#FAD4D4' }}
          >
            {char}
          </span>
        );
      }
      
      return char;
    });
  };

  // Split text into interactive words
  const renderInteractiveText = () => {
    const words = sampleText.split(/(\s+)/);
    return words.map((segment, index) => {
      const trimmedWord = segment.trim();
      if (!trimmedWord) return <span key={index}>{segment}</span>;
      
      const isBold = boldWords.has(trimmedWord);
      
      return (
        <span
          key={index}
          onClick={(e) => handleWordClick(trimmedWord, e)}
          className="cursor-pointer hover:bg-[#FFE8CC] hover:bg-opacity-50 rounded px-1 transition-colors inline-block"
          style={{
            fontWeight: isBold ? 'bold' : 'normal',
          }}
        >
          {highlightMirrorLetters(segment)}
        </span>
      );
    });
  };

  // Render text in Focus Mode (line by line)
  const renderFocusModeText = () => {
    return sentences.map((sentence, index) => {
      const words = sentence.split(/(\s+)/);
      const opacity = getLineOpacity(index);
      
      return (
        <div
          key={index}
          ref={(el) => (lineRefs.current[index] = el)}
          onClick={() => setCurrentLineIndex(index)}
          className="cursor-pointer transition-opacity duration-500 mb-6"
          style={{
            opacity,
            fontWeight: index === currentLineIndex ? '600' : 'normal',
          }}
        >
          {words.map((segment, wordIndex) => {
            const trimmedWord = segment.trim();
            if (!trimmedWord) return <span key={wordIndex}>{segment}</span>;
            
            const isBold = boldWords.has(trimmedWord);
            
            return (
              <span
                key={wordIndex}
                onClick={(e) => {
                  e.stopPropagation();
                  handleWordClick(trimmedWord, e);
                }}
                className="hover:bg-[#FFE8CC] hover:bg-opacity-50 rounded px-1 transition-colors inline-block"
                style={{
                  fontWeight: isBold ? 'bold' : 'normal',
                }}
              >
                {highlightMirrorLetters(segment)}
              </span>
            );
          })}
        </div>
      );
    });
  };

  const handleQuickSettingsToggle = () => {
    if (!isQuickSettingsOpen && !isSidebarCollapsed) {
      // Opening quick settings - collapse left sidebar
      onToggleCollapse?.();
    }
    setIsQuickSettingsOpen(!isQuickSettingsOpen);
  };

  // Split text into sentences for Focus Mode
  const sentences = sampleText.match(/[^.!?]+[.!?]+/g) || [sampleText];

  // Auto-scroll to center the current line in Focus Mode
  useEffect(() => {
    if (isFocusMode && readingBoxRef.current && lineRefs.current[currentLineIndex]) {
      const container = readingBoxRef.current;
      const currentLine = lineRefs.current[currentLineIndex];
      
      if (currentLine) {
        const containerHeight = container.clientHeight;
        const lineTop = currentLine.offsetTop;
        const lineHeight = currentLine.clientHeight;
        
        // Calculate scroll position to center the line
        const scrollTo = lineTop - (containerHeight / 2) + (lineHeight / 2);
        
        container.scrollTo({
          top: scrollTo,
          behavior: 'smooth'
        });
      }
    }
  }, [currentLineIndex, isFocusMode]);

  // Handle keyboard navigation in Focus Mode
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isFocusMode) return;

      if (event.key === 'Escape') {
        setIsFocusMode(false);
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        handlePreviousLine();
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        handleNextLine();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFocusMode, currentLineIndex, sentences.length]);

  // Handle mouse wheel scrolling in Focus Mode
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (!isFocusMode) return;

      // Prevent default scrolling behavior in Focus Mode
      event.preventDefault();

      // Throttle: only change line if enough time has passed
      const now = Date.now();
      if (now - lastScrollTime.current < scrollThrottle) {
        return;
      }

      lastScrollTime.current = now;

      // Determine scroll direction
      if (event.deltaY > 0) {
        // Scrolling down - next line
        handleNextLine();
      } else if (event.deltaY < 0) {
        // Scrolling up - previous line
        handlePreviousLine();
      }
    };

    const readingBox = readingBoxRef.current;
    if (readingBox && isFocusMode) {
      readingBox.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (readingBox) {
        readingBox.removeEventListener('wheel', handleWheel);
      }
    };
  }, [isFocusMode, currentLineIndex, sentences.length]);

  // Calculate opacity for each line in Focus Mode
  const getLineOpacity = (lineIndex: number) => {
    if (!isFocusMode) return 1;
    
    const distance = Math.abs(lineIndex - currentLineIndex);
    
    if (distance === 0) return 1; // Current line - full opacity
    if (distance === 1) return 0.25; // Adjacent lines - mờ hơn gấp đôi
    if (distance === 2) return 0.12; // 2 lines away - mờ hơn gấp đôi
    return 0.08; // Distant lines - mờ hơn gấp đôi
  };

  // Navigate to previous line in Focus Mode
  const handlePreviousLine = () => {
    if (isFocusMode) {
      setCurrentLineIndex((prev) => Math.max(0, prev - 1));
    }
  };

  // Navigate to next line in Focus Mode
  const handleNextLine = () => {
    if (isFocusMode) {
      setCurrentLineIndex((prev) => Math.min(sentences.length - 1, prev + 1));
    }
  };

  return (
    <div className="flex h-screen bg-[#FFF8E7]">
      {/* Sidebar */}
      <Sidebar 
        activePage="Đọc" 
        onNavigate={onNavigate}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={onToggleCollapse}
        onSignOut={onSignOut}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden flex flex-col h-screen">
        <div className="flex-1 flex items-center justify-center px-12 pt-8 pb-4 overflow-hidden">
          {/* Reading Content Frame */}
          <div 
            ref={readingBoxRef}
            className={`w-full max-w-4xl h-full max-h-[calc(100vh-180px)] bg-[#FFF8E7] rounded-[2rem] border-2 border-[#E8DCC8] shadow-lg p-12 relative ${
              isFocusMode ? 'focus-mode-active overflow-hidden' : 'overflow-y-auto'
            }`}
          >
            <div 
              className="text-[#111111] mx-auto select-none"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '26px',
                lineHeight: '1.8',
                letterSpacing: '0.14em',
                maxWidth: '66ch',
                wordSpacing: '0.16em',
              }}
            >
              {isFocusMode ? renderFocusModeText() : renderInteractiveText()}
            </div>

            {/* Focus Mode Gradient Overlays */}
            {isFocusMode && (
              <>
                <div 
                  className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, #FFF8E7 0%, transparent 100%)',
                  }}
                />
                <div 
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, #FFF8E7 0%, transparent 100%)',
                  }}
                />
              </>
            )}
          </div>
        </div>

        {/* Toolbar */}
        <div className="pb-6 flex-shrink-0">
          <ReadingToolbar 
            onToggleMirror={setIsMirrorEnabled}
            onToggleSyllable={setIsSyllableMode}
            onToggleFocusMode={setIsFocusMode}
            onPreviousLine={handlePreviousLine}
            onNextLine={handleNextLine}
            onPlayText={handlePlayText}
            isMirrorEnabled={isMirrorEnabled}
            isSyllableMode={isSyllableMode}
            isFocusMode={isFocusMode}
            isPlaying={isPlaying}
          />
        </div>

        {/* Contextual Toolbar */}
        {selectedWord && (
          <ContextualToolbar
            word={selectedWord}
            position={toolbarPosition}
            onClose={() => setSelectedWord(null)}
            onAddToLibrary={handleAddToLibrary}
            onToggleBold={handleToggleBold}
            onPlayWord={handlePlayWord}
            isBold={boldWords.has(selectedWord)}
          />
        )}
      </main>

      {/* Quick Settings Drawer */}
      <QuickSettingsDrawer 
        isCollapsed={!isQuickSettingsOpen}
        onToggle={handleQuickSettingsToggle}
      />
    </div>
  );
}