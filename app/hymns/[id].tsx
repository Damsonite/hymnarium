import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Player from '~/components/hymns/Player';

import ContentInfo from '~/components/shared/ContentInfo';
import useHymn from '~/hooks/useHymn';

export default function HymnScreen() {
  const { id } = useLocalSearchParams();
  const { data, isLoading } = useHymn(Number(id));
  const insets = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-text">Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <ScrollView className="p-6" contentContainerClassName="pb-16">
        <Text className="mb-4 text-right font-lxmedium text-text opacity-60">{data?.verse}</Text>

        <Text
          className="font-lxregular text-3xl text-text"
          style={{
            lineHeight: 36,
          }}>
          {data?.text}
        </Text>
      </ScrollView>

      <View className="surface mb-2 pt-4 shadow-lg" style={{ paddingBottom: insets.bottom }}>
        <ContentInfo data={data} />

        <Player data={data} isLoading={isLoading} />
      </View>
    </View>
  );
}
