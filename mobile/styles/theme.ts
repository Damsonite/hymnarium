export const colors: Record<string, { light: string; dark: string }> = {
  primary: {
    light: '#0364A0',
    dark: '#4FB7F8',
  },
  secondary: {
    light: '#78C0ED',
    dark: '#78C0ED',
  },
  accent: {
    light: '#FF6B35',
    dark: '#FF8C69',
  },
  success: {
    light: '#3CB371',
    dark: '#3CB371',
  },
  danger: {
    light: '#E74C3C',
    dark: '#C0392B',
  },
  text: {
    light: '#003A5E',
    dark: '#E6F4FA',
  },
  muted: {
    light: '#A0B2C3',
    dark: '#A0B2C3',
  },
  background: {
    light: '#FCFDFD',
    dark: '#0B1C26',
  },
  surface: {
    light: '#E2E6EA',
    dark: '#1A2B36',
  },
};

export type Color = keyof typeof colors;

export const withOpacity = (colorHex: string, opacity: number): string => {
  const clampedOpacity = Math.max(0, Math.min(1, opacity));
  const opacityHex = Math.round(clampedOpacity * 255)
    .toString(16)
    .padStart(2, '0')
    .toUpperCase();

  return colorHex + opacityHex;
};
