import { Sidebar } from './Sidebar';
import { SpeakingToolbar } from './SpeakingToolbar';
import { QuickSettingsDrawer } from './QuickSettingsDrawer';
import { useState, useEffect, useRef } from 'react';
import { AudioRecorder } from '../utils/recording';
import { toast } from 'sonner';
import { speakText } from '../utils/textToSpeech';

interface SpeakingPageProps {
  onNavigate?: (page: 'Home' | 'Reading' | 'ReadingSelection' | 'Speaking' | 'SpeakingSelection' | 'Library' | 'SettingsOverview' | 'DisplaySettings' | 'AudioSettings' | 'OCRImport') => void;
  onSignOut?: () => void;
  isSidebarCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function SpeakingPage({ onNavigate, onSignOut, isSidebarCollapsed = false, onToggleCollapse }: SpeakingPageProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState<number[]>([]);
  const [isQuickSettingsOpen, setIsQuickSettingsOpen] = useState(false);
  const recorderRef = useRef<AudioRecorder | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Sample text split into words
  const sampleText = `Con bướm đáp nhẹ nhàng trên bông hoa đầy màu sắc. Đôi cánh của nó có màu cam và đen tươi sáng, với những hoa văn đẹp trông giống như những ô cửa sổ nhỏ. Con bướm nghỉ ở đó một lúc, tận hưởng ánh nắng ấm áp. Đột nhiên, một cơn gió nhẹ thổi qua khu vườn. Con bướm mở và khép đôi cánh từ từ, như thể nó đang chào gió. Sau đó nó bay lên bầu trời, nhảy múa giữa những đám mây. Lũ trẻ quan sát từ bên dưới, chỉ tay và mỉm cười. Chúng thích nhìn con bướm nhảy múa trên không. Đó là một ngày hè hoàn hảo.`;

  // Split text into words, preserving punctuation
  const words = sampleText.split(/(\s+)/);

  // Initialize recorder
  useEffect(() => {
    if (AudioRecorder.isSupported()) {
      recorderRef.current = new AudioRecorder({
        onError: (error) => {
          console.error('Recording error:', error);
          toast.error('Lỗi khi ghi âm. Vui lòng thử lại.');
          setIsRecording(false);
        },
      });
    } else {
      console.warn('MediaRecorder is not supported');
    }

    return () => {
      if (recorderRef.current) {
        recorderRef.current.stop().catch(() => {});
      }
    };
  }, []);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isRecording) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else {
      setSeconds(0);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRecording]);

  // Play text function
  const handlePlayText = async () => {
    if (isPlaying) return;
    
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

  // Format time as MM:SS
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleToggleRecording = async () => {
    if (!recorderRef.current) {
      toast.error('Microphone không được hỗ trợ. Vui lòng sử dụng trình duyệt khác.');
      return;
    }

    try {
      if (isRecording) {
        // Stop recording
        const audioBlob = await recorderRef.current.stop();
        setIsRecording(false);
        toast.success('Đã dừng ghi âm');
        
        // Here you would send audioBlob to backend for analysis
        console.log('Recording stopped, audio blob size:', audioBlob.size);
        
        // Simulate analysis (in real app, send to backend)
        // For now, just simulate some incorrect words
        setIncorrectWords([2, 5, 8]);
      } else {
        // Start recording
        await recorderRef.current.start();
        setIsRecording(true);
        setSeconds(0);
        setIncorrectWords([]);
        setCurrentWordIndex(0);
        toast.success('Bắt đầu ghi âm...');
      }
    } catch (error) {
      console.error('Recording error:', error);
      if (error instanceof Error) {
        if (error.message.includes('Permission')) {
          toast.error('Vui lòng cho phép truy cập microphone.');
        } else {
          toast.error('Không thể bắt đầu ghi âm. Vui lòng thử lại.');
        }
      }
      setIsRecording(false);
    }
  };

  const handleReset = async () => {
    // Stop recording if active
    if (isRecording && recorderRef.current) {
      try {
        await recorderRef.current.stop();
      } catch (error) {
        console.error('Error stopping recorder:', error);
      }
    }
    
    setIsRecording(false);
    setSeconds(0);
    setCurrentWordIndex(0);
    setIncorrectWords([]);
    
    // Replay the text
    try {
      await speakText({
        text: sampleText,
        lang: 'vi-VN',
        rate: 1.0,
      });
    } catch (error) {
      console.error('Error playing text:', error);
    }
  };

  // Get background color for a word
  const getWordBackground = (index: number) => {
    if (index === currentWordIndex) {
      return '#C9F6C9'; // Soft green for current word
    }
    if (incorrectWords.includes(index)) {
      return '#FAD4D4'; // Soft pink for incorrect words
    }
    return 'transparent';
  };

  const handleQuickSettingsToggle = () => {
    if (!isQuickSettingsOpen && !isSidebarCollapsed) {
      // Opening quick settings - collapse left sidebar
      onToggleCollapse?.();
    }
    setIsQuickSettingsOpen(!isQuickSettingsOpen);
  };

  return (
    <div className="flex h-screen bg-[#FFF8E7]">
      {/* Sidebar */}
      <Sidebar 
        activePage="Nói" 
        onNavigate={onNavigate}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={onToggleCollapse}
        onSignOut={onSignOut}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden flex flex-col h-screen">
        <div className="flex-1 flex items-center justify-center px-12 pt-8 pb-4 overflow-hidden">
          {/* Speaking Content Frame */}
          <div className="w-full max-w-4xl h-full max-h-[calc(100vh-180px)] bg-[#FFF8E7] rounded-[2rem] border-2 border-[#E8DCC8] shadow-lg p-12 overflow-y-auto relative">
            {/* Timer Display */}
            <div 
              className="absolute top-6 right-8 text-[#555555]"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '20px',
                letterSpacing: '0.02em',
              }}
            >
              {formatTime(seconds)}
            </div>

            {/* Text with word highlighting */}
            <div 
              className="text-[#111111] mx-auto"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '26px',
                lineHeight: '1.8',
                letterSpacing: '0.14em',
                maxWidth: '66ch',
                wordSpacing: '0.16em',
              }}
            >
              {words.map((word, index) => {
                // Skip rendering whitespace as separate elements
                if (word.trim() === '') {
                  return word;
                }
                
                return (
                  <span
                    key={index}
                    className="rounded-md px-1 transition-colors duration-200"
                    style={{
                      backgroundColor: getWordBackground(index),
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="pb-6 flex-shrink-0">
          <SpeakingToolbar 
            isRecording={isRecording}
            onToggleRecording={handleToggleRecording}
            onReset={handleReset}
          />
        </div>
      </main>

      {/* Quick Settings Drawer */}
      <QuickSettingsDrawer 
        isCollapsed={!isQuickSettingsOpen}
        onToggle={handleQuickSettingsToggle}
      />
    </div>
  );
}