import { Card } from './ui/card';
import { LucideIcon } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface DashboardCardProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function DashboardCard({ title, subtitle, icon: Icon, children, onClick }: DashboardCardProps) {
  const { themeColors } = useTheme();
  
  return (
    <Card 
      className="p-10 hover:shadow-xl transition-all cursor-pointer border-2 rounded-[2rem] h-96 flex flex-col justify-between"
      style={{
        backgroundColor: themeColors.cardBackground,
        borderColor: themeColors.border,
      }}
      onClick={onClick}
    >
      <div>
        {Icon && (
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
            style={{ backgroundColor: themeColors.accentMain }}
          >
            <Icon className="w-8 h-8" style={{ color: themeColors.textMain }} />
          </div>
        )}
        <h2 style={{ color: themeColors.textMain }} className="mb-3">{title}</h2>
      </div>
      {children && <div className="mt-4">{children}</div>}
    </Card>
  );
}