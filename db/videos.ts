import { SQLiteDatabase } from 'expo-sqlite';

import { Video } from '~/types/video';

export type Language = 'es' | 'en';

export const getVideos = async (
  db: SQLiteDatabase,
  language: Language = 'en',
  isAscending: boolean = true
) => {
  try {
    let sql = `
      SELECT v.id, v.verse, v.url, vt.title
      FROM videos v 
      JOIN video_translations vt ON v.id = vt.video_id AND vt.language = ?
    `;

    sql += ' ORDER BY vt.title ' + (isAscending ? 'ASC' : 'DESC');

    const params: string[] = [language];

    const result = await db.getAllAsync<Video>(sql, params);

    return result;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};

export const getVideo = async (db: SQLiteDatabase, id: Video['id'], language: Language = 'en') => {
  try {
    const sql = `
      SELECT v.id, v.verse, v.url, vt.title
      FROM videos v 
      JOIN video_translations vt ON v.id = vt.video_id AND vt.language = ?
      WHERE v.id = ?
    `;

    return await db.getFirstAsync<Video>(sql, [language, id]);
  } catch (error) {
    console.error(`Error fetching video ${id}:`, error);
    return null;
  }
};
