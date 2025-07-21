import { SQLiteDatabase } from 'expo-sqlite';

import { Hymn } from '~/types/hymn';

export type Language = 'es' | 'en';

export const getHymns = async (db: SQLiteDatabase, language: Language) => {
  try {
    let sql = `
      SELECT h.id, h.author_id, h.has_track, h.has_demo, ht.title, a.name AS author_name, 'hymn' AS type
      FROM hymns h 
      LEFT JOIN authors a ON h.author_id = a.id
      JOIN hymn_translations ht ON h.id = ht.hymn_id AND ht.language = ?
    `;

    const params: string[] = [language];

    return await db.getAllAsync<Hymn>(sql, params);
  } catch (error) {
    console.error('Error fetching hymns:', error);
    return [];
  }
};
