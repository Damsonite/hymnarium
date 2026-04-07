import { TouchableOpacity } from 'react-native';
import { useFavoritesStore } from '~/store/favoritesStore';

interface FavoriteProps {
  hymnId: number;
}

export default function FavoriteButton({ hymnId }: FavoriteProps) {
  const { isFavorite, toggleFavorite } = useFavoritesStore();
  const isHymnFavorite = isFavorite(hymnId);

  const handlePress = () => {
    toggleFavorite(hymnId);
  };

  return (
    <TouchableOpacity
      className="size-16 items-center justify-center"
      onPress={handlePress}></TouchableOpacity>
  );
}
