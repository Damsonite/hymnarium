import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';

import BaseList from '~/components/shared/BaseList';
import TopicItem from '~/components/topics/TopicItem';
import { getTopics } from '~/db/topics';
import { Topic } from '~/types';

export default function TopicList() {
  const db = useSQLiteContext();
  const [data, setData] = useState<Topic[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getTopics(db);

      setData(result);
    };

    fetchData();
  }, [db]);

  return (
    <BaseList
      data={data}
      renderItem={({ item }) => <TopicItem item={item} />}
      emptyMessage="No topics found"
      numColumns={2}
    />
  );
}
