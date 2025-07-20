import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';
import { ReactElement } from 'react';
import { Text, View } from 'react-native';

interface BaseListProps<T> {
  data: T[];
  renderItem: (info: ListRenderItemInfo<T>) => ReactElement;
  numColumns?: number;
  emptyMessage?: string;
}

export default function BaseList<T>({
  data,
  renderItem,
  numColumns = 1,
  emptyMessage = 'No hay datos',
}: BaseListProps<T>) {
  const ListEmpty = () => {
    return (
      <View className="flex-1 items-center justify-center p-4">
        <Text className="font-lxregular text-muted text-center">{emptyMessage}</Text>
      </View>
    );
  };

  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      estimatedItemSize={64}
      contentContainerClassName="pt-4 pb-8"
      numColumns={numColumns}
      keyboardDismissMode="on-drag"
      ListEmptyComponent={ListEmpty}
      showsVerticalScrollIndicator={false}
    />
  );
}
