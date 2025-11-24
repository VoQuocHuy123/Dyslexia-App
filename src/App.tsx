import { BookOpen, Mic, ArrowRight } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { ReadingPage } from './components/ReadingPage';
import { ReadingSelectionPage } from './components/ReadingSelectionPage';
import { SpeakingPage } from './components/SpeakingPage';
import { SpeakingSelectionPage } from './components/SpeakingSelectionPage';
import { LibraryPage } from './components/LibraryPage';
import { SettingsOverviewPage } from './components/SettingsOverviewPage';
import { DisplaySettingsPage } from './components/DisplaySettingsPage';
import { AudioSettingsPage } from './components/AudioSettingsPage';
import { OCRImportPage } from './components/OCRImportPage';
import { ExercisePage } from './components/ExercisePage';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { DisplaySettingsProvider } from './components/DisplaySettingsContext';
import svgPaths from './imports/svg-jkvvruu31p';

export default function App() {
  return (
    <ThemeProvider>
      <DisplaySettingsProvider>
        <AppContent />
      </DisplaySettingsProvider>
    </ThemeProvider>
  );
}

function AppContent() {
  const { themeColors } = useTheme();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [currentPage, setCurrentPage] = useState<'Home' | 'Reading' | 'ReadingSelection' | 'Speaking' | 'SpeakingSelection' | 'Library' | 'SettingsOverview' | 'DisplaySettings' | 'AudioSettings' | 'OCRImport' | 'Exercise'>('Home');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowRegister(false);
  };

  const handleRegister = () => {
    // After successful registration, log the user in
    setIsAuthenticated(true);
    setShowRegister(false);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setShowRegister(false);
    setCurrentPage('Home');
  };

  const handleNavigateToRegister = () => {
    setShowRegister(true);
  };

  const handleCancelRegister = () => {
    setShowRegister(false);
  };

  // Show register page if requested
  if (!isAuthenticated && showRegister) {
    return <RegisterPage onRegister={handleRegister} onCancel={handleCancelRegister} />;
  }

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} onNavigateToRegister={handleNavigateToRegister} />;
  }

  // Helper function to map currentPage to activePage name for sidebar
  const getActivePage = () => {
    if (currentPage === 'ReadingSelection' || currentPage === 'Reading') return 'Đọc';
    if (currentPage === 'SpeakingSelection' || currentPage === 'Speaking') return 'Nói';
    if (currentPage === 'Library') return 'Thư viện';
    if (currentPage === 'OCRImport') return 'Nhập OCR';
    if (currentPage === 'SettingsOverview' || currentPage === 'DisplaySettings' || currentPage === 'AudioSettings') return 'Cài đặt';
    if (currentPage === 'Exercise') return 'Bài tập';
    return 'Trang chủ';
  };

  if (currentPage === 'Reading') {
    return <ReadingPage onNavigate={setCurrentPage} isSidebarCollapsed={isSidebarCollapsed} onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'ReadingSelection') {
    return <ReadingSelectionPage onNavigate={setCurrentPage} isSidebarCollapsed={isSidebarCollapsed} onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'Speaking') {
    return <SpeakingPage onNavigate={setCurrentPage} isSidebarCollapsed={isSidebarCollapsed} onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'SpeakingSelection') {
    return <SpeakingSelectionPage onNavigate={setCurrentPage} isSidebarCollapsed={isSidebarCollapsed} onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'Library') {
    return <LibraryPage onNavigate={setCurrentPage} isSidebarCollapsed={isSidebarCollapsed} onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'SettingsOverview') {
    return <SettingsOverviewPage onNavigate={setCurrentPage} isSidebarCollapsed={isSidebarCollapsed} onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'DisplaySettings') {
    return <DisplaySettingsPage onNavigate={setCurrentPage} isSidebarCollapsed={isSidebarCollapsed} onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'AudioSettings') {
    return <AudioSettingsPage onNavigate={setCurrentPage} isSidebarCollapsed={isSidebarCollapsed} onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'OCRImport') {
    return <OCRImportPage onNavigate={setCurrentPage} isSidebarCollapsed={isSidebarCollapsed} onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'Exercise') {
    return <ExercisePage onNavigate={setCurrentPage} isSidebarCollapsed={isSidebarCollapsed} onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} onSignOut={handleSignOut} />;
  }

  // Sample data for the reading preview
  const readingPreview = "Con bướm đáp nhẹ nhàng trên bông hoa đầy màu sắc. Đôi cánh của nó có màu cam và đen tươi sáng...";
  
  // Sample new words from the library
  const newWords = [
    { word: "bướm", definition: "côn trùng có cánh" },
    { word: "nhẹ nhàng", definition: "mềm mại và cẩn thận" },
    { word: "màu sắc", definition: "có nhiều màu" },
  ];

  return (
    <div className="flex h-screen" style={{ backgroundColor: themeColors.appBackground }}>
      {/* Sidebar */}
      <Sidebar 
        activePage={getActivePage()} 
        onNavigate={setCurrentPage}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        onSignOut={handleSignOut}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-12 py-10">
          {/* Header */}
          <div className="mb-8">
            <h1 
              style={{
                fontFamily: "'Lexend', sans-serif",
                fontSize: '42px',
                fontWeight: '500',
                lineHeight: '1.5',
                letterSpacing: '0.12em',
                color: themeColors.textMain,
              }}
            >
              Chào mừng trở lại!
            </h1>
          </div>

          {/* Main Cards Grid */}
          <div className="grid grid-cols-2 gap-8 mb-8 flex-1">
            {/* Read Again Card */}
            <div className="rounded-[2.25rem] border-2 p-10 flex flex-col" style={{ backgroundColor: themeColors.cardBackground, borderColor: themeColors.border }}>
              {/* Icon */}
              <div className="mb-5 w-[60px] h-[60px] rounded-[16px] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: themeColors.accentMain }}>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 36 36">
                  <g>
                    <path d="M18 10.5V31.5" stroke={themeColors.textMain} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    <path d={svgPaths.p2a984c00} stroke={themeColors.textMain} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  </g>
                </svg>
              </div>

              {/* Title */}
              <h2 
                className="mb-6"
                style={{
                  fontFamily: "'Lexend', sans-serif",
                  fontSize: '28px',
                  lineHeight: '1.4',
                  letterSpacing: '0.12em',
                  color: themeColors.textMain,
                }}
              >
                Đọc lại
              </h2>

              {/* Content Box */}
              <div className="rounded-[27px] border-2 p-6 flex-1 flex flex-col justify-between" style={{ backgroundColor: themeColors.exerciseCard1, borderColor: themeColors.border }}>
                <p 
                  className="mb-4"
                  style={{
                    fontFamily: "'Lexend', sans-serif",
                    fontSize: '24px',
                    lineHeight: '1.5',
                    letterSpacing: '0.12em',
                    color: themeColors.textMain,
                  }}
                >
                  {readingPreview}
                </p>
                <button 
                  onClick={() => setCurrentPage('ReadingSelection')}
                  className="flex items-center gap-3 hover:opacity-70 transition-colors"
                  style={{
                    fontFamily: "'Lexend', sans-serif",
                    fontSize: '24px',
                    lineHeight: '1.4',
                    letterSpacing: '0.12em',
                    color: themeColors.textMain,
                  }}
                >
                  <span>Tiếp tục</span>
                  <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 23 23">
                    <g>
                      <path d="M4.6875 11.25H17.8125" stroke={themeColors.textMain} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
                      <path d={svgPaths.p9273580} stroke={themeColors.textMain} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>

            {/* Practice Speaking Card */}
            <div className="rounded-[2.25rem] border-2 p-10 flex flex-col" style={{ backgroundColor: themeColors.cardBackground, borderColor: themeColors.border }}>
              {/* Icon */}
              <div className="mb-5 w-[60px] h-[60px] rounded-[16px] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: themeColors.accentMain }}>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 36 36">
                  <g>
                    <path d="M18 28.5V33" stroke={themeColors.textMain} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    <path d={svgPaths.p785fd00} stroke={themeColors.textMain} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    <path d={svgPaths.pab21cf0} stroke={themeColors.textMain} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  </g>
                </svg>
              </div>

              {/* Title */}
              <h2 
                className="mb-6"
                style={{
                  fontFamily: "'Lexend', sans-serif",
                  fontSize: '28px',
                  lineHeight: '1.4',
                  letterSpacing: '0.12em',
                  color: themeColors.textMain,
                }}
              >
                Luyện nói
              </h2>

              {/* Sound Wave Visualization */}
              <button 
                onClick={() => setCurrentPage('SpeakingSelection')}
                className="w-full rounded-[27px] border-2 p-8 flex items-center justify-center flex-1 hover:opacity-90 transition-all"
                style={{ backgroundColor: themeColors.accentMain, borderColor: themeColors.border }}
              >
                <div className="flex items-center gap-3.5 h-[70px]">
                  <div className="w-3.5 rounded-full opacity-[0.538]" style={{ height: '38px', backgroundColor: themeColors.textMain }} />
                  <div className="w-3.5 rounded-full opacity-[0.508]" style={{ height: '68px', backgroundColor: themeColors.textMain }} />
                  <div className="w-3.5 rounded-full opacity-50" style={{ height: '50px', backgroundColor: themeColors.textMain }} />
                  <div className="w-3.5 rounded-full opacity-[0.513]" style={{ height: '70px', backgroundColor: themeColors.textMain }} />
                  <div className="w-3.5 rounded-full opacity-[0.549]" style={{ height: '36px', backgroundColor: themeColors.textMain }} />
                </div>
              </button>
            </div>
          </div>

          {/* New Words Section */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-between mb-6">
              <h2 
                style={{
                  fontFamily: "'Lexend', sans-serif",
                  fontSize: '34px',
                  fontWeight: '500',
                  lineHeight: '1.5',
                  letterSpacing: '0.12em',
                  color: themeColors.textMain,
                }}
              >
                Từ mới
              </h2>
              <button 
                onClick={() => setCurrentPage('Library')}
                className="flex items-center gap-3.5 hover:opacity-70 transition-colors"
              >
                <span
                  style={{
                    fontFamily: "'Lexend', sans-serif",
                    fontSize: '24px',
                    fontWeight: '500',
                    lineHeight: '1.4',
                    letterSpacing: '0.12em',
                    color: themeColors.textMain,
                  }}
                >
                  Xem tất cả
                </span>
                <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 23 23">
                  <g>
                    <path d="M4.6875 11.25H17.8125" stroke={themeColors.textMain} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
                    <path d={svgPaths.p9273580} stroke={themeColors.textMain} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
                  </g>
                </svg>
              </button>
            </div>

            {/* Words Carousel */}
            <div className="flex gap-6">
              {newWords.map((item, index) => (
                <div 
                  key={index}
                  className="rounded-[27px] border-2 flex-1 h-[120px] flex items-center justify-center px-9 py-7"
                  style={{ backgroundColor: themeColors.cardBackground, borderColor: themeColors.border }}
                >
                  <p 
                    style={{
                      fontFamily: "'Lexend', sans-serif",
                      fontSize: '30px',
                      lineHeight: '1.3',
                      letterSpacing: '0.14em',
                      color: themeColors.textMain,
                    }}
                  >
                    {item.word}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}