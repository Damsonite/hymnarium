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
        className="bg-surface border-surface h-32 border-t-[1px]"
        style={{ backgroundColor: withOpacity('surface', 0.8, mode) }}>
        <TabTrigger name="(library)" href="/" asChild>
          <TabButton icon="list" label="Biblioteca" />
        </TabTrigger>

        <TabTrigger name="search" href="/search" asChild>
          <TabButton icon="search" label="Buscar" />
        </TabTrigger>

        <TabTrigger name="favorites" href="/favorites" asChild>
          <TabButton icon="heart" label="Favoritos" />
        </TabTrigger>

        <TabTrigger name="settings" href="/settings" asChild>
          <TabButton icon="cog" label="Ajustes" />
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}
