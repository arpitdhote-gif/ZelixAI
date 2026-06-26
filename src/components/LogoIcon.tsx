import React from "react";

export function LogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="leftLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
        <linearGradient id="rightLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="50%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
      
      {/* Upper Sprout Leaves */}
      {/* Left Leaf */}
      <path 
        d="M 50 48 C 35 25 12 30 18 52 C 22 62 38 65 50 78 C 50 78 45 60 40 54 C 36 49 42 42 50 48 Z" 
        fill="url(#leftLeafGrad)" 
      />
      
      {/* Right Leaf */}
      <path 
        d="M 50 48 C 65 25 88 30 82 52 C 78 62 62 65 50 78 C 50 78 55 60 60 54 C 64 49 58 42 50 48 Z" 
        fill="url(#rightLeafGrad)" 
      />

      {/* The "Z" stem lines integrated on the left */}
      <path 
        d="M 32 68 L 48 68 L 34 80 L 48 80" 
        stroke="#16a34a" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* The "L" stem lines integrated on the right */}
      <path 
        d="M 58 68 L 58 80 L 72 80" 
        stroke="#eab308" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Glowing sunburst / seed at the bottom */}
      <g>
        {/* Glow center */}
        <circle cx="50" cy="85" r="4.5" fill="url(#glowGrad)" />
        {/* Radiating sunburst rays */}
        <line x1="50" y1="76" x2="50" y2="72" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="94" x2="50" y2="98" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="41" y1="85" x2="37" y2="85" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="59" y1="85" x2="63" y2="85" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />
        
        <line x1="44" y1="79" x2="41" y2="76" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
        <line x1="56" y1="79" x2="59" y2="76" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
        <line x1="44" y1="91" x2="41" y2="94" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
        <line x1="56" y1="91" x2="59" y2="94" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}
