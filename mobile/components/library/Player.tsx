import { StyleSheet, Text, useColorScheme, View } from 'react-native';

import { Marquee } from '~/components/shared';
import { colors, globalStyles, withOpacity } from '~/styles';
import { Hymn } from '~/types';
import FavoriteButton from '../hymns/FavoriteButton';
import { BoxArt } from './BoxArt';
import { PlayerControls } from './PlayerControls';

interface PlayerProps {
  hymn: Hymn | null;
}

export const Player = ({ hymn }: PlayerProps) => {
  const theme = useColorScheme() ?? 'light';
  const { id, title, author_name } = hymn || {
    id: '',
    title: '',
    author_name: '',
  };

  const styles = createStyles(theme);

  return hymn ? (
    <View style={styles.player}>
      <View style={styles.content}>
        <View style={styles.info}>
          <BoxArt />

          <View style={styles.metadata}>
            <Marquee text={id ? `${id}. ${title}` : title} style={globalStyles.h3} />

            <Text className="font-lxmedium text-text opacity-60" numberOfLines={1}>
              {author_name || 'Unknown'}
            </Text>
          </View>
        </View>

        <FavoriteButton hymnId={hymn.id} />
      </View>

      <PlayerControls id={hymn.id} />
    </View>
  ) : null;
};

const createStyles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    player: {
      paddingTop: 16,
      paddingBottom: 8,
      paddingHorizontal: 12,
      backgroundColor: colors.surface[theme],
      borderTopWidth: 1,
      borderTopColor: withOpacity(colors.muted[theme], 0.1),
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    info: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    metadata: {
      flex: 1,
      gap: 4,
      overflow: 'hidden',
    },
  });
