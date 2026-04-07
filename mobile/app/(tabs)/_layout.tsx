import FontAwesome6 from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

import { colors, withOpacity } from '~/styles';

export default function TabsLayout() {
  const theme = useColorScheme() ?? 'light';

  const getTintColor = (focused: boolean) => {
    return focused ? colors.primary[theme] : colors.muted[theme];
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderColor: withOpacity(colors.muted[theme], 0.2),
          backgroundColor: colors.surface[theme],
        },
        tabBarLabelStyle: {
          fontFamily: 'Lexend-Medium',
          fontSize: 12,
        },
        tabBarActiveTintColor: getTintColor(true),
        tabBarInactiveTintColor: getTintColor(false),
      }}>
      <Tabs.Screen
        name="(library)"
        options={{
          title: 'Library',
          tabBarIcon: ({ focused }) => (
            <FontAwesome6 name="book" size={24} color={getTintColor(focused)} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => (
            <FontAwesome6 name="search" size={24} color={getTintColor(focused)} />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ focused }) => (
            <FontAwesome6 name="heart" size={24} color={getTintColor(focused)} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <FontAwesome6 name="cog" size={24} color={getTintColor(focused)} />
          ),
        }}
      />
    </Tabs>
  );
}
