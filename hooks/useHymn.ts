import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';

import { getHymn } from '~/db/hymns';
import { Hymn } from '~/types/hymn';

export default function useHymn(id: Hymn['id']) {
  const db = useSQLiteContext();
  const [data, setData] = useState<Hymn | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getHymn(db, id, 'en');
      setData(result);
      setIsLoading(false);
    };
    fetchData();
  }, [db, id]);

  return { data, isLoading };
}
