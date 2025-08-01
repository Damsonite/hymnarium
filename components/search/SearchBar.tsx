import { TextInput, View } from 'react-native';

import { useColorScheme } from 'nativewind';
import Icon from '~/components/shared/Icon';
import { colors } from '~/utils/color';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  const { colorScheme } = useColorScheme();
  const mode = colorScheme ?? 'light';

  return (
    <View className="h-12 flex-row items-center gap-1 rounded-2xl bg-surface px-4">
      <Icon name="search" size={16} color="muted" />
      <TextInput
        className="ml-1 flex-1 font-lxregular text-text"
        placeholder="Search by title or author..."
        placeholderTextColor={colors[mode].muted}
        value={query}
        onChangeText={setQuery}
      />
    </View>
  );
}
