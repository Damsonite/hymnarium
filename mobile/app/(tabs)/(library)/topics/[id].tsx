import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

import { HymnList } from '~/components/hymns';
import { ListLayout } from '~/layouts';

export default function TopicScreen() {
  const { id, title } = useLocalSearchParams();
  const [isAscending, setIsAscending] = useState(true);
  const titleString = Array.isArray(title) ? title[0] : title;

  return (
    <ListLayout
      title={titleString ?? ''}
      isAscending={isAscending}
      setIsAscending={setIsAscending}
      showBackButton>
      <HymnList topicId={Number(id)} isAscending={isAscending} />
    </ListLayout>
  );
}
