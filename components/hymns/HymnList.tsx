import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';

import HymnItem from '~/components/hymns/HymnItem';
import BaseList from '~/components/shared/BaseList';
import { getHymns } from '~/db/hymns';
import { useFavoritesStore } from '~/store/favorites';
import { Hymn } from '~/types/hymn';

interface HymnListProps {
  isAscending?: boolean;
}

export default function HymnList({ isAscending }: HymnListProps) {
  const db = useSQLiteContext();
  const [data, setData] = useState<Hymn[]>([]);
  const { favoritesIds } = useFavoritesStore();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getHymns(db, 'en', isAscending, favoritesIds);
      setData(result);
    };

    fetchData();
  }, [db, isAscending, favoritesIds]);

  return (
    <BaseList
      data={data}
      renderItem={({ item }) => <HymnItem item={item} />}
      emptyMessage="No hymns available"
    />
  );
}
