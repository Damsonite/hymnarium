export interface Hymn {
  id: number;
  title: string;
  text: string;
  verse?: string;
  author_name: string;
  has_track: boolean;
  has_demo: boolean;
  is_favorite?: boolean;
}
