import { Stack, useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

import LanguageButton from '~/components/hymns/LanguageButton';
import Error from '~/components/shared/Error';
import Loading from '~/components/shared/Loading';
import useVideo from '~/hooks/useVideo';
import { useLanguageStore } from '~/store/language';

export default function VideoScreen() {
  const { id } = useLocalSearchParams();
  const { language } = useLanguageStore();
  const { data, isLoading, error } = useVideo(Number(id), language);

  if (isLoading) return <Loading />;

  if (error || !data) {
    return <Error title="There was an error loading the video" message={error?.message} />;
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: data.title,
          headerRight: () => <LanguageButton />,
        }}
      />

      <Text>Hola</Text>
    </>
  );
}
