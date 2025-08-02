import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { SQLiteProvider } from 'expo-sqlite';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Theme from '~/components/shared/Theme';
import { appConfig } from '~/config/appConfig';
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
        animation: 'fade',
        headerShadowVisible: false,
      }}
    />
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SQLiteProvider
        databaseName={appConfig.database.name}
        assetSource={appConfig.database.assetSource}>
        <Theme>
          <StackNavigator />
        </Theme>
      </SQLiteProvider>
    </GestureHandlerRootView>
  );
}
