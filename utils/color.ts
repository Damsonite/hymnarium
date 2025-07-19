import { vars } from 'nativewind';

export const colors = {
  light: {
    primary: '#0364A0',
    text: '#003A5E',
    background: '#FCFDFD',
  },
  dark: {
    primary: '#4FB7F8',
    text: '#E6F4FA',
    background: '#0B1C26',
  },
};

export const themes = {
  light: vars({
    '--color-primary': colors.light.primary,
    '--color-text': colors.light.text,
    '--color-background': colors.light.background,
  }),
  dark: vars({
    '--color-primary': colors.dark.primary,
    '--color-text': colors.dark.text,
    '--color-background': colors.dark.background,
  }),
};
