import BaseItem, { Tag } from '~/components/shared/BaseItem';
import { Hymn } from '~/types/hymn';

interface HymnItemProps {
  item: Hymn;
}

export default function HymnItem({ item }: HymnItemProps) {
  const tags: Tag[] = [];

  if (item.has_track) tags.push({ label: 'Pista', color: 'confirm' });
  if (item.has_demo) tags.push({ label: 'Demo', color: 'accent' });

  return (
    <BaseItem
      iconName="music"
      title={item.title}
      subtitle={item.author_name ?? 'Desconocido'}
      tags={tags}
      isFavorite={item.is_favorite}
    />
  );
}
