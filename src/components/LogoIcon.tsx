import React from "react";
import logoSrc from "../../zelixlogo.jpg";

export function LogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      className={className}
      alt="ZelixAI logo for AI Training Nagpur and Generative AI courses"
      loading="lazy"
      decoding="async"
    />
  );
}
