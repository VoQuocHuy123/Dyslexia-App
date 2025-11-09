import { Sidebar } from './Sidebar';
import { useState, useRef, useEffect } from 'react';
import svgPaths from '../imports/svg-5gav2b48w6';
import { Check, X } from 'lucide-react';
import { speakText } from '../utils/textToSpeech';
import { toast } from 'sonner';

interface LibraryPageProps {
  onNavigate?: (page: 'Home' | 'Reading' | 'ReadingSelection' | 'Speaking' | 'SpeakingSelection' | 'Library' | 'SettingsOverview' | 'DisplaySettings' | 'AudioSettings' | 'OCRImport') => void;
  onSignOut?: () => void;
  isSidebarCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

interface Word {
  id: number;
  text: string;
  dateAdded: Date;
}

export function LibraryPage({ onNavigate, onSignOut, isSidebarCollapsed = false, onToggleCollapse }: LibraryPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const alphabetContainerRef = useRef<HTMLDivElement>(null);
  const [isAddWordPopupOpen, setIsAddWordPopupOpen] = useState(false);
  const [newWordInput, setNewWordInput] = useState('');
  const popupRef = useRef<HTMLDivElement>(null);

  // Vietnamese alphabet for the filter
  const alphabet = [
    'A', 'Ă', 'Â', 'B', 'C', 'D', 'Đ', 'E', 'Ê', 'G', 'H', 'I',
    'K', 'L', 'M', 'N', 'O', 'Ô', 'Ơ', 'P', 'Q', 'R', 'S', 'T',
    'U', 'Ư', 'V', 'X', 'Y'
  ];

  // Sample word data
  const allWords: Word[] = [
    // Today
    { id: 1, text: 'bươm bướm', dateAdded: new Date() },
    { id: 2, text: 'vườn hoa', dateAdded: new Date() },
    { id: 3, text: 'màu sắc', dateAdded: new Date() },
    
    // Yesterday
    { id: 7, text: 'gia đình', dateAdded: new Date(Date.now() - 86400000) },
    { id: 8, text: 'yêu thương', dateAdded: new Date(Date.now() - 86400000) },
    { id: 9, text: 'chăm sóc', dateAdded: new Date(Date.now() - 86400000) },
    
    // 30/10/2025
    { id: 12, text: 'động vật', dateAdded: new Date(Date.now() - 172800000) },
    { id: 13, text: 'thú vị', dateAdded: new Date(Date.now() - 172800000) },
    { id: 14, text: 'học hỏi', dateAdded: new Date(Date.now() - 172800000) },
    
    // 29/10/2025
    { id: 15, text: 'khám phá', dateAdded: new Date(Date.now() - 259200000) },
    { id: 16, text: 'phiêu lưu', dateAdded: new Date(Date.now() - 259200000) },
    { id: 17, text: 'tuyệt vời', dateAdded: new Date(Date.now() - 259200000) },
  ];

  // Filter words based on search and selected letter
  const filteredWords = allWords.filter(word => {
    const matchesSearch = word.text.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLetter = !selectedLetter || word.text.charAt(0).toUpperCase() === selectedLetter;
    return matchesSearch && matchesLetter;
  });

  // Group words by date
  const groupWordsByDate = (words: Word[]) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const groups: { [key: string]: Word[] } = {};

    words.forEach(word => {
      const wordDate = new Date(word.dateAdded);
      wordDate.setHours(0, 0, 0, 0);

      let groupKey: string;
      if (wordDate.getTime() === today.getTime()) {
        groupKey = 'Hôm nay';
      } else if (wordDate.getTime() === yesterday.getTime()) {
        groupKey = 'Hôm qua';
      } else {
        groupKey = `${wordDate.getDate().toString().padStart(2, '0')}/${(wordDate.getMonth() + 1).toString().padStart(2, '0')}/${wordDate.getFullYear()}`;
      }

      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(word);
    });

    return groups;
  };

  const groupedWords = groupWordsByDate(filteredWords);

  const handlePlayPronunciation = async (word: string) => {
    try {
      await speakText({
        text: word,
        lang: 'vi-VN',
        rate: 1.0,
      });
    } catch (error) {
      console.error('Error playing pronunciation:', error);
      toast.error('Không thể phát âm. Vui lòng thử lại.');
    }
  };

  const handleAddWord = () => {
    setIsAddWordPopupOpen(true);
    setNewWordInput('');
  };

  const handleConfirmAddWord = () => {
    if (newWordInput.trim()) {
      console.log(`Adding new word: ${newWordInput.trim()}`);
      // Here you would add the word to your state/database
      setIsAddWordPopupOpen(false);
      setNewWordInput('');
    }
  };

  const handleCancelAddWord = () => {
    setIsAddWordPopupOpen(false);
    setNewWordInput('');
  };

  // Close popup when clicking outside
  useEffect(() => {
    if (isAddWordPopupOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
          handleCancelAddWord();
        }
      };

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          handleCancelAddWord();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isAddWordPopupOpen]);

  return (
    <div className="flex h-screen bg-[#fff8e7]">
      {/* Sidebar */}
      <Sidebar 
        activePage="Thư viện" 
        onNavigate={onNavigate}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={onToggleCollapse}
        onSignOut={onSignOut}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto relative">
        <div className="box-border flex flex-col items-start pb-[100px] pl-[54px] pr-[140px] pt-[54px]">
          {/* Search Bar */}
          <div className="h-[82px] relative w-full mb-[48px]">
            <div className="bg-[#FFFCF2] h-[82px] rounded-[27px] relative w-full">
              <div className="box-border flex h-[82px] items-center overflow-clip pl-[72px] pr-[27px] py-[22.5px] relative w-full">
                <input
                  type="text"
                  placeholder="Tìm từ trong thư viện..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-[#111111] placeholder:text-[#999999]"
                  style={{
                    fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                    fontSize: '24px',
                    letterSpacing: '0.12em',
                  }}
                />
              </div>
              <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[27px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
            </div>
            
            {/* Search Icon */}
            <div className="absolute left-[27px] size-[27px] top-[27.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
                <g>
                  <path d={svgPaths.p1baf2e80} stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                  <path d={svgPaths.p5c3bc00} stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                </g>
              </svg>
            </div>
          </div>

          {/* Word Groups */}
          <div className="flex flex-col gap-[48px] w-full">
            {Object.entries(groupedWords).length === 0 ? (
              <div 
                className="text-center text-[#666666] py-12"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '24px',
                  letterSpacing: '0.12em',
                }}
              >
                Không tìm thấy từ nào. Thử tìm kiếm khác hoặc thêm từ mới.
              </div>
            ) : (
              Object.entries(groupedWords).map(([dateGroup, words]) => (
                <div key={dateGroup} className="flex flex-col gap-[32px]">
                  {/* Date Header */}
                  <h2 
                    className="text-[#111111]"
                    style={{
                      fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                      fontSize: '32px',
                      letterSpacing: '0.12em',
                      lineHeight: '1.4',
                    }}
                  >
                    {dateGroup}
                  </h2>

                  {/* Word Cards Grid - Responsive: 3 cards when sidebar expanded, 4 when collapsed */}
                  <div 
                    className={`grid gap-6 w-full ${
                      isSidebarCollapsed ? 'grid-cols-4' : 'grid-cols-3'
                    }`}
                  >
                    {words.map((word) => (
                      <div
                        key={word.id}
                        className="bg-[#fffcf2] h-[220px] relative rounded-[18px] cursor-pointer hover:shadow-lg transition-shadow"
                      >
                        <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
                        
                        {/* Word Text */}
                        <div className="absolute inset-0 flex items-center justify-center px-6 pb-8">
                          <p 
                            className="text-[#111111] text-center break-words"
                            style={{
                              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                              fontSize: '30px',
                              letterSpacing: '0.14em',
                              lineHeight: '1.3',
                            }}
                          >
                            {word.text}
                          </p>
                        </div>

                        {/* Speaker Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlayPronunciation(word.text);
                          }}
                          className="absolute bg-[#d4e7f5] box-border flex items-center justify-center right-3 top-3 rounded-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[45px] hover:bg-[#c5dcf0] hover:shadow-md transition-all"
                          aria-label="Phát âm"
                        >
                          <div className="relative shrink-0 size-[22.5px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
                              <g>
                                <path d={svgPaths.p1a0f8580} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
                                <path d={svgPaths.p8a5a680} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
                                <path d={svgPaths.p2f3abf00} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
                              </g>
                            </svg>
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Alphabet Filter - Fixed on Right Side with Scroll and Gradients */}
        <div className="fixed right-4 top-[10%] bottom-[15%] w-[70px] z-10 flex flex-col">
          {/* Top Gradient Fade */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#fff8e7] to-transparent pointer-events-none z-20" />
          
          {/* Scrollable Alphabet Container */}
          <div 
            ref={alphabetContainerRef}
            className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide py-4"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black 64px, black calc(100% - 64px), transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 64px, black calc(100% - 64px), transparent)',
            }}
          >
            <div className="flex flex-col gap-2 items-center px-1">
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(selectedLetter === letter ? null : letter)}
                  className={`rounded-full transition-all flex items-center justify-center shrink-0 ${
                    selectedLetter === letter
                      ? 'bg-[#c8e4f5] shadow-md w-[56px] h-[56px]'
                      : 'bg-[#fffcf2] hover:bg-[#fff4e0] shadow-sm w-[50px] h-[50px]'
                  }`}
                  style={{
                    border: '2px solid #e0dccc',
                  }}
                  aria-label={`Lọc từ bắt đầu bằng ${letter}`}
                >
                  <p 
                    className="text-[#111111]"
                    style={{
                      fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                      fontSize: selectedLetter === letter ? '24px' : '22px',
                      letterSpacing: '0.02em',
                      fontWeight: selectedLetter === letter ? '600' : '400',
                    }}
                  >
                    {letter}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fff8e7] to-transparent pointer-events-none z-20" />
        </div>

        {/* Floating Action Button (FAB) - Add New Word */}
        <button
          onClick={handleAddWord}
          className="fixed bottom-6 right-6 bg-[#d4e7f5] box-border flex items-center justify-center rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] z-30 hover:bg-[#c5dcf0] hover:shadow-xl transition-all"
          aria-label="Thêm từ mới"
        >
          <div className="relative shrink-0 size-[32px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
              <g>
                <path d="M7.5 18H28.5" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                <path d="M18 7.5V28.5" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              </g>
            </svg>
          </div>
        </button>

        {/* Add Word Popup */}
        {isAddWordPopupOpen && (
          <div className="fixed inset-0 backdrop-blur-sm bg-[#fff8e7] bg-opacity-60 z-40 flex items-center justify-center">
            <div 
              ref={popupRef}
              className="bg-[#fffcf2] rounded-3xl border-2 border-[#e0dccc] shadow-2xl p-8 w-[420px]"
            >
              <h3
                className="text-[#111111] mb-6 text-center"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '28px',
                  letterSpacing: '0.12em',
                }}
              >
                Thêm từ mới
              </h3>

              {/* Input Field */}
              <input
                type="text"
                value={newWordInput}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 15) {
                    setNewWordInput(value);
                  }
                }}
                maxLength={15}
                placeholder="Nhập từ mới..."
                autoFocus
                className="w-full bg-[#fff8e7] border-2 border-[#e0dccc] rounded-2xl px-6 py-4 mb-2 text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#d4c5a9] focus:ring-0 shadow-sm transition-all"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '24px',
                  letterSpacing: '0.12em',
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleConfirmAddWord();
                  }
                }}
              />

              {/* Character Counter */}
              <div
                className="text-right text-[#666666] mb-6"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '18px',
                }}
              >
                {newWordInput.length}/15
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                {/* Cancel Button (X) */}
                <button
                  onClick={handleCancelAddWord}
                  className="w-14 h-14 rounded-full bg-[#FAD4D4] hover:bg-[#F5BABA] border-2 border-[#F5BABA] flex items-center justify-center transition-all shadow-md hover:shadow-lg"
                  aria-label="Huỷ"
                  title="Huỷ"
                >
                  <X className="w-7 h-7 text-[#111111]" strokeWidth={3} />
                </button>

                {/* Confirm Button (✓) */}
                <button
                  onClick={handleConfirmAddWord}
                  disabled={!newWordInput.trim()}
                  className="w-14 h-14 rounded-full bg-[#D4E7F5] hover:bg-[#C5DCF0] border-2 border-[#B8D4E8] flex items-center justify-center transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Xác nhận"
                  title="Xác nhận"
                >
                  <Check className="w-8 h-8 text-[#111111]" strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Custom scrollbar styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
