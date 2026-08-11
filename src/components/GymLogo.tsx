import React from 'react';
import logoImg from '../assets/images/ibizagym_logo_1786482341705.jpg';

interface GymLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'image' | 'vector' | 'hybrid';
  showSubtitle?: boolean;
}

export const GymLogo: React.FC<GymLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'hybrid',
  showSubtitle = true,
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-20',
  };

  if (variant === 'image') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <img
          src={logoImg}
          alt="IbizaGym Fitness Island Logo"
          className={`${sizeClasses[size]} w-auto object-contain rounded-xl border border-white/10 shadow-lg shadow-[#00C2E0]/20`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Visual Cyan Logo Emblem */}
      <div className="relative flex-shrink-0 group">
        <img
          src={logoImg}
          alt="IbizaGym Logo"
          className={`${sizeClasses[size]} w-auto object-contain rounded-xl border border-[#00C2E0]/40 shadow-lg shadow-[#00C2E0]/25 group-hover:scale-105 transition-transform duration-300`}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Styled Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline tracking-tighter uppercase font-black italic leading-none">
          <span className="text-2xl sm:text-3xl text-white drop-shadow-[0_2px_10px_rgba(0,194,224,0.3)]">
            IBIZA
          </span>
          <span className="text-2xl sm:text-3xl text-[#00C2E0] ml-1">
            GYM
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.22em] text-[#00C2E0] italic -mt-0.5">
            FITNESS ISLAND
          </span>
        )}
      </div>
    </div>
  );
};
