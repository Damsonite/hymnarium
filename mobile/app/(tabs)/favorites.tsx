import { useState } from 'react';
import { View } from 'react-native';

import HymnList from '~/components/hymns/HymnList';
import SectionHeader from '~/components/shared/SectionHeader';

export default function FavoritesScreen() {
  const [isAscending, setIsAscending] = useState(true);

  return (
    <View className="container">
      <SectionHeader
        title="Favorites"
        isAscending={isAscending}
        setIsAscending={setIsAscending}
        largeTitle
      />

      <HymnList onlyFavorites isAscending={isAscending} />
    </View>
  );
}
