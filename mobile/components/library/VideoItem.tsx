import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import {
  Alert,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { colors, globalStyles, withOpacity } from '~/styles';
import { Video } from '~/types';
import { getYouTubeThumbnail } from '~/utils';

export const VideoItem = ({ item }: { item: Video }) => {
  const theme = useColorScheme() ?? 'light';
  const styles = createStyles(theme);

  const handlePress = async () => {
    if (!item.url) {
      Alert.alert('Error', 'No video URL available');
      return;
    }

    try {
      const supported = await Linking.canOpenURL(item.url);
      if (supported) {
        await Linking.openURL(item.url);
      } else {
        Alert.alert('Error', 'Cannot open this video URL');
      }
    } catch (error) {
      console.error('Error opening video URL:', error);
      Alert.alert('Error', 'Failed to open video');
    }
  };

  const thumbnailUrl = item.url ? getYouTubeThumbnail(item.url) : '';

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <View style={styles.thumbnailContainer}>
        {thumbnailUrl ? (
          <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} resizeMode="cover" />
        ) : (
          <View style={styles.placeholderThumbnail}>
            <FontAwesome name="film" size={40} color={colors.muted[theme]} />
          </View>
        )}
        <View style={styles.playIconContainer}>
          <FontAwesome6 name="play-circle" size={48} color={colors.text.dark} />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>

        {item.verse && (
          <Text style={styles.verse} numberOfLines={1}>
            {item.verse}
          </Text>
        )}

        <View style={styles.metaContainer}>
          <FontAwesome6 name="youtube" size={16} color={colors.danger[theme]} />
          <Text style={styles.metaText}>YouTube</Text>
        </View>
      </View>
    </Pressable>
  );
};

const createStyles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    container: {
      width: '100%',
      marginBottom: 16,
      borderRadius: 12,
      backgroundColor: colors.surface[theme],
      overflow: 'hidden',
    },
    thumbnailContainer: {
      width: '100%',
      aspectRatio: 16 / 9,
      backgroundColor: 'black',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    },
    thumbnail: {
      width: '100%',
      height: '100%',
    },
    placeholderThumbnail: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: withOpacity(colors.muted[theme], 0.2),
    },
    playIconContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      padding: 12,
      gap: 4,
    },
    title: StyleSheet.flatten([
      globalStyles.h3,
      {
        color: colors.text[theme],
        lineHeight: 20,
      },
    ]),
    verse: {
      marginTop: 2,
      fontFamily: 'Lexend-Regular',
      fontSize: 14,
      color: colors.muted[theme],
    },
    metaContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 6,
      marginTop: 4,
    },
    metaText: {
      fontFamily: 'Lexend-Regular',
      fontSize: 12,
      color: colors.muted[theme],
    },
  });
