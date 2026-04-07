import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native';

import { colors, globalStyles } from '~/styles';

interface ListLayoutProps {
  title: string;
  isAscending?: boolean;
  setIsAscending?: (isAscending: boolean) => void;
  showBackButton?: boolean;
  children: React.ReactNode;
}

export const ListLayout = ({
  title,
  isAscending,
  setIsAscending,
  showBackButton = false,
  children,
}: ListLayoutProps) => {
  const theme = useColorScheme() ?? 'light';
  const styles = createStyles(theme);

  const router = useRouter();

  const handleBackPress = () => {
    if (showBackButton) {
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.titleContainer} onPress={handleBackPress}>
          {showBackButton && (
            <FontAwesome6 name="arrow-left" size={20} color={colors.primary[theme]} />
          )}

          <Text style={styles.title}>{title}</Text>
        </Pressable>

        {setIsAscending && (
          <Pressable style={styles.controls} onPress={() => setIsAscending(!isAscending)}>
            <Text style={styles.label} className="font-lxmedium text-primary">
              {isAscending ? 'A - Z' : 'Z - A'}
            </Text>

            <FontAwesome5
              name={isAscending ? 'sort-alpha-up' : 'sort-alpha-down'}
              size={16}
              color={colors.primary[theme]}
            />
          </Pressable>
        )}
      </View>

      {children}
    </View>
  );
};

const createStyles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      paddingBottom: 0,
      backgroundColor: colors.background[theme],
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 8,
      borderBottomWidth: 2,
      borderColor: colors.secondary[theme],
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },
    title: StyleSheet.flatten([
      globalStyles.h2,
      {
        color: colors.text[theme],
      },
    ]),
    controls: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    label: {
      fontFamily: 'Lexend-Medium',
      fontSize: 14,
      color: colors.primary[theme],
    },
  });
