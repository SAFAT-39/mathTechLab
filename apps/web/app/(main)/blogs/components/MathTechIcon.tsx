import React from 'react';

interface MathTechIconProps {
  className?: string;
}

export default function MathTechIcon({ className = '' }: MathTechIconProps) {
  return (
    <svg
      className={`w-full h-full ${className}`}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill="#f3e8ff" />

      {/* Math symbols */}
      <text x="50" y="70" fontFamily="serif" fontSize="24" fill="#7e22ce">
        ∫
      </text>
      <text x="80" y="90" fontFamily="serif" fontSize="24" fill="#7e22ce">
        ∑
      </text>
      <text x="110" y="70" fontFamily="serif" fontSize="24" fill="#7e22ce">
        π
      </text>

      {/* Tech elements */}
      <rect x="60" y="110" width="20" height="20" rx="2" fill="#7e22ce" />
      <rect x="90" y="110" width="20" height="20" rx="2" fill="#7e22ce" />
      <rect x="120" y="110" width="20" height="20" rx="2" fill="#7e22ce" />

      {/* Circuit lines */}
      <path d="M70 120 L90 120" stroke="#7e22ce" strokeWidth="2" />
      <path d="M100 120 L120 120" stroke="#7e22ce" strokeWidth="2" />

      {/* Binary code */}
      <text x="60" y="150" fontFamily="monospace" fontSize="10" fill="#7e22ce">
        10101
      </text>
      <text x="100" y="150" fontFamily="monospace" fontSize="10" fill="#7e22ce">
        01010
      </text>
    </svg>
  );
} 