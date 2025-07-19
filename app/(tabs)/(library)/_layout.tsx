import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import { useColorScheme } from 'nativewind';

import { colors } from '~/utils/color';

const { Navigator } = createMaterialTopTabNavigator();
const Tabs = withLayoutContext(Navigator);

export default function TopTabsLayout() {
  const { colorScheme } = useColorScheme();
  const mode = colorScheme ?? 'light';

  return (
    <Tabs
      screenOptions={{
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
      }}>
      <Tabs.Screen name="index" options={{ title: 'Himnos' }} />
      <Tabs.Screen name="videos" options={{ title: 'Videos' }} />
      <Tabs.Screen name="topics" options={{ title: 'Temas' }} />
    </Tabs>
  );
}
