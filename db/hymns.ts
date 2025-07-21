import { SQLiteDatabase } from 'expo-sqlite';

import { Hymn } from '~/types/hymn';

export type Language = 'es' | 'en';

export const getHymns = async (
  db: SQLiteDatabase,
  language: Language,
  isAscending: boolean = true
) => {
  try {
    let sql = `
      SELECT h.id, h.author_id, h.has_track, h.has_demo, ht.title, a.name AS author_name
      FROM hymns h 
      LEFT JOIN authors a ON h.author_id = a.id
      JOIN hymn_translations ht ON h.id = ht.hymn_id AND ht.language = ?
    `;

    // Add ordering
    sql += ' ORDER BY ht.title ' + (isAscending ? 'ASC' : 'DESC');

    const params: string[] = [language];

    return await db.getAllAsync<Hymn>(sql, params);
  } catch (error) {
    console.error('Error fetching hymns:', error);
    return [];
  }
};

export const getHymn = async (db: SQLiteDatabase, id: Hymn['id'], language: Language) => {
  try {
    const sql = `
      SELECT h.id, h.author_id, h.verse, h.has_track, h.has_demo, ht.title, ht.text, a.name AS author_name
      FROM hymns h 
      LEFT JOIN authors a ON h.author_id = a.id
      JOIN hymn_translations ht ON h.id = ht.hymn_id AND ht.language = ?
      WHERE h.id = ?
    `;

    return await db.getFirstAsync<Hymn>(sql, [language, id]);
  } catch (error) {
    console.error(`Error fetching hymn ${id}:`, error);
    return null;
  }
};
