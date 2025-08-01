import { SQLiteDatabase } from 'expo-sqlite';

import { Topic } from '~/types';

export const getTopics = async (db: SQLiteDatabase) => {
  try {
    let sql = `
      SELECT t.id, t.name, COUNT(ht.hymn_id) as hymn_count
      FROM topics t
      LEFT JOIN hymn_topics ht ON t.id = ht.topic_id
      GROUP BY t.id, t.name
    `;

    const result = await db.getAllAsync<Topic>(sql, []);
    return result ? result : [];
  } catch (error) {
    console.error('Error fetching topics with hymn count:', error);
    return [];
  }
};
