import { Home, BookOpen, Mic, Library, FileText, Settings, User, ChevronLeft, ChevronRight, LogOut, PenTool } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeContext';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';

interface SidebarProps {
  activePage: string;
  onNavigate?: (page: 'Home' | 'Reading' | 'ReadingSelection' | 'Speaking' | 'SpeakingSelection' | 'Library' | 'SettingsOverview' | 'DisplaySettings' | 'OCRImport' | 'Exercise') => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  onSignOut?: () => void;
}

export function Sidebar({ activePage, onNavigate, isCollapsed = false, onToggleCollapse, onSignOut }: SidebarProps) {
  const { themeColors } = useTheme();
  const [showSignOutDialog, setShowSignOutDialog] = useState(false);
  const menuItems = [
    { name: 'Trang chủ', icon: Home, page: 'Home' as const },
    { name: 'Đọc', icon: BookOpen, page: 'ReadingSelection' as const },
    { name: 'Nói', icon: Mic, page: 'SpeakingSelection' as const },
    { name: 'Bài tập', icon: PenTool, page: 'Exercise' as const },
    { name: 'Thư viện', icon: Library, page: 'Library' as const },
    { name: 'Nhập OCR', icon: FileText, page: 'OCRImport' as const },
    { name: 'Cài đặt', icon: Settings, page: 'SettingsOverview' as const },
  ];

  const handleNavClick = (page: 'Home' | 'Reading' | 'ReadingSelection' | 'Speaking' | 'SpeakingSelection' | 'Library' | 'SettingsOverview' | 'DisplaySettings' | 'OCRImport' | 'Exercise') => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  // If collapsed, show minimal sidebar
  if (isCollapsed) {
    return (
      <>
        {/* Collapsed Sidebar - Only Icons */}
        <aside className="w-20 border-r-2 shadow-sm flex flex-col" style={{ backgroundColor: themeColors.sidebarBackground, borderColor: themeColors.border }}>
          {/* User Profile Icon */}
          <div className="p-4 border-b-2 flex justify-center" style={{ borderColor: themeColors.border }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: themeColors.accentMain }}>
              <User className="w-7 h-7" style={{ color: themeColors.textMain }} />
            </div>
          </div>

          {/* Navigation Menu - Icons Only */}
          <nav className="flex-1 p-2">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const isActive = activePage === item.name;
                const Icon = item.icon;
                
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavClick(item.page)}
                      className="w-full flex items-center justify-center p-4 rounded-2xl transition-all"
                      style={{
                        backgroundColor: isActive ? themeColors.accentMain : 'transparent',
                        color: themeColors.textMain,
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = themeColors.cardBackground;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                      title={item.name}
                    >
                      <Icon className="w-8 h-8" style={{ color: themeColors.textMain }} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Sign Out Button - Bottom */}
          {onSignOut && (
            <div className="p-2 border-t-2" style={{ borderColor: themeColors.border }}>
              <button
                onClick={() => setShowSignOutDialog(true)}
                className="w-full flex items-center justify-center p-4 rounded-2xl transition-all"
                style={{
                  color: '#D32F2F',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFEBEE';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                title="Đăng xuất"
              >
                <LogOut className="w-8 h-8" />
              </button>
            </div>
          )}
        </aside>

        {/* Expand Button - Fixed on the left side */}
        {onToggleCollapse && (
          <button
            onClick={onToggleCollapse}
            className="fixed left-20 top-6 z-50 w-10 h-10 border-2 rounded-full flex items-center justify-center transition-colors shadow-md"
            style={{
              backgroundColor: themeColors.cardBackground,
              borderColor: themeColors.border,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = themeColors.accentMain;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = themeColors.cardBackground;
            }}
            title="Mở rộng thanh điều hướng"
          >
            <ChevronRight className="w-5 h-5" style={{ color: themeColors.textMain }} />
          </button>
        )}
      </>
    );
  }

  // Expanded Sidebar
  return (
    <aside className="w-72 border-r-2 shadow-sm flex flex-col relative" style={{ backgroundColor: themeColors.sidebarBackground, borderColor: themeColors.border }}>
      {/* Toggle Button - Top Right Corner */}
      {onToggleCollapse && (
        <button
          onClick={onToggleCollapse}
          className="absolute top-6 right-4 z-10 w-10 h-10 border-2 rounded-full flex items-center justify-center hover:opacity-80 transition-colors"
          style={{
            backgroundColor: themeColors.accentMain,
            borderColor: themeColors.border,
          }}
          title="Thu gọn thanh điều hướng"
        >
          <ChevronLeft className="w-5 h-5" style={{ color: themeColors.textMain }} />
        </button>
      )}

      {/* User Profile Section */}
      <div className="p-6 border-b-2" style={{ borderColor: themeColors.border }}>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: themeColors.accentMain }}>
            <User className="w-9 h-9" style={{ color: themeColors.textMain }} />
          </div>
          <div>
            <h3 
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '20px',
                letterSpacing: '0.02em',
                color: themeColors.textMain,
              }}
            >
              Sam Anderson
            </h3>
            <p 
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '18px',
                letterSpacing: '0.02em',
                color: themeColors.textMuted,
              }}
            >
              Cấp độ 3
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = activePage === item.name;
            const Icon = item.icon;
            
            return (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item.page)}
                  className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all"
                  style={{
                    fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                    fontSize: '22px',
                    letterSpacing: '0.02em',
                    backgroundColor: isActive ? themeColors.accentMain : 'transparent',
                    color: isActive ? themeColors.textMain : themeColors.textSecondary,
                  }}
                >
                  <Icon className="w-9 h-9" style={{ color: isActive ? themeColors.textMain : themeColors.textSecondary }} />
                  <span>{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sign Out Button - Bottom */}
      {onSignOut && (
        <div className="p-4 border-t-2" style={{ borderColor: themeColors.border }}>
          <button
            onClick={() => setShowSignOutDialog(true)}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-[#D32F2F] hover:bg-[#FFEBEE] transition-all"
            style={{
              fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
              fontSize: '22px',
              letterSpacing: '0.02em',
            }}
          >
            <LogOut className="w-9 h-9" />
            <span>Đăng xuất</span>
          </button>
        </div>
      )}

      {/* Sign Out Confirmation Dialog */}
      <AlertDialog open={showSignOutDialog} onOpenChange={setShowSignOutDialog}>
        <AlertDialogContent className="border-2 rounded-3xl shadow-xl max-w-md" style={{ backgroundColor: themeColors.sidebarBackground, borderColor: themeColors.border }}>
          <AlertDialogHeader>
            <AlertDialogTitle 
              className="text-center"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '28px',
                letterSpacing: '0.12em',
                color: themeColors.textMain,
              }}
            >
              Xác nhận đăng xuất
            </AlertDialogTitle>
            <AlertDialogDescription 
              className="text-center"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '24px',
                letterSpacing: '0.12em',
                color: themeColors.textMuted,
              }}
            >
              Bạn có chắc chắn muốn đăng xuất khỏi ứng dụng không?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-row gap-4 justify-center sm:justify-center">
            <AlertDialogCancel 
              className="border-2 rounded-2xl px-8 py-4 shadow-sm m-0 hover:opacity-80"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '24px',
                letterSpacing: '0.12em',
                backgroundColor: themeColors.cardBackground,
                borderColor: themeColors.border,
                color: themeColors.textMain,
              }}
            >
              Không
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => {
                setShowSignOutDialog(false);
                onSignOut?.();
              }}
              className="bg-[#D32F2F] border-2 border-[#B71C1C] text-white hover:bg-[#B71C1C] rounded-2xl px-8 py-4 shadow-sm"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '24px',
                letterSpacing: '0.12em',
              }}
            >
              Có
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </aside>
  );
}