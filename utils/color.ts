import { vars } from 'nativewind';

export const colors = {
  light: {
    primary: '#0364A0',
    secondary: '#78C0ED',
    text: '#003A5E',
    background: '#FCFDFD',
    surface: '#E2E6EA',
  },
  dark: {
    primary: '#4FB7F8',
    secondary: '#78C0ED',
    text: '#E6F4FA',
    background: '#0B1C26',
    surface: '#1A2B36',
  },
};

export type Color = keyof typeof colors.light | keyof typeof colors.dark;

export const themes = {
  light: vars({
    '--color-primary': colors.light.primary,
    '--color-secondary': colors.light.secondary,
    '--color-text': colors.light.text,
    '--color-background': colors.light.background,
    '--color-surface': colors.light.surface,
  }),
  dark: vars({
    '--color-primary': colors.dark.primary,
    '--color-secondary': colors.dark.secondary,
    '--color-text': colors.dark.text,
    '--color-background': colors.dark.background,
    '--color-surface': colors.dark.surface,
  }),
};

export const withOpacity = (color: Color, opacity: number, mode: 'light' | 'dark') => {
  const hex = colors[mode][color];
  const alpha = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0');

  return hex + alpha;
};
