import { LucideIcon } from "lucide-react";

interface BrandedIconWrapperProps {
  Icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
}

/**
 * Wraps Lucide icons in branded circular containers
 * Background: #B1D2FA with #192153 icon
 * Hover: transitions to #BA905E background
 */
export function BrandedIconWrapper({
  Icon,
  className = "",
  size = "md",
  ariaLabel,
}: BrandedIconWrapperProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-[#B1D2FA] text-[#192153] transition-all duration-300 hover:bg-[#BA905E] hover:shadow-md ${sizeClasses[size]} ${className}`}
      role="img"
      aria-label={ariaLabel}
    >
      <Icon className={iconSizeClasses[size]} />
    </div>
  );
}
