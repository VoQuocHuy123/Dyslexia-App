import { useState } from 'react';
import svgPaths from '../imports/svg-3zpfms6l7d';
import { useTheme } from './ThemeContext';

interface RegisterPageProps {
  onRegister: () => void;
  onCancel: () => void;
}

export function RegisterPage({ onRegister, onCancel }: RegisterPageProps) {
  const { themeColors } = useTheme();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleRegister = () => {
    // Validation
    if (!fullName.trim() || !username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim() || !birthDate) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    if (password !== confirmPassword) {
      alert('Mật khẩu không khớp');
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Email không hợp lệ');
      return;
    }

    // In real app, this would connect to registration service
    console.log('Registering user:', { fullName, username, email, birthDate });
    onRegister();
  };

  return (
    <div className="relative size-full overflow-hidden flex items-center justify-center" style={{ backgroundColor: themeColors.appBackground }}>
      <div className="flex flex-col items-center pt-12" style={{ transform: 'scale(0.7)', transformOrigin: 'center' }}>
        <div className="box-border content-stretch flex flex-col gap-[100px] items-center">
          {/* Header with Icon and Title */}
          <div className="h-[180px] relative shrink-0 w-[1000px]">
            {/* Icon Container */}
            <div className="absolute left-[428px] rounded-[32px] size-[144px] top-0" style={{ backgroundColor: themeColors.accentMain }}>
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
            <div className="absolute h-[52px] left-0 top-[156px] w-[1000px]">
              <p className="absolute font-['Lexend',sans-serif] font-medium leading-[52px] left-1/2 text-[42px] text-center text-nowrap top-0 tracking-[5.04px] translate-x-[-50%] whitespace-pre" style={{ color: themeColors.textMain }}>
                Đăng Ký Tài Khoản
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative shrink-0 w-[1000px]">
            {/* Form Container */}
            <div className="box-border pb-[48px] pt-[48px] px-[48px] rounded-[40.5px] w-[1000px] relative" style={{ backgroundColor: themeColors.cardBackground }}>
              <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[40.5px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" style={{ borderColor: themeColors.border }} />
              
              {/* Two Column Grid */}
              <div className="grid grid-cols-2 gap-x-10 gap-y-7 relative">
                {/* Full Name Field */}
                <div className="content-stretch flex flex-col gap-[18px] items-start">
                  <div className="h-[42px] relative shrink-0 w-full">
                    <p className="font-['Lexend',sans-serif] font-normal leading-[42px] text-[42px] text-nowrap tracking-[3.36px] whitespace-pre" style={{ color: themeColors.textMain }}>
                      Tên người dùng
                    </p>
                  </div>
                  <div className="h-[97px] relative rounded-[27px] shrink-0 w-full" style={{ backgroundColor: themeColors.cardBackground }}>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Nhập họ và tên"
                      className="box-border flex h-[97px] items-center px-[36px] py-[27px] w-full bg-transparent font-['Lexend',sans-serif] font-normal text-[26px] tracking-[3.12px] focus:outline-none rounded-[27px]"
                      style={{ color: themeColors.textMain }}
                    />
                    <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[27px]" style={{ borderColor: themeColors.border }} />
                  </div>
                </div>

                {/* Username Field */}
                <div className="content-stretch flex flex-col gap-[18px] items-start">
                  <div className="h-[42px] relative shrink-0 w-full">
                    <p className="font-['Lexend',sans-serif] font-normal leading-[42px] text-[42px] text-nowrap tracking-[3.36px] whitespace-pre" style={{ color: themeColors.textMain }}>
                      Tên đăng nhập
                    </p>
                  </div>
                  <div className="h-[97px] relative rounded-[27px] shrink-0 w-full" style={{ backgroundColor: themeColors.cardBackground }}>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Nhập tên đăng nhập"
                      className="box-border flex h-[97px] items-center px-[36px] py-[27px] w-full bg-transparent font-['Lexend',sans-serif] font-normal text-[26px] tracking-[3.12px] focus:outline-none rounded-[27px]"
                      style={{ color: themeColors.textMain }}
                    />
                    <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[27px]" style={{ borderColor: themeColors.border }} />
                  </div>
                </div>

                {/* Email Field */}
                <div className="content-stretch flex flex-col gap-[18px] items-start">
                  <div className="h-[42px] relative shrink-0 w-full">
                    <p className="font-['Lexend',sans-serif] font-normal leading-[42px] text-[42px] text-nowrap tracking-[3.36px] whitespace-pre" style={{ color: themeColors.textMain }}>
                      Email
                    </p>
                  </div>
                  <div className="h-[97px] relative rounded-[27px] shrink-0 w-full" style={{ backgroundColor: themeColors.cardBackground }}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Nhập địa chỉ email"
                      className="box-border flex h-[97px] items-center px-[36px] py-[27px] w-full bg-transparent font-['Lexend',sans-serif] font-normal text-[26px] tracking-[3.12px] focus:outline-none rounded-[27px]"
                      style={{ color: themeColors.textMain }}
                    />
                    <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[27px]" style={{ borderColor: themeColors.border }} />
                  </div>
                </div>

                {/* Birth Date Field */}
                <div className="content-stretch flex flex-col gap-[18px] items-start">
                  <div className="h-[42px] relative shrink-0 w-full">
                    <p className="font-['Lexend',sans-serif] font-normal leading-[42px] text-[42px] text-nowrap tracking-[3.36px] whitespace-pre" style={{ color: themeColors.textMain }}>
                      Ngày sinh
                    </p>
                  </div>
                  <div className="h-[97px] relative rounded-[27px] shrink-0 w-full" style={{ backgroundColor: themeColors.cardBackground }}>
                    <input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="box-border flex h-[97px] items-center px-[36px] py-[27px] w-full bg-transparent font-['Lexend',sans-serif] font-normal text-[26px] tracking-[3.12px] focus:outline-none rounded-[27px]"
                      style={{ color: themeColors.textMain }}
                    />
                    <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[27px]" style={{ borderColor: themeColors.border }} />
                  </div>
                </div>

                {/* Password Field */}
                <div className="content-stretch flex flex-col gap-[18px] items-start">
                  <div className="h-[42px] relative shrink-0 w-full">
                    <p className="font-['Lexend',sans-serif] font-normal leading-[42px] text-[42px] text-nowrap tracking-[3.36px] whitespace-pre" style={{ color: themeColors.textMain }}>
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
                      style={{ color: themeColors.textMain }}
                    />
                    <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[27px]" style={{ borderColor: themeColors.border }} />
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div className="content-stretch flex flex-col gap-[18px] items-start">
                  <div className="h-[42px] relative shrink-0 w-full">
                    <p className="font-['Lexend',sans-serif] font-normal leading-[42px] text-[42px] text-nowrap tracking-[3.36px] whitespace-pre" style={{ color: themeColors.textMain }}>
                      Nhập lại mật khẩu
                    </p>
                  </div>
                  <div className="h-[97px] relative rounded-[27px] shrink-0 w-full" style={{ backgroundColor: themeColors.cardBackground }}>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Nhập lại mật khẩu"
                      className="box-border flex h-[97px] items-center px-[36px] py-[27px] w-full bg-transparent font-['Lexend',sans-serif] font-normal text-[26px] tracking-[3.12px] focus:outline-none rounded-[27px]"
                      style={{ color: themeColors.textMain }}
                    />
                    <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[27px]" style={{ borderColor: themeColors.border }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-6 justify-center mt-12">
              {/* Cancel Button */}
              <button
                onClick={onCancel}
                className="h-[97px] rounded-[27px] w-[240px] transition-all hover:shadow-md relative"
                style={{ backgroundColor: 'white' }}
              >
                <div className="h-[97px] overflow-clip relative rounded-[inherit] w-[240px]">
                  <p className="absolute font-['Lexend',sans-serif] font-normal leading-[normal] left-1/2 text-[40px] text-center text-nowrap top-[calc(50%-24.5px)] tracking-[3.12px] translate-x-[-50%] whitespace-pre" style={{ color: themeColors.textMuted }}>
                    Huỷ
                  </p>
                </div>
                <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[27px]" style={{ borderColor: themeColors.border }} />
              </button>

              {/* Register Button */}
              <button
                onClick={handleRegister}
                disabled={!fullName.trim() || !username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim() || !birthDate}
                className="h-[97px] rounded-[27px] w-[240px] transition-all hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed relative"
                style={{ 
                  backgroundColor: '#D4E7F5',
                  borderColor: '#B8D4E8',
                }}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.disabled) {
                    e.currentTarget.style.backgroundColor = '#C5DCF0';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.disabled) {
                    e.currentTarget.style.backgroundColor = '#D4E7F5';
                  }
                }}
              >
                <div className="h-[97px] overflow-clip relative rounded-[inherit] w-[240px]">
                  <p className="absolute font-['Lexend',sans-serif] font-normal leading-[normal] left-1/2 text-[40px] text-center text-nowrap top-[calc(50%-24.5px)] tracking-[3.12px] translate-x-[-50%] whitespace-pre" style={{ color: themeColors.textMain }}>
                    Xác nhận
                  </p>
                </div>
                <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[27px]" style={{ borderColor: '#B8D4E8' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
