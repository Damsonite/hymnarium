import { useRouter } from 'expo-router';
import BaseItem, { Tag } from '~/components/shared/BaseItem';
import { Hymn } from '~/types/hymn';

interface HymnItemProps {
  item: Hymn;
}

export default function HymnItem({ item }: HymnItemProps) {
  const router = useRouter();
  const tags: Tag[] = [];

  if (item.has_track) tags.push({ label: 'Track', color: 'confirm' });
  if (item.has_demo) tags.push({ label: 'Demo', color: 'accent' });

  const handlePress = () => {
    router.push({
      pathname: '/hymns/[id]',
      params: { id: item.id, title: item.title },
    });
  };

  return (
    <BaseItem
      iconName="music"
      title={item.title}
      subtitle={item.author_name ?? 'Unknown'}
      tags={tags}
      isFavorite={item.is_favorite}
      onPress={handlePress}
    />
  );
}
