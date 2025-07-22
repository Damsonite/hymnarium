import { useState } from 'react';
import { View } from 'react-native';
import HymnList from '~/components/hymns/HymnList';

import ListHeader from '~/components/shared/ListHeader';

export default function Hymns() {
  const [isAscending, setIsAscending] = useState(true);

  return (
    <View className="container">
      <ListHeader
        title="Select an hymn"
        isAscending={isAscending}
        setIsAscending={setIsAscending}
      />

      <HymnList isAscending={isAscending} />
    </View>
  );
}
