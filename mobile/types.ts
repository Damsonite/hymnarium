import { Color } from './styles';

export type Theme = 'light' | 'dark';

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

export interface Tag {
  label: string;
  color: Color;
}
