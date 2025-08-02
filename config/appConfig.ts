import { AppConfig } from '~/types';

export const appConfig: AppConfig = {
  app: {
    name: 'Hymnarium',
    version: '1.0.0',
    year: 2025,
    author: 'Damsonite',
  },
  database: {
    name: 'db.db',
    assetSource: { assetId: require('../assets/db.db') },
  },
  languages: [
    { value: 'es', label: 'Español' },
    { value: 'ek', label: 'Embera Katio' },
  ],
  defaultLanguage: 'es',
  links: {
    repository: 'https://github.com/damsonite/hymnarium',
    social: [
      { label: 'Email', icon: 'at', url: 'https://github.com/' },
      { label: 'Instagram', icon: 'instagram', url: 'https://instagram.com/' },
      { label: 'Facebook', icon: 'facebook', url: 'https://facebook.com/' },
      { label: 'X / Twitter', icon: 'x-twitter', url: 'https://twitter.com/' },
      { label: 'Youtube', icon: 'youtube', url: 'https://youtube.com/' },
    ],
  },
};
