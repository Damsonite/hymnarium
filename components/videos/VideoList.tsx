import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';

import BaseList from '~/components/shared/BaseList';
import VideoItem from '~/components/videos/VideoItem';
import { getVideos } from '~/db/videos';
import { useLanguageStore } from '~/store/language';
import { Video } from '~/types';

interface VideoListProps {
  isAscending?: boolean;
}

export default function VideoList({ isAscending }: VideoListProps) {
  const db = useSQLiteContext();
  const [data, setData] = useState<Video[]>([]);
  const { language } = useLanguageStore();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getVideos(db, language, isAscending);

      setData(result);
    };

    fetchData();
  }, [db, isAscending, language]);

  return (
    <BaseList
      data={data}
      renderItem={({ item }) => <VideoItem item={item} />}
      emptyMessage="No videos available"
    />
  );
}
