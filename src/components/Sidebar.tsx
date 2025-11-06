import { Home, BookOpen, Mic, Library, FileText, Settings, User, ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { useState } from 'react';
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
  onNavigate?: (page: 'Home' | 'Reading' | 'ReadingSelection' | 'Speaking' | 'SpeakingSelection' | 'Library' | 'SettingsOverview' | 'DisplaySettings' | 'OCRImport') => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  onSignOut?: () => void;
}

export function Sidebar({ activePage, onNavigate, isCollapsed = false, onToggleCollapse, onSignOut }: SidebarProps) {
  const [showSignOutDialog, setShowSignOutDialog] = useState(false);
  const menuItems = [
    { name: 'Trang chủ', icon: Home, page: 'Home' as const },
    { name: 'Đọc', icon: BookOpen, page: 'ReadingSelection' as const },
    { name: 'Nói', icon: Mic, page: 'SpeakingSelection' as const },
    { name: 'Thư viện', icon: Library, page: 'Library' as const },
    { name: 'Nhập OCR', icon: FileText, page: 'OCRImport' as const },
    { name: 'Cài đặt', icon: Settings, page: 'SettingsOverview' as const },
  ];

  const handleNavClick = (page: 'Home' | 'Reading' | 'ReadingSelection' | 'Speaking' | 'SpeakingSelection' | 'Library' | 'SettingsOverview' | 'DisplaySettings' | 'OCRImport') => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  // If collapsed, show minimal sidebar
  if (isCollapsed) {
    return (
      <>
        {/* Collapsed Sidebar - Only Icons */}
        <aside className="w-20 bg-[#FFFCF2] border-r-2 border-[#E8DCC8] shadow-sm flex flex-col">
          {/* User Profile Icon */}
          <div className="p-4 border-b-2 border-[#E8DCC8] flex justify-center">
            <div className="w-14 h-14 bg-[#FFE8CC] rounded-full flex items-center justify-center">
              <User className="w-7 h-7 text-[#111111]" />
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
                      className={`w-full flex items-center justify-center p-4 rounded-2xl transition-all ${
                        isActive
                          ? 'bg-[#FFE8CC] text-[#111111]'
                          : 'text-[#333333] hover:bg-[#FFF8E7]'
                      }`}
                      title={item.name}
                    >
                      <Icon className={`w-8 h-8 ${isActive ? 'text-[#111111]' : 'text-[#333333]'}`} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Sign Out Button - Bottom */}
          {onSignOut && (
            <div className="p-2 border-t-2 border-[#E8DCC8]">
              <button
                onClick={() => setShowSignOutDialog(true)}
                className="w-full flex items-center justify-center p-4 rounded-2xl text-[#D32F2F] hover:bg-[#FFEBEE] transition-all"
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
            className="fixed left-20 top-6 z-50 w-10 h-10 bg-[#FFFCF2] border-2 border-[#E8DCC8] rounded-full flex items-center justify-center hover:bg-[#FFE8CC] transition-colors shadow-md"
            title="Mở rộng thanh điều hướng"
          >
            <ChevronRight className="w-5 h-5 text-[#111111]" />
          </button>
        )}
      </>
    );
  }

  // Expanded Sidebar
  return (
    <aside className="w-72 bg-[#FFFCF2] border-r-2 border-[#E8DCC8] shadow-sm flex flex-col relative">
      {/* Toggle Button - Top Right Corner */}
      {onToggleCollapse && (
        <button
          onClick={onToggleCollapse}
          className="absolute top-6 right-4 z-10 w-10 h-10 bg-[#FFE8CC] border-2 border-[#E8DCC8] rounded-full flex items-center justify-center hover:bg-[#FFDDB3] transition-colors"
          title="Thu gọn thanh điều hướng"
        >
          <ChevronLeft className="w-5 h-5 text-[#111111]" />
        </button>
      )}

      {/* User Profile Section */}
      <div className="p-6 border-b-2 border-[#E8DCC8]">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-[#FFE8CC] rounded-full flex items-center justify-center">
            <User className="w-9 h-9 text-[#111111]" />
          </div>
          <div>
            <h3 
              className="text-[#111111]"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '20px',
                letterSpacing: '0.02em',
              }}
            >
              Sam Anderson
            </h3>
            <p 
              className="text-[#666666]"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '18px',
                letterSpacing: '0.02em',
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
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
                    isActive
                      ? 'bg-[#FFE8CC] text-[#111111]'
                      : 'text-[#333333] hover:bg-[#FFF8E7]'
                  }`}
                  style={{
                    fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                    fontSize: '22px',
                    letterSpacing: '0.02em',
                  }}
                >
                  <Icon className={`w-9 h-9 ${isActive ? 'text-[#111111]' : 'text-[#333333]'}`} />
                  <span>{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sign Out Button - Bottom */}
      {onSignOut && (
        <div className="p-4 border-t-2 border-[#E8DCC8]">
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
        <AlertDialogContent className="bg-[#FFFCF2] border-2 border-[#E8DCC8] rounded-3xl shadow-xl max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle 
              className="text-[#111111] text-center"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '28px',
                letterSpacing: '0.12em',
              }}
            >
              Xác nhận đăng xuất
            </AlertDialogTitle>
            <AlertDialogDescription 
              className="text-[#666666] text-center"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '24px',
                letterSpacing: '0.12em',
              }}
            >
              Bạn có chắc chắn muốn đăng xuất khỏi ứng dụng không?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-row gap-4 justify-center sm:justify-center">
            <AlertDialogCancel 
              className="bg-[#FFFCF2] border-2 border-[#E0DCCC] text-[#111111] hover:bg-[#FFF4E0] rounded-2xl px-8 py-4 shadow-sm m-0"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '24px',
                letterSpacing: '0.12em',
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
