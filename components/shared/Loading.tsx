import { useColorScheme } from 'nativewind';
import { ActivityIndicator, View } from 'react-native';

import { colors } from '~/utils/color';

export default function Loading({ fullscreen = false }: { fullscreen?: boolean }) {
  const { colorScheme } = useColorScheme();
  const mode = colorScheme ?? 'light';

  const LoadingIndicator = () => {
    return (
      <View className="size-20 items-center justify-center">
        <ActivityIndicator size="large" color={colors[mode].primary} />
      </View>
    );
  };

  if (fullscreen) {
    return (
      <View className="flex-1 items-center justify-center">
        <LoadingIndicator />
      </View>
    );
  }

  return <LoadingIndicator />;
}
