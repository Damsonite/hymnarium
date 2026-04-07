import { useState } from 'react';
import { View } from 'react-native';

export default function FavoritesScreen() {
  const [isAscending, setIsAscending] = useState(true);

  return (
    <View className="container">
      {/*       <SectionHeader
        title="Favorites"
        isAscending={isAscending}
        setIsAscending={setIsAscending}
        largeTitle
      />

      <HymnList onlyFavorites isAscending={isAscending} /> */}
    </View>
  );
}
