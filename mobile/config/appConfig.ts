export type Language = 'en' | 'es';

export interface AppConfig {
  app: {
    name: string;
    version: string;
    year?: number;
    author?: string;
  };
  db: {
    name: string;
    assetSource: { assetId: any };
  };
  languages: {
    value: Language;
    label: string;
  }[];
  links: {
    repository?: string;
    social?: {
      label: string;
      icon: string;
      url: string;
    }[];
  };
}

export const app: AppConfig['app'] = {
  name: 'Hymnarium',
  version: '1.0.0',
  year: 2025,
  author: 'Damsonite',
};

export const db: AppConfig['db'] = {
  name: 'db.db',
  assetSource: { assetId: require('../assets/db.db') },
};

export const languages: AppConfig['languages'] = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
];

export const defaultLanguage: Language = 'es';

export const links: AppConfig['links'] = {
  repository: 'https://github.com/damsonite/hymnarium',
  social: [
    { label: 'Email', icon: 'at', url: 'https://github.com/' },
    { label: 'Instagram', icon: 'instagram', url: 'https://instagram.com/' },
    { label: 'Facebook', icon: 'facebook', url: 'https://facebook.com/' },
    { label: 'X / Twitter', icon: 'x-twitter', url: 'https://twitter.com/' },
    { label: 'Youtube', icon: 'youtube', url: 'https://youtube.com/' },
  ],
};
