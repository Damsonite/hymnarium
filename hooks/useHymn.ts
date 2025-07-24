import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';

import { getHymn, Language } from '~/db/hymns';
import { Hymn } from '~/types/hymn';

export default function useHymn(id: Hymn['id'], language: Language = 'en') {
  const db = useSQLiteContext();
  const [data, setData] = useState<Hymn | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      const result = await getHymn(db, id, language);

      if (result === null) {
        setError(new Error(`Hymn ${id} not found or failed to load`));
      }

      setData(result);
      setIsLoading(false);
    };
    fetchData();
  }, [db, id, language]);

  return { data, isLoading, error };
}
