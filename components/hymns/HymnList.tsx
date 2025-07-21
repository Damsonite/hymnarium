import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import HymnItem from '~/components/hymns/HymnItem';
import BaseList from '~/components/shared/BaseList';
import { getHymns } from '~/db/hymns';
import { Hymn } from '~/types/hymn';

export default function HymnList() {
  const db = useSQLiteContext();
  const [data, setData] = useState<Hymn[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getHymns(db, 'en');
      setData(result);
    };

    fetchData();
  }, [db]);

  return (
    <BaseList
      data={data}
      renderItem={({ item }) => <HymnItem item={item} />}
      emptyMessage="No hymns available"
    />
  );
}
