import { useSQLiteContext } from 'expo-sqlite';
import { useCallback, useEffect, useState } from 'react';

import { getHymn } from '~/db/hymns';
import { useLanguageStore } from '~/store';
import { Hymn } from '~/types';

export const useHymn = (id: number) => {
  const db = useSQLiteContext();
  const { language } = useLanguageStore();

  const [hymn, setHymn] = useState<Hymn | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await getHymn(db, id, language);

      if (result) {
        setHymn(result);
      }
    } catch (e: any) {
      setError(e.message);
      setHymn(null);
    } finally {
      setLoading(false);
    }
  }, [db, id, language]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { hymn, loading, error, setError };
};
