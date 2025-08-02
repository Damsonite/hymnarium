import { AppConfig } from '~/types';

export const appConfig: AppConfig = {
  app: {
    name: 'Hymnarium',
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
};
