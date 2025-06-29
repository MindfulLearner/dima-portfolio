import { useState, useEffect } from 'react';
import { BREAKPOINTS, SCREEN_SIZES, ScreenSize } from '../config/breakpoints';

interface ResponsiveConfig {
  mobile: number;
  laptop: number;
}

const defaultConfig: ResponsiveConfig = {
  mobile: BREAKPOINTS.mobile,
  laptop: BREAKPOINTS.laptop,
};

export const useResponsive = (config: ResponsiveConfig = defaultConfig) => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(SCREEN_SIZES.desktop);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < config.mobile) {
        setScreenSize(SCREEN_SIZES.mobile);
      } else if (width < config.laptop) {
        setScreenSize(SCREEN_SIZES.laptop);
      } else {
        setScreenSize(SCREEN_SIZES.desktop);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, [config.mobile, config.laptop]);

  return {
    screenSize,
    isMobile: screenSize === SCREEN_SIZES.mobile,
    isLaptop: screenSize === SCREEN_SIZES.laptop,
    isDesktop: screenSize === SCREEN_SIZES.desktop,
  };
}; 