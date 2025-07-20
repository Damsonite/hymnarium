import { vars } from 'nativewind';

export const colors = {
  light: {
    primary: '#0364A0',
    secondary: '#78C0ED',
    accent: '#FF6B35',
    text: '#003A5E',
    muted: '#A0B2C3',
    background: '#FCFDFD',
    surface: '#E2E6EA',
    confirm: '#3CB371',
  },
  dark: {
    primary: '#4FB7F8',
    secondary: '#78C0ED',
    accent: '#FF8C69',
    text: '#E6F4FA',
    muted: '#A0B2C3',
    background: '#0B1C26',
    surface: '#1A2B36',
    confirm: '#3CB371',
  },
};

export type Color = keyof typeof colors.light | keyof typeof colors.dark;

export const themes = {
  light: vars({
    '--color-primary': colors.light.primary,
    '--color-secondary': colors.light.secondary,
    '--color-accent': colors.light.accent,
    '--color-text': colors.light.text,
    '--color-muted': colors.light.muted,
    '--color-background': colors.light.background,
    '--color-surface': colors.light.surface,
    '--color-confirm': colors.light.confirm,
  }),
  dark: vars({
    '--color-primary': colors.dark.primary,
    '--color-secondary': colors.dark.secondary,
    '--color-accent': colors.dark.accent,
    '--color-text': colors.dark.text,
    '--color-muted': colors.dark.muted,
    '--color-background': colors.dark.background,
    '--color-surface': colors.dark.surface,
    '--color-confirm': colors.dark.confirm,
  }),
};

export const withOpacity = (color: Color, opacity: number, mode: 'light' | 'dark') => {
  const hex = colors[mode][color];
  const alpha = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0');

  return hex + alpha;
};
