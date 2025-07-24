import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import FavoriteButton from '~/components/hymns/FavoriteButton';
import LanguageButton from '~/components/hymns/LanguageButton';
import Player from '~/components/hymns/Player';
import ContentInfo from '~/components/shared/ContentInfo';
import Error from '~/components/shared/Error';
import Loading from '~/components/shared/Loading';
import useHymn from '~/hooks/useHymn';
import { useLanguageStore } from '~/store/language';

export default function HymnScreen() {
  const { id } = useLocalSearchParams();
  const hymnId = Number(id);
  const { language } = useLanguageStore();
  const { data, isLoading, error } = useHymn(hymnId, language);
  const insets = useSafeAreaInsets();

  if (isLoading) return <Loading />;

  if (error || !data) {
    return <Error title="There was an error loading the hymn" message={error?.message} />;
  }

  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          title: data.title,
          headerRight: () => <LanguageButton />,
        }}
      />

      <ScrollView className="p-6" contentContainerClassName="pb-16">
        {data.verse && (
          <Text className="mb-4 text-right font-lxmedium text-text opacity-60">{data.verse}</Text>
        )}

        <Text
          className="font-lxregular text-3xl text-text"
          style={{
            lineHeight: 36,
          }}>
          {data.text}
        </Text>
      </ScrollView>

      <View className="surface mb-2 pt-4 shadow-lg" style={{ paddingBottom: insets.bottom }}>
        <View className="mr-3 flex-row items-center">
          <ContentInfo data={data} />

          <FavoriteButton hymnId={hymnId} />
        </View>

        <Player id={hymnId} />
      </View>
    </View>
  );
}
