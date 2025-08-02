export type Language = 'en' | 'es' | 'ek';

export interface AppConfig {
  app: {
    name: string;
  };
  database: {
    name: string;
    assetSource: { assetId: any };
  };
  languages: {
    value: Language;
    label: string;
  }[];
  defaultLanguage: Language;
}

export interface Hymn {
  id: number;
  author_id: number;
  verse?: string;
  has_track: number;
  has_demo: number;
  title: string;
  text: string;
  author_name: string;
  is_favorite?: boolean;
}

export interface Video {
  id: number;
  verse?: string;
  url?: string;
  title: string;
}

export interface Topic {
  id: number;
  name: string;
  hymn_count: number;
}
