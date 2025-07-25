import { SQLiteDatabase } from 'expo-sqlite';

import { Hymn, Language } from '~/types';

export const getHymns = async (
  db: SQLiteDatabase,
  language: Language = 'en',
  isAscending: boolean = true,
  favoriteIds: number[] = []
) => {
  try {
    let sql = `
      SELECT h.id, h.author_id, h.has_track, h.has_demo, ht.title, a.name AS author_name
      FROM hymns h 
      LEFT JOIN authors a ON h.author_id = a.id
      JOIN hymn_translations ht ON h.id = ht.hymn_id AND ht.language = ?
    `;

    sql += ' ORDER BY ht.title ' + (isAscending ? 'ASC' : 'DESC');

    const params: string[] = [language];

    const result = await db.getAllAsync<Hymn>(sql, params);

    // Atach is_favorite property to each hymn
    const hymns = result.map((hymn) => ({
      ...hymn,
      is_favorite: favoriteIds.includes(hymn.id),
    }));

    return hymns;
  } catch (error) {
    console.error('Error fetching hymns:', error);
    return [];
  }
};

export const getHymn = async (db: SQLiteDatabase, id: Hymn['id'], language: Language = 'en') => {
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
