import { useLocalSearchParams } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { getHymn } from '~/db/hymns';
import { Hymn } from '~/types/hymn';

export default function HymnScreen() {
  const { id } = useLocalSearchParams();
  const db = useSQLiteContext();
  const [data, setData] = useState<Hymn | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getHymn(db, Number(id), 'en');
      setData(result);
    };

    fetchData();
  }, [db, id]);

  return (
    <View className="flex-1">
      <ScrollView className="p-6" contentContainerClassName="pb-16">
        <Text
          className="font-lxregular text-3xl text-text"
          style={{
            lineHeight: 36,
          }}>
          {data?.text}
        </Text>
      </ScrollView>
    </View>
  );
}
