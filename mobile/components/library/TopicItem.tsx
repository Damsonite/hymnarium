import { FontAwesome6 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native';

import { colors, globalStyles } from '~/styles';
import { Topic } from '~/types';

export const TopicItem = ({ item }: { item: Topic }) => {
  const theme = useColorScheme() ?? 'light';
  const styles = createStyles(theme);

  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: '/topics/[id]',
      params: { id: item.id, title: item.name },
    });
  };

  return (
    <Pressable style={styles.item} onPress={handlePress}>
      <FontAwesome6 name="tag" size={28} color={colors.accent[theme]} />

      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.name}
        </Text>

        <Text style={styles.subtitle} numberOfLines={1}>
          {`${item.hymn_count} himnos`}
        </Text>
      </View>
    </Pressable>
  );
};

const createStyles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 12,
      padding: 16,
      height: 80,
      width: '100%',
      marginBottom: 8,
    },
    titleContainer: {
      justifyContent: 'center',
      gap: 4,
      marginLeft: 8,
      paddingHorizontal: 8,
    },
    title: StyleSheet.flatten([globalStyles.h3, { color: colors.text[theme] }]),
    subtitle: StyleSheet.flatten([globalStyles.body, { color: colors.primary[theme] }]),
  });
