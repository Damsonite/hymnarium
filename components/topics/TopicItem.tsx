import { useRouter } from 'expo-router';

import BaseItem from '~/components/shared/BaseItem';
import { Topic } from '~/types';

export default function TopicItem({ item }: { item: Topic }) {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: '/topics/[id]',
      params: { id: item.id, title: item.name },
    });
  };

  return (
    <BaseItem
      iconName="folder"
      title={item.name}
      subtitle={`${item.hymn_count} himnos`}
      onPress={handlePress}
      boxArtSize={64}
    />
  );
}
