import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';

import HymnList from '~/components/hymns/HymnList';
import SectionHeader from '~/components/shared/SectionHeader';

export default function TopicScreen() {
  const { id, title } = useLocalSearchParams();
  const [isAscending, setIsAscending] = useState(true);

  return (
    <View className="container">
      <SectionHeader title={title} isAscending={isAscending} setIsAscending={setIsAscending} />

      <HymnList topicId={Number(id)} isAscending={isAscending} />
    </View>
  );
}
