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
import svgPaths from './imports/svg-jkvvruu31p';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [currentPage, setCurrentPage] = useState<'Home' | 'Reading' | 'ReadingSelection' | 'Speaking' | 'SpeakingSelection' | 'Library' | 'SettingsOverview' | 'DisplaySettings' | 'AudioSettings' | 'OCRImport'>('Home');
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

  // Sample data for the reading preview
  const readingPreview = "Con bướm đáp nhẹ nhàng trên bông hoa đầy màu sắc. Đôi cánh của nó có màu cam và đen tươi sáng...";
  
  // Sample new words from the library
  const newWords = [
    { word: "bướm", definition: "côn trùng có cánh" },
    { word: "nhẹ nhàng", definition: "mềm mại và cẩn thận" },
    { word: "màu sắc", definition: "có nhiều màu" },
  ];

  return (
    <div className="flex h-screen bg-[#FFF8E7]">
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
              className="text-[#111111]"
              style={{
                fontFamily: "'Lexend', sans-serif",
                fontSize: '42px',
                fontWeight: '500',
                lineHeight: '1.5',
                letterSpacing: '0.12em',
              }}
            >
              Chào mừng trở lại!
            </h1>
          </div>

          {/* Main Cards Grid */}
          <div className="grid grid-cols-2 gap-8 mb-8 flex-1">
            {/* Read Again Card */}
            <div className="bg-[#FFFCF2] rounded-[2.25rem] border-2 border-[#E8DCC8] p-10 flex flex-col">
              {/* Icon */}
              <div className="mb-5 w-[60px] h-[60px] bg-[#FFE8CC] rounded-[16px] flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 36 36">
                  <g>
                    <path d="M18 10.5V31.5" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    <path d={svgPaths.p2a984c00} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  </g>
                </svg>
              </div>

              {/* Title */}
              <h2 
                className="text-[#111111] mb-6"
                style={{
                  fontFamily: "'Lexend', sans-serif",
                  fontSize: '28px',
                  lineHeight: '1.4',
                  letterSpacing: '0.12em',
                }}
              >
                Đọc lại
              </h2>

              {/* Content Box */}
              <div className="bg-[#FFF4E0] rounded-[27px] border-2 border-[#E8DCC8] p-6 flex-1 flex flex-col justify-between">
                <p 
                  className="text-[#111111] mb-4"
                  style={{
                    fontFamily: "'Lexend', sans-serif",
                    fontSize: '24px',
                    lineHeight: '1.5',
                    letterSpacing: '0.12em',
                  }}
                >
                  {readingPreview}
                </p>
                <button 
                  onClick={() => setCurrentPage('ReadingSelection')}
                  className="flex items-center gap-3 text-[#111111] hover:text-[#333333] transition-colors"
                  style={{
                    fontFamily: "'Lexend', sans-serif",
                    fontSize: '24px',
                    lineHeight: '1.4',
                    letterSpacing: '0.12em',
                  }}
                >
                  <span>Tiếp tục</span>
                  <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 23 23">
                    <g>
                      <path d="M4.6875 11.25H17.8125" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
                      <path d={svgPaths.p9273580} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>

            {/* Practice Speaking Card */}
            <div className="bg-[#FFFCF2] rounded-[2.25rem] border-2 border-[#E8DCC8] p-10 flex flex-col">
              {/* Icon */}
              <div className="mb-5 w-[60px] h-[60px] bg-[#FFE8CC] rounded-[16px] flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 36 36">
                  <g>
                    <path d="M18 28.5V33" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    <path d={svgPaths.p785fd00} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    <path d={svgPaths.pab21cf0} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  </g>
                </svg>
              </div>

              {/* Title */}
              <h2 
                className="text-[#111111] mb-6"
                style={{
                  fontFamily: "'Lexend', sans-serif",
                  fontSize: '28px',
                  lineHeight: '1.4',
                  letterSpacing: '0.12em',
                }}
              >
                Luyện nói
              </h2>

              {/* Sound Wave Visualization */}
              <button 
                onClick={() => setCurrentPage('SpeakingSelection')}
                className="w-full bg-[#FFE8CC] rounded-[27px] border-2 border-[#E8DCC8] p-8 flex items-center justify-center flex-1 hover:bg-[#FFE0B8] transition-colors"
              >
                <div className="flex items-center gap-3.5 h-[70px]">
                  <div className="w-3.5 bg-[#111111] rounded-full opacity-[0.538]" style={{ height: '38px' }} />
                  <div className="w-3.5 bg-[#111111] rounded-full opacity-[0.508]" style={{ height: '68px' }} />
                  <div className="w-3.5 bg-[#111111] rounded-full opacity-50" style={{ height: '50px' }} />
                  <div className="w-3.5 bg-[#111111] rounded-full opacity-[0.513]" style={{ height: '70px' }} />
                  <div className="w-3.5 bg-[#111111] rounded-full opacity-[0.549]" style={{ height: '36px' }} />
                </div>
              </button>
            </div>
          </div>

          {/* New Words Section */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-between mb-6">
              <h2 
                className="text-[#111111]"
                style={{
                  fontFamily: "'Lexend', sans-serif",
                  fontSize: '34px',
                  fontWeight: '500',
                  lineHeight: '1.5',
                  letterSpacing: '0.12em',
                }}
              >
                Từ mới
              </h2>
              <button 
                onClick={() => setCurrentPage('Library')}
                className="flex items-center gap-3.5 text-[#111111] hover:text-[#333333] transition-colors"
              >
                <span
                  style={{
                    fontFamily: "'Lexend', sans-serif",
                    fontSize: '24px',
                    fontWeight: '500',
                    lineHeight: '1.4',
                    letterSpacing: '0.12em',
                  }}
                >
                  Xem tất cả
                </span>
                <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 23 23">
                  <g>
                    <path d="M4.6875 11.25H17.8125" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
                    <path d={svgPaths.p9273580} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
                  </g>
                </svg>
              </button>
            </div>

            {/* Words Carousel */}
            <div className="flex gap-6">
              {newWords.map((item, index) => (
                <div 
                  key={index}
                  className="bg-[#FFFCF2] rounded-[27px] border-2 border-[#E8DCC8] flex-1 h-[120px] flex items-center justify-center px-9 py-7"
                >
                  <p 
                    className="text-[#111111]"
                    style={{
                      fontFamily: "'Lexend', sans-serif",
                      fontSize: '30px',
                      lineHeight: '1.3',
                      letterSpacing: '0.14em',
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