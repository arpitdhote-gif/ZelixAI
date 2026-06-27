import React from "react";
import logoSrc from "../../zelixlogo.jpg";

export function LogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return <img src={logoSrc} className={className} alt="Zelix logo" />;
}
