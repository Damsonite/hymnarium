import { useState } from 'react';
import { View } from 'react-native';
import HymnList from '~/components/hymns/HymnList';

import SearchBar from '~/components/search/SearchBar';

export default function Search() {
  const [query, setQuery] = useState('');

  return (
    <View className="container">
      <SearchBar query={query} setQuery={setQuery} />

      {query && <HymnList query={query} />}
    </View>
  );
}
