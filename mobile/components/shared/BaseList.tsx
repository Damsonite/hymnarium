import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';
import { ReactElement } from 'react';
import { Text, View } from 'react-native';

import Loading from '~/components/shared/Loading';

interface BaseListProps<T> {
  data: T[];
  renderItem: (info: ListRenderItemInfo<T>) => ReactElement;
  numColumns?: number;
  emptyMessage?: string;
  loading?: boolean;
}

export default function BaseList<T>({
  data,
  renderItem,
  numColumns = 1,
  emptyMessage = 'No items available',
  loading = false,
}: BaseListProps<T>) {
  const ListEmpty = () => {
    return (
      <View className="flex-1 items-center justify-center p-4">
        <Text className="text-center font-lxregular text-muted">{emptyMessage}</Text>
      </View>
    );
  };

  if (loading) return <Loading fullscreen />;

  return (
    <View className="min-h-48 flex-1">
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
    </View>
  );
}
