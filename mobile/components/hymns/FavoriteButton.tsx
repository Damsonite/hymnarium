import { TouchableOpacity } from 'react-native';
import Icon from '~/components/shared/Icon';
import { useFavoritesStore } from '~/store/favorites';

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
    <TouchableOpacity className="size-16 items-center justify-center" onPress={handlePress}>
      <Icon name={isHymnFavorite ? 'heart' : 'heart-o'} size={24} color="primary" />
    </TouchableOpacity>
  );
}
