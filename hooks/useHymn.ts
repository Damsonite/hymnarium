import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';

import { getHymn } from '~/db/hymns';
import { useLanguageStore } from '~/store/language';
import { Hymn } from '~/types';

export default function useHymn(id: number) {
  const db = useSQLiteContext();
  const [data, setData] = useState<Hymn | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { language } = useLanguageStore();

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
