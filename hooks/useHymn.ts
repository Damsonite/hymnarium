import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';

import { getHymn } from '~/db/hymns';
import { Hymn } from '~/types/hymn';

export default function useHymn(id: Hymn['id']) {
  const db = useSQLiteContext();
  const [data, setData] = useState<Hymn | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      const result = await getHymn(db, id);

      if (result === null) {
        setError(new Error(`Hymn ${id} not found or failed to load`));
      }

      setData(result);
      setIsLoading(false);
    };
    fetchData();
  }, [db, id]);

  return { data, isLoading, error };
}
