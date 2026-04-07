import { ActivityIndicator, useColorScheme, View } from 'react-native';

import { colors } from '~/styles';

export const Loading = ({ fullscreen = false }: { fullscreen?: boolean }) => {
  const theme = useColorScheme() ?? 'light';

  const LoadingIndicator = () => {
    return (
      <View className="size-20 items-center justify-center">
        <ActivityIndicator size="large" color={colors.primary[theme]} />
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
};
