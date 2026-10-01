import React from 'react';

interface HeritageDividerProps {
  color?: string;
  accentColor?: string;
  className?: string;
}

export const HeritageDivider: React.FC<HeritageDividerProps> = ({
  color = '#FFFFFF',
  accentColor = '#A03E26',
  className = ''
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none py-1 ${className}`} aria-hidden="true">
      <svg
        className="w-full h-6 block"
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="roofLace" width="40" height="24" patternUnits="userSpaceOnUse">
            {/* Triangular scallop repeating lace roof pattern */}
            <path
              d="M0 0 L20 18 L40 0 H0 Z"
              fill={color}
              stroke={accentColor}
              strokeWidth="0.8"
              strokeOpacity="0.4"
            />
            {/* Small traditional ornamental dot */}
            <circle cx="20" cy="7" r="2" fill={accentColor} />
            <circle cx="20" cy="13" r="1" fill={color} />
          </pattern>
        </defs>
        <rect width="1200" height="24" fill="url(#roofLace)" />
      </svg>
    </div>
  );
};
