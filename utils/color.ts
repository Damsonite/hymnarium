import { vars } from 'nativewind';

export const colors = {
  light: {
    primary: '#0364A0',
    text: '#003A5E',
    background: '#FCFDFD',
    surface: '#E2E6EA',
  },
  dark: {
    primary: '#4FB7F8',
    text: '#E6F4FA',
    background: '#0B1C26',
    surface: '#1A2B36',
  },
};

export type Color = keyof typeof colors.light | keyof typeof colors.dark;

export const themes = {
  light: vars({
    '--color-primary': colors.light.primary,
    '--color-text': colors.light.text,
    '--color-background': colors.light.background,
    '--color-surface': colors.light.surface,
  }),
  dark: vars({
    '--color-primary': colors.dark.primary,
    '--color-text': colors.dark.text,
    '--color-background': colors.dark.background,
    '--color-surface': colors.dark.surface,
  }),
};
