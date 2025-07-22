import { useColorScheme } from 'nativewind';
import { ActivityIndicator, View } from 'react-native';

import { colors } from '~/utils/color';

export default function Loading() {
  const { colorScheme } = useColorScheme();
  const mode = colorScheme ?? 'light';

  return (
    <View className="size-20 items-center justify-center">
      <ActivityIndicator size="large" color={colors[mode].primary} />
    </View>
  );
}
