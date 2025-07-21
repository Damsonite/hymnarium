import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
import { useColorScheme } from 'nativewind';

import { TabButton } from '~/components/shared/TabButton';
import { withOpacity } from '~/utils/color';

export default function TabsLayout() {
  const { colorScheme } = useColorScheme();
  const mode = colorScheme ?? 'light';

  return (
    <Tabs>
      <TabSlot />
      <TabList
        className="h-32 border-t-[1px] border-surface bg-surface"
        style={{ backgroundColor: withOpacity('surface', 0.4, mode) }}>
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
  );
}
