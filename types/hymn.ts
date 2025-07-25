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
