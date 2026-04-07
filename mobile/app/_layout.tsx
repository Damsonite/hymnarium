import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { SQLiteProvider } from 'expo-sqlite';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { LanguageButton } from '~/components/shared';
import { app, db } from '~/config';
import { colors, globalStyles } from '~/styles';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const theme = useColorScheme() ?? 'light';

  const [fontsLoaded, fontsError] = useFonts({
    'Lexend-Regular': require('~/assets/fonts/Lexend-Regular.ttf'),
    'Lexend-Medium': require('~/assets/fonts/Lexend-Medium.ttf'),
    'Lexend-SemiBold': require('~/assets/fonts/Lexend-SemiBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SQLiteProvider databaseName={db.name} assetSource={db.assetSource}>
        <Stack
          screenOptions={{
            headerTitleAlign: 'center',
            headerTitleStyle: globalStyles.h1,
            headerTintColor: colors.primary[theme],
            headerStyle: {
              backgroundColor: colors.background[theme],
            },
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: colors.background[theme],
            },
          }}>
          <Stack.Screen
            name="(tabs)"
            options={{
              title: app.name,
              headerRight: () => <LanguageButton />,
            }}
          />
        </Stack>
      </SQLiteProvider>
    </GestureHandlerRootView>
  );
}
