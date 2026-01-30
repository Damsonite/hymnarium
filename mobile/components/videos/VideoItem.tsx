import { useRouter } from 'expo-router';
import BaseItem from '~/components/shared/BaseItem';

import { Video } from '~/types';

interface VideoItemProps {
  item: Video;
}

export default function VideoItem({ item }: VideoItemProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: '/videos/[id]',
      params: { id: item.id, title: item.title },
    });
  };

  return (
    <BaseItem
      iconName="film"
      title={item.title}
      subtitle={item.verse ?? 'No verse'}
      tags={[{ label: 'Youtube', color: 'danger' }]}
      onPress={handlePress}
    />
  );
}
