import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';
import { ReactElement } from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

import { colors, globalStyles } from '~/styles';
import { Loading } from './Loading';

interface BaseListProps<T> {
  data: T[];
  renderItem: (info: ListRenderItemInfo<T>) => ReactElement;
  numColumns?: number;
  emptyMessage?: string;
  loading?: boolean;
}

export const BaseList = <T,>({
  data,
  renderItem,
  numColumns = 1,
  emptyMessage = 'No items available',
  loading = false,
}: BaseListProps<T>) => {
  const theme = useColorScheme() ?? 'light';
  const styles = createStyles(theme);

  const ListEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyMessage}>{emptyMessage}</Text>
      </View>
    );
  };

  if (loading) return <Loading fullscreen />;

  return (
    <View style={styles.container}>
      <FlashList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={styles.content}
        numColumns={numColumns}
        keyboardDismissMode="on-drag"
        ListEmptyComponent={ListEmpty}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const createStyles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    container: {
      flex: 1,
      minHeight: 192,
    },
    content: {
      paddingTop: 16,
      paddingBottom: 32,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    emptyMessage: StyleSheet.flatten([
      globalStyles.body,
      {
        color: colors.muted[theme],
      },
    ]),
  });
