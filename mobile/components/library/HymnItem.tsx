import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native';

import { colors, globalStyles } from '~/styles';
import { Hymn, Tag } from '~/types';
import { BoxArt } from './BoxArt';

interface HymnItemProps {
  item: Hymn;
  numbered?: boolean;
}

export const HymnItem = ({ item, numbered }: HymnItemProps) => {
  const theme = useColorScheme() ?? 'light';
  const styles = createStyles(theme);

  const router = useRouter();

  const tags: Tag[] = [];
  if (item.has_track) tags.push({ label: 'Track', color: 'confirm' });
  if (item.has_demo) tags.push({ label: 'Demo', color: 'accent' });

  const isFavorite = item.is_favorite;

  const handlePress = () => {
    router.push({
      pathname: '/hymns/[id]',
      params: { id: item.id, title: item.title },
    });
  };

  return (
    <Pressable style={styles.item} onPress={handlePress}>
      <BoxArt />

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {numbered ? `${item.id}. ${item.title}` : item.title}
          </Text>

          {isFavorite !== undefined && (
            <FontAwesome
              name={isFavorite ? 'heart' : 'heart-o'}
              size={16}
              color={colors.primary[theme]}
            />
          )}
        </View>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle} numberOfLines={1}>
            {item.author_name ?? ' '}
          </Text>

          <View style={styles.tags}>
            {tags.map((tag, index) => (
              <View
                key={index}
                style={{
                  ...styles.tag,
                  backgroundColor: colors[tag.color][theme],
                }}>
                <Text style={styles.label}>{tag.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const createStyles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    item: {
      flexDirection: 'row',
      height: 80,
      width: '100%',
      marginBottom: 8,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      gap: 8,
      paddingLeft: 8,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: StyleSheet.flatten([
      globalStyles.h3,
      {
        flex: 1,
        marginRight: 8,
        color: colors.text[theme],
      },
    ]),
    subtitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    subtitle: StyleSheet.flatten([
      globalStyles.body,
      {
        flex: 1,
        color: colors.primary[theme],
      },
    ]),
    tags: {
      flexDirection: 'row',
      gap: 4,
    },
    tag: {
      justifyContent: 'center',
      paddingHorizontal: 4,
      paddingVertical: 2,
      borderRadius: 4,
    },
    label: {
      fontFamily: 'Lexend-Medium',
      fontSize: 12,
      color: colors.background[theme],
    },
  });
