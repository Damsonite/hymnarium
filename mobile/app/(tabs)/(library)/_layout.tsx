import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import { useColorScheme } from 'react-native';

import { colors } from '~/styles';

const { Navigator } = createMaterialTopTabNavigator();
const Tabs = withLayoutContext(Navigator);

export default function TopTabsLayout() {
  const theme = useColorScheme() ?? 'light';

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.background[theme],
        },
        tabBarLabelStyle: {
          fontFamily: 'Lexend-Medium',
          fontSize: 12,
        },
        tabBarActiveTintColor: colors.primary[theme],
        tabBarInactiveTintColor: colors.secondary[theme],
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary[theme],
        },
        tabBarAndroidRipple: { radius: 0 },
      }}>
      <Tabs.Screen name="index" options={{ title: 'Hymns' }} />
      <Tabs.Screen name="topics" options={{ title: 'Topics' }} />
      <Tabs.Screen name="videos" options={{ title: 'Videos' }} />
    </Tabs>
  );
}
