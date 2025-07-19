import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
import { TabButton } from '~/components/shared/TabButton';

export default function TabsLayout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList className="bg-surface/90 border-surface h-32 border-t-[1px]">
        <TabTrigger name="index" href="/" asChild>
          <TabButton label="Biblioteca" />
        </TabTrigger>

        <TabTrigger name="search" href="/search" asChild>
          <TabButton label="Buscar" />
        </TabTrigger>

        <TabTrigger name="favorites" href="/favorites" asChild>
          <TabButton label="Favoritos" />
        </TabTrigger>

        <TabTrigger name="settings" href="/settings" asChild>
          <TabButton label="Ajustes" />
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}
