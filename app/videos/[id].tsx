import { Stack, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

import LanguageButton from '~/components/hymns/LanguageButton';
import ContentInfo from '~/components/shared/ContentInfo';
import Error from '~/components/shared/Error';
import Loading from '~/components/shared/Loading';
import useVideo from '~/hooks/useVideo';
import { getYouTubeEmbedUrl } from '~/utils/url';

export default function VideoScreen() {
  const { id } = useLocalSearchParams();
  const { data, isLoading, error } = useVideo(Number(id));

  const insets = useSafeAreaInsets();

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

      <View className="flex-1 justify-between">
        <View className="my-auto aspect-video w-full max-w-lg">
          <WebView
            source={{ uri: getYouTubeEmbedUrl(data.url ?? '') }}
            allowsInlineMediaPlayback={true}
            allowsFullscreenVideo={true}
            domStorageEnabled={true}
            startInLoadingState={true}
          />
        </View>

        <View className="surface mb-2 pt-4 shadow-lg" style={{ paddingBottom: insets.bottom }}>
          <View className="mr-3 flex-row items-center">
            <ContentInfo title={data.title} subtitle={data.verse} />
          </View>
        </View>
      </View>
    </>
  );
}
