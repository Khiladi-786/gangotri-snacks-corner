import React from 'react';

interface HeritageBadgeProps {
  year?: number;
  text?: string;
  className?: string;
}

export const HeritageBadge: React.FC<HeritageBadgeProps> = ({
  year = 1987,
  text = 'SINCE',
  className = ''
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-amber)]/40 bg-[var(--color-maroon)]/90 text-[var(--color-amber)] text-xs font-semibold tracking-widest uppercase shadow-md ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber)] animate-pulse" />
      <span>{text} {year}</span>
      <span className="text-[10px] opacity-70">★</span>
    </div>
  );
};
