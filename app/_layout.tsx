import '~/global.css';

import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    'Lexend-Regular': require('~/assets/fonts/Lexend-Regular.ttf'),
    'Lexend-Medium': require('~/assets/fonts/Lexend-Medium.ttf'),
    'Lexend-SemiBold': require('~/assets/fonts/Lexend-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Hymnarium',
          headerTitleStyle: {
            fontFamily: 'Lexend-SemiBold',
          },
        }}
      />
    </Stack>
  );
}
