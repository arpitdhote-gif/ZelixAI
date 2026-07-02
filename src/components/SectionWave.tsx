import React from 'react';
import { motion } from 'motion/react';

interface SectionWaveProps {
  position?: 'top' | 'bottom';
  flip?: boolean;
  colorVariant?: 'primary' | 'secondary' | 'accent';
  waveHeight?: 'sm' | 'md' | 'lg';
  opacity?: number;
  layerCount?: 1 | 2 | 3;
}

export function SectionWave({
  position = 'top',
  flip = false,
  colorVariant = 'primary',
  waveHeight = 'md',
  opacity = 0.08,
  layerCount = 2,
}: SectionWaveProps) {
  // Map color variant to theme colors
  const colorMap = {
    primary: '#192153',
    secondary: '#B1D2FA',
    accent: '#BA905E',
  };
  
  const fill = colorMap[colorVariant];
  
  // Height classes based on viewport breakpoints
  const heightClasses = {
    sm: 'h-8 md:h-12 lg:h-16',
    md: 'h-12 md:h-20 lg:h-28',
    lg: 'h-16 md:h-28 lg:h-40',
  };
  
  // Position classes (top or bottom) and flip transformation
  const wrapperClasses = [
    'absolute left-0 right-0 w-full overflow-hidden pointer-events-none z-0',
    position === 'top' ? 'top-[-1px]' : 'bottom-[-1px]',
    flip ? 'rotate-180' : '',
    position === 'top' && !flip ? 'rotate-180' : '', // Usually top waves are inverted
    heightClasses[waveHeight]
  ].filter(Boolean).join(' ');

  // Reduced motion check using CSS
  return (
    <div className={wrapperClasses} aria-hidden="true" style={{ opacity }}>
      {/* Layer 3 - Background (Slowest motion) */}
      {layerCount >= 3 && (
        <motion.div 
          className="absolute inset-0 w-[200%] md:w-[150%] lg:w-full"
          animate={{ x: ["0%", "-5%", "0%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,21.8416431 C188.756183,-4.20935575 391.89868,-5.54920227 609.427508,18.6015528 C826.956336,42.7523079 1076.62193,42.7523079 1440,21.8416431 L1440,74 L0,74 L0,21.8416431 Z" fill={fill} opacity="0.3" />
          </svg>
        </motion.div>
      )}
      
      {/* Layer 2 - Middle (Medium motion) */}
      {layerCount >= 2 && (
        <motion.div 
          className="absolute inset-0 w-[200%] md:w-[150%] lg:w-full"
          animate={{ x: ["0%", "-3%", "0%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,38.8416431 C217.256183,12.7906443 430.39868,11.4507977 640.427508,35.6015528 C850.456336,59.7523079 1083.62193,59.7523079 1440,38.8416431 L1440,74 L0,74 L0,38.8416431 Z" fill={fill} opacity="0.5" />
          </svg>
        </motion.div>
      )}

      {/* Layer 1 - Foreground (Fastest motion) */}
      {layerCount >= 1 && (
        <motion.div 
          className="absolute inset-0 w-[200%] md:w-[150%] lg:w-[120%]"
          animate={{ x: ["0%", "-2%", "0%"] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        >
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,55.8416431 C245.756183,29.7906443 468.89868,28.4507977 669.427508,52.6015528 C869.956336,76.7523079 1106.62193,76.7523079 1440,55.8416431 L1440,74 L0,74 L0,55.8416431 Z" fill={fill} />
          </svg>
        </motion.div>
      )}
    </div>
  );
}
