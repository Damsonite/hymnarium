import { FontAwesome6 } from '@expo/vector-icons';
import { TextInput, useColorScheme, View } from 'react-native';

import { colors } from '~/styles';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  const theme = useColorScheme() ?? 'light';

  return (
    <View className="h-12 flex-row items-center gap-1 rounded-2xl bg-surface px-4">
      <FontAwesome6 name="search" size={16} color={colors.muted[theme]} />

      <TextInput
        className="ml-1 flex-1 font-lxregular text-text"
        placeholder="Search by title or author..."
        placeholderTextColor={colors.muted[theme]}
        value={query}
        onChangeText={setQuery}
      />
    </View>
  );
}
