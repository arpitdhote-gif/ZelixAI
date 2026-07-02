import React from "react";

/**
 * Geometric ZelixAI Logo Icon
 * Modern minimalistic design with quarter-circle elements
 * Primary usage: Hero section, favicon, decorative elements
 */
export function ZelixLogoIcon({ className = "w-10 h-10", ariaLabel = "ZelixAI logo" }: { className?: string; ariaLabel?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
      role="img"
    >
      {/* Main "Z" geometry using quarter-circle segments */}
      {/* Top-left quarter circle */}
      <path
        d="M 20 20 Q 50 20 50 50"
        stroke="#192153"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Diagonal connecting line - representing the "Z" stroke */}
      <line
        x1="50"
        y1="50"
        x2="70"
        y2="70"
        stroke="#BA905E"
        strokeWidth="12"
        strokeLinecap="round"
      />
      
      {/* Bottom-right quarter circle */}
      <path
        d="M 70 70 Q 100 100 100 100"
        stroke="#192153"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Accent quarter-circle (premium feel) */}
      <path
        d="M 100 20 Q 70 20 70 50"
        stroke="#B1D2FA"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
}

/**
 * Horizontal ZelixAI Logo with Typography
 * For header and brand applications
 */
export function ZelixLogoHorizontal({ className = "h-10", textClassName = "text-[#192153]", ariaLabel = "ZelixAI" }: { className?: string; textClassName?: string; ariaLabel?: string }) {
  return (
    <svg
      viewBox="0 0 280 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
      role="img"
      style={{ aspectRatio: "280 / 80" }}
    >
      {/* Logo Icon (scaled) */}
      <g transform="translate(10, 10)">
        {/* Top-left quarter circle */}
        <path
          d="M 8 8 Q 20 8 20 20"
          stroke="#192153"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Diagonal line */}
        <line
          x1="20"
          y1="20"
          x2="28"
          y2="28"
          stroke="#BA905E"
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* Bottom-right quarter circle */}
        <path
          d="M 28 28 Q 40 40 40 40"
          stroke="#192153"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Accent quarter-circle */}
        <path
          d="M 40 8 Q 28 8 28 20"
          stroke="#B1D2FA"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
      </g>

      {/* Typography - "ZELIX AI" */}
      <g>
        {/* "ZELIX" text using geometric font approximation */}
        <text x="70" y="50" fontSize="28" fontWeight="900" fill="#192153" fontFamily="Inter, sans-serif" letterSpacing="2">
          ZELIX
        </text>
        
        {/* "AI" with accent color */}
        <text x="210" y="50" fontSize="28" fontWeight="900" fill="#BA905E" fontFamily="Inter, sans-serif" letterSpacing="1">
          AI
        </text>
      </g>
    </svg>
  );
}

/**
 * Compact Logo Icon (for small displays, tabs, buttons)
 */
export function ZelixLogoCompact({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ZelixAI"
      role="img"
    >
      {/* Simplified quarter-circle Z */}
      <circle cx="32" cy="16" r="12" stroke="#192153" strokeWidth="3" fill="none" opacity="0.4" />
      <path
        d="M 20 12 Q 32 12 32 24"
        stroke="#192153"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <line x1="32" y1="24" x2="44" y2="36" stroke="#BA905E" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M 44 36 Q 52 44 52 52"
        stroke="#192153"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * Watermark Logo - Large semi-transparent background element
 * For decorative section backgrounds
 */
export function ZelixWatermark({ className = "absolute -z-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "600px", height: "600px", opacity: 0.03 }}
      aria-hidden="true"
    >
      {/* Giant quarter-circle Z */}
      <path
        d="M 80 80 Q 200 80 200 200"
        stroke="#192153"
        strokeWidth="60"
        strokeLinecap="round"
        fill="none"
      />
      <line
        x1="200"
        y1="200"
        x2="280"
        y2="280"
        stroke="#BA905E"
        strokeWidth="60"
        strokeLinecap="round"
      />
      <path
        d="M 280 280 Q 400 400 400 400"
        stroke="#192153"
        strokeWidth="60"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * Quarter-Circle Accent Element
 * Reusable decorative component for cards, sections, buttons
 */
export function QuarterCircleAccent({
  position = "top-right",
  size = "w-16 h-16",
  color = "bg-[#BA905E]",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: string;
  color?: string;
}) {
  const positionClasses = {
    "top-left": "top-0 left-0 rounded-br-full",
    "top-right": "top-0 right-0 rounded-bl-full",
    "bottom-left": "bottom-0 left-0 rounded-tr-full",
    "bottom-right": "bottom-0 right-0 rounded-tl-full",
  };

  return (
    <div
      className={`absolute pointer-events-none ${size} ${color} ${positionClasses[position]} opacity-20`}
      aria-hidden="true"
    />
  );
}
