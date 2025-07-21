import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { SQLiteProvider } from 'expo-sqlite';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';

import Theme from '~/components/shared/Theme';
import '~/global.css';
import { colors } from '~/utils/color';

SplashScreen.preventAutoHideAsync();

function StackNavigator() {
  const { colorScheme } = useColorScheme();
  const mode = colorScheme ?? 'light';

  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Lexend-Medium',
          fontSize: 18,
        },
        headerStyle: {
          backgroundColor: colors[mode].background,
        },
        headerTintColor: colors[mode].primary,
        contentStyle: {
          backgroundColor: colors[mode].background,
        },
        animation: 'slide_from_right',
        animationDuration: 200,
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="(tabs)"
        options={{
          title: 'Hymnarium',
          headerTitleStyle: { fontFamily: 'Lexend-SemiBold', fontSize: 20 },
        }}
      />

      <Stack.Screen
        name="hymns/[id]"
        options={({ route }) => {
          const { title } = route.params as any;
          return {
            title: title ?? '',
          };
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
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
    <SQLiteProvider databaseName="db.db" assetSource={{ assetId: require('../assets/db.db') }}>
      <Theme>
        <StackNavigator />
      </Theme>
    </SQLiteProvider>
  );
}
