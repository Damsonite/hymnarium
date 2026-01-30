import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';

import HymnItem from '~/components/hymns/HymnItem';
import BaseList from '~/components/shared/BaseList';
import { getHymns } from '~/db/hymns';
import { useFavoritesStore } from '~/store/favorites';
import { useLanguageStore } from '~/store/language';
import { Hymn } from '~/types';

interface HymnListProps {
  isAscending?: boolean;
  onlyFavorites?: boolean;
  topicId?: number;
  query?: string;
}

export default function HymnList({
  isAscending,
  onlyFavorites = false,
  topicId,
  query,
}: HymnListProps) {
  const db = useSQLiteContext();
  const { favoritesIds } = useFavoritesStore();
  const { language } = useLanguageStore();

  const [data, setData] = useState<Hymn[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const result = await getHymns(db, language, isAscending, favoritesIds, topicId, query);

      if (onlyFavorites) {
        const favorites = result.filter((hymn) => favoritesIds.includes(hymn.id));
        setData(favorites);
        setLoading(false);
        return;
      }

      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [db, isAscending, favoritesIds, onlyFavorites, topicId, query, language]);

  const emptyMessage = onlyFavorites ? 'No favorite hymns yet' : 'No hymns available';

  return (
    <BaseList
      data={data}
      renderItem={({ item }) => <HymnItem item={item} numbered />}
      emptyMessage={emptyMessage}
      loading={loading}
    />
  );
}
