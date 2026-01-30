import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';

import { getVideo } from '~/db/videos';
import { useLanguageStore } from '~/store/language';
import { Video } from '~/types';

export default function useVideo(id: number) {
  const db = useSQLiteContext();
  const [data, setData] = useState<Video | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { language } = useLanguageStore();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      const result = await getVideo(db, id, language);

      if (result === null) {
        setError(new Error(`Video ${id} not found or failed to load`));
      }

      setData(result);
      setIsLoading(false);
    };
    fetchData();
  }, [db, id, language]);

  return { data, isLoading, error };
}
