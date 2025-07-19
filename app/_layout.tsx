import '~/global.css';

import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import Theme from '~/components/shared/Theme';
import { colors } from '~/utils/color';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Lexend-Regular': require('~/assets/fonts/Lexend-Regular.ttf'),
    'Lexend-Medium': require('~/assets/fonts/Lexend-Medium.ttf'),
    'Lexend-SemiBold': require('~/assets/fonts/Lexend-SemiBold.ttf'),
  });

  const { colorScheme } = useColorScheme();
  const mode = colorScheme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Theme>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors[mode].background,
          },
          contentStyle: {
            backgroundColor: colors[mode].background,
          },
          headerShadowVisible: false,
        }}>
        <Stack.Screen
          name="(tabs)"
          options={{
            title: 'Hymnarium',
            headerTitleStyle: {
              fontFamily: 'Lexend-SemiBold',
              color: colors[mode].primary,
            },
          }}
        />
      </Stack>
    </Theme>
  );
}
