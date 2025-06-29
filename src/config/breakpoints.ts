export const BREAKPOINTS = {
  mobile: 820,
  laptop: 1485,
} as const;

export const SCREEN_SIZES = {
  mobile: 'mobile',
  laptop: 'laptop', 
  desktop: 'desktop',
} as const;

export type ScreenSize = typeof SCREEN_SIZES[keyof typeof SCREEN_SIZES]; 