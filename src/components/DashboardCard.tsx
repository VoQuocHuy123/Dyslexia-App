import { Card } from './ui/card';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function DashboardCard({ title, subtitle, icon: Icon, children, onClick }: DashboardCardProps) {
  return (
    <Card 
      className="p-10 hover:shadow-xl transition-all cursor-pointer border-2 border-[#E8DCC8] rounded-[2rem] bg-[#FFFCF2] h-96 flex flex-col justify-between"
      onClick={onClick}
    >
      <div>
        {Icon && (
          <div className="w-16 h-16 rounded-2xl bg-[#FFE8CC] flex items-center justify-center mb-5">
            <Icon className="w-8 h-8 text-[#111111]" />
          </div>
        )}
        <h2 className="text-[#111111] mb-3">{title}</h2>
      </div>
      {children && <div className="mt-4">{children}</div>}
    </Card>
  );
}
