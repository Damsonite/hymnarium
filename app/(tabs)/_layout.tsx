import { Stack } from 'expo-router';
import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TabButton } from '~/components/shared/TabButton';
import { appConfig } from '~/config/appConfig';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Stack.Screen
        options={{
          title: appConfig.app.name,
          headerTitleStyle: { fontFamily: 'Lexend-SemiBold', fontSize: 20 },
        }}
      />

      <Tabs>
        <TabSlot />
        <TabList
          className="surface"
          style={{
            paddingBottom: insets.bottom,
          }}>
          <TabTrigger name="(library)" href="/" asChild>
            <TabButton icon="list" label="Library" />
          </TabTrigger>

          <TabTrigger name="search" href="/search" asChild>
            <TabButton icon="search" label="Search" />
          </TabTrigger>

          <TabTrigger name="favorites" href="/favorites" asChild>
            <TabButton icon="heart" label="Favorites" />
          </TabTrigger>

          <TabTrigger name="settings" href="/settings" asChild>
            <TabButton icon="cog" label="Settings" />
          </TabTrigger>
        </TabList>
      </Tabs>
    </>
  );
}
