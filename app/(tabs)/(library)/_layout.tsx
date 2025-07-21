import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { useMemo } from 'react';

import { colors } from '~/utils/color';

const { Navigator } = createMaterialTopTabNavigator();
const Tabs = withLayoutContext(Navigator);

export default function TopTabsLayout() {
  const { colorScheme } = useColorScheme();
  const mode = colorScheme ?? 'light';

  const screenOptions = useMemo(
    () => ({
      tabBarStyle: {
        backgroundColor: colors[mode].background,
      },
      tabBarLabelStyle: {
        fontFamily: 'Lexend-SemiBold',
        fontSize: 12,
      },
      tabBarActiveTintColor: colors[mode].primary,
      tabBarInactiveTintColor: colors[mode].secondary,
      tabBarIndicatorStyle: {
        backgroundColor: colors[mode].primary,
      },
      tabBarAndroidRipple: { radius: 0 },
    }),
    [mode]
  );

  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen name="index" options={{ title: 'Hymns' }} />
      <Tabs.Screen name="videos" options={{ title: 'Videos' }} />
      <Tabs.Screen name="topics" options={{ title: 'Topics' }} />
    </Tabs>
  );
}
