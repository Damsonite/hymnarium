import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';

import BaseList from '~/components/shared/BaseList';
import VideoItem from '~/components/videos/VideoItem';
import { getVideos } from '~/db/videos';
import { Video } from '~/types';

interface VideoListProps {
  isAscending?: boolean;
}

export default function VideoList({ isAscending }: VideoListProps) {
  const db = useSQLiteContext();
  const [data, setData] = useState<Video[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getVideos(db, 'es', isAscending);

      setData(result);
    };

    fetchData();
  }, [db, isAscending]);

  return (
    <BaseList
      data={data}
      renderItem={({ item }) => <VideoItem item={item} />}
      emptyMessage="No videos available"
    />
  );
}
