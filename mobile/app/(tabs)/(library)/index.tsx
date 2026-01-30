import { useState } from 'react';
import { View } from 'react-native';

import HymnList from '~/components/hymns/HymnList';
import SectionHeader from '~/components/shared/SectionHeader';

export default function HymnScreen() {
  const [isAscending, setIsAscending] = useState(true);

  return (
    <View className="container">
      <SectionHeader title="All hymns" isAscending={isAscending} setIsAscending={setIsAscending} />

      <HymnList isAscending={isAscending} />
    </View>
  );
}
