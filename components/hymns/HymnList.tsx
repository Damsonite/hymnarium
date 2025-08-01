import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';

import HymnItem from '~/components/hymns/HymnItem';
import BaseList from '~/components/shared/BaseList';
import { getHymns } from '~/db/hymns';
import { useFavoritesStore } from '~/store/favorites';
import { Hymn } from '~/types';

interface HymnListProps {
  isAscending?: boolean;
  onlyFavorites?: boolean;
  topicId?: number;
}

export default function HymnList({ isAscending, onlyFavorites = false, topicId }: HymnListProps) {
  const db = useSQLiteContext();
  const [data, setData] = useState<Hymn[]>([]);
  const { favoritesIds } = useFavoritesStore();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getHymns(db, 'es', isAscending, favoritesIds, topicId);

      if (onlyFavorites) {
        const favorites = result.filter((hymn) => favoritesIds.includes(hymn.id));
        setData(favorites);
        return;
      }

      setData(result);
    };

    fetchData();
  }, [db, isAscending, favoritesIds, onlyFavorites, topicId]);

  const emptyMessage = onlyFavorites ? 'No favorite hymns yet' : 'No hymns available';

  return (
    <BaseList
      data={data}
      renderItem={({ item }) => <HymnItem item={item} />}
      emptyMessage={emptyMessage}
    />
  );
}
