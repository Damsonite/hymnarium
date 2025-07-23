import { SQLiteDatabase } from 'expo-sqlite';
import { getHymn, Language } from '~/db/hymns';
import { Hymn } from '~/types/hymn';

export const getHymnTitle = async (
  db: SQLiteDatabase,
  id: Hymn['id'],
  language: Language = 'en'
): Promise<string | null> => {
  try {
    const hymn = await getHymn(db, id, language);
    return hymn?.title || null;
  } catch (error) {
    console.error(`Error fetching hymn title for ID ${id}:`, error);
    return null;
  }
};
