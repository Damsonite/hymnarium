import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';

import { getVideo } from '~/db/videos';
import { Language, Video } from '~/types';

export default function useVideo(id: number, language: Language = 'en') {
  const db = useSQLiteContext();
  const [data, setData] = useState<Video | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

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
