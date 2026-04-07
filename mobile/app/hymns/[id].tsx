import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';

import { Player } from '~/components/library';
import { ErrorDialog, LanguageButton, Loading } from '~/components/shared';
import { useHymn } from '~/hooks';
import { colors, globalStyles, withOpacity } from '~/styles';
import { formatVerse } from '~/utils';

export default function HymnScreen() {
  const theme = useColorScheme() ?? 'light';
  const { id } = useLocalSearchParams();
  const { hymn, loading, error, setError } = useHymn(Number(id));

  const styles = createStyles(theme);

  return (
    <>
      <Stack.Screen
        options={{
          title: hymn?.title ?? 'Hymn',
          headerTitleStyle: globalStyles.h2,
          headerRight: () => <LanguageButton />,
        }}
      />

      <ErrorDialog title="There was an error loading the hymn" error={error} setError={setError} />

      {loading ? (
        <Loading />
      ) : (
        <View style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={styles.scrollview}>
            {hymn?.verse && <Text style={styles.verse}>{formatVerse(hymn?.verse)}</Text>}

            <Text style={styles.lyrics}>{hymn?.text}</Text>
          </ScrollView>

          <Player hymn={hymn} />
        </View>
      )}
    </>
  );
}

const createStyles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    scrollview: {
      padding: 24,
    },
    verse: {
      marginBottom: 16,
      textAlign: 'right',
      fontFamily: 'Lexend-Medium',
      color: withOpacity(colors.text[theme], 0.6),
    },
    lyrics: {
      fontFamily: 'Lexend-Regular',
      fontSize: 24,
      lineHeight: 36,
      color: colors.text[theme],
    },
  });
