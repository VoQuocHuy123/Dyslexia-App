import { useState } from 'react';
import svgPaths from '../imports/svg-3zpfms6l7d';
import { useTheme } from './ThemeContext';

interface LoginPageProps {
  onLogin: () => void;
  onNavigateToRegister?: () => void;
}

export function LoginPage({ onLogin, onNavigateToRegister }: LoginPageProps) {
  const { themeColors } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simple validation - in real app, this would connect to authentication service
    if (username.trim() && password.trim()) {
      onLogin();
    }
  };

  const handleSignUp = () => {
    if (onNavigateToRegister) {
      onNavigateToRegister();
    }
  };

  return (
    <div className="relative size-full overflow-hidden flex items-center justify-center" style={{ backgroundColor: themeColors.appBackground }}>
      <div className="flex flex-col items-center" style={{ transform: 'scale(0.7)', transformOrigin: 'center' }}>
        <div className="box-border content-stretch flex flex-col gap-[58px] items-center">
          {/* Header with Icon and Title */}
          <div className="h-[260px] relative shrink-0 w-[756px]">
            {/* Icon Container */}
            <div className="absolute left-[306px] rounded-[32px] size-[144px] top-0" style={{ backgroundColor: themeColors.accentMain }}>
              <div className="absolute left-[36px] size-[72px] top-[36px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
                  <g>
                    <path d="M36 21V63" stroke={themeColors.textMain} strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
                    <path d={svgPaths.p2a107470} stroke={themeColors.textMain} strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
                  </g>
                </svg>
              </div>
            </div>
            {/* Heading */}
            <div className="absolute h-[62.391px] left-0 top-[180px] w-[756px]">
              <p 
                className="absolute font-['Lexend',sans-serif] font-medium leading-[62.4px] left-[378.34px] text-[48px] text-center text-nowrap top-0 tracking-[5.76px] translate-x-[-50%] whitespace-pre"
                style={{ color: themeColors.textMain }}
              >
                Ứng dụng Đọc
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="h-[703px] relative shrink-0 w-[777px]">
            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={!username.trim() || !password.trim()}
              className="absolute h-[97px] left-[calc(50%+0.5px)] rounded-[27px] top-[479px] translate-x-[-50%] w-[480px] transition-all hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: 'white' }}
            >
              <div className="h-[97px] overflow-clip relative rounded-[inherit] w-[480px]">
                <p className="absolute font-['Lexend',sans-serif] font-normal leading-[normal] left-1/2 text-[40px] text-center text-nowrap top-[calc(50%-24.5px)] tracking-[3.12px] translate-x-[-50%] whitespace-pre" style={{ color: themeColors.textMuted }}>
                  Đăng Nhập
                </p>
              </div>
              <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[27px]" style={{ borderColor: themeColors.border }} />
            </button>

            {/* Sign Up Button */}
            <button
              onClick={handleSignUp}
              className="absolute h-[97px] left-[calc(50%+0.5px)] rounded-[27px] top-[600px] translate-x-[-50%] w-[480px] transition-all hover:shadow-md"
              style={{ backgroundColor: 'white' }}
            >
              <div className="h-[97px] overflow-clip relative rounded-[inherit] w-[480px]">
                <p className="absolute font-['Lexend',sans-serif] font-normal leading-[normal] left-1/2 text-[40px] text-center text-nowrap top-[calc(50%-24.5px)] tracking-[3.12px] translate-x-[-50%] whitespace-pre" style={{ color: themeColors.textMuted }}>
                  Đăng Ký
                </p>
              </div>
              <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[27px]" style={{ borderColor: themeColors.border }} />
            </button>

            {/* Form Container */}
            <div className="absolute box-border content-stretch flex flex-col gap-[36px] h-[455px] items-start left-[0.5px] pb-[2px] pt-[56px] px-[56px] rounded-[40.5px] top-[-0.39px] w-[777px]" style={{ backgroundColor: themeColors.cardBackground }}>
              <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[40.5px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" style={{ borderColor: themeColors.border }} />
              
              {/* Username Field */}
              <div className="content-stretch flex flex-col gap-[18px] h-[157px] items-start relative shrink-0 w-full">
                <div className="h-[42px] relative shrink-0 w-full">
                  <p className="absolute font-['Lexend',sans-serif] font-normal leading-[42px] left-0 text-[42px] text-nowrap top-[-1px] tracking-[3.36px] whitespace-pre" style={{ color: themeColors.textMain }}>
                    Tên đăng nhập
                  </p>
                </div>
                <div className="h-[97px] relative rounded-[27px] shrink-0 w-full" style={{ backgroundColor: themeColors.cardBackground }}>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Nhập tên của bạn"
                    className="box-border flex h-[97px] items-center px-[36px] py-[27px] w-full bg-transparent font-['Lexend',sans-serif] font-normal text-[26px] tracking-[3.12px] focus:outline-none rounded-[27px]"
                    style={{ 
                      color: themeColors.textMain,
                    }}
                  />
                  <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[27px]" style={{ borderColor: themeColors.border }} />
                </div>
              </div>

              {/* Password Field */}
              <div className="content-stretch flex flex-col gap-[18px] h-[157px] items-start relative shrink-0 w-full">
                <div className="h-[42px] relative shrink-0 w-full">
                  <p className="absolute font-['Lexend',sans-serif] font-normal leading-[42px] left-0 text-[42px] text-nowrap top-[-1px] tracking-[3.36px] whitespace-pre" style={{ color: themeColors.textMain }}>
                    Mật khẩu
                  </p>
                </div>
                <div className="h-[97px] relative rounded-[27px] shrink-0 w-full" style={{ backgroundColor: themeColors.cardBackground }}>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu"
                    className="box-border flex h-[97px] items-center px-[36px] py-[27px] w-full bg-transparent font-['Lexend',sans-serif] font-normal text-[26px] tracking-[3.12px] focus:outline-none rounded-[27px]"
                    style={{ 
                      color: themeColors.textMain,
                    }}
                  />
                  <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[27px]" style={{ borderColor: themeColors.border }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}