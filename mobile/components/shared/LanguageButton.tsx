import { FontAwesome6 } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native';

import { Language, languages } from '~/config';
import { useLanguageStore } from '~/store';
import { colors, withOpacity } from '~/styles';

export const LanguageButton = () => {
  const theme = useColorScheme() ?? 'light';
  const { language, setLanguage } = useLanguageStore();

  const [isExpanded, setIsExpanded] = useState(false);

  const styles = createStyles(theme);

  const handleOpen = () => {
    setIsExpanded(true);
  };

  const handleDismiss = () => {
    setIsExpanded(false);
  };

  const handleSelect = (value: Language) => {
    setLanguage(value);
    setIsExpanded(false);
  };

  const currentLanguage = languages.find((lang) => lang.value === language);

  return (
    <>
      <Pressable onPress={handleOpen} style={styles.button}>
        <FontAwesome6 name="globe" size={14} color={colors.primary[theme]} />
        <Text style={styles.buttonText}>{currentLanguage?.value}</Text>
      </Pressable>

      <Modal visible={isExpanded} transparent onRequestClose={handleDismiss}>
        <Pressable style={styles.modalOverlay} onPress={handleDismiss}>
          <View style={styles.menuContainer}>
            {languages.map((lang, index) => (
              <Pressable
                key={lang.value}
                onPress={() => handleSelect(lang.value)}
                style={[
                  styles.menuItem,
                  index < languages.length - 1 && styles.menuItemBorder,
                  lang.value === currentLanguage?.value && styles.menuItemSelected,
                ]}>
                <Text
                  style={[
                    styles.menuText,
                    lang.value === currentLanguage?.value && styles.menuTextSelected,
                  ]}>
                  {lang.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

const createStyles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      width: 80,
      height: 32,
    },
    buttonText: {
      fontFamily: 'Lexend-Medium',
      fontSize: 12,
      textTransform: 'uppercase',
      color: colors.primary[theme],
    },
    modalOverlay: {
      flex: 1,
    },
    menuContainer: {
      position: 'absolute',
      right: 16,
      top: 64,
      backgroundColor: colors.surface[theme],
      borderRadius: 8,
      borderWidth: 1,
      borderColor: withOpacity(colors.muted[theme], 0.2),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
    menuItem: {
      paddingHorizontal: 20,
      paddingVertical: 14,
    },
    menuItemBorder: {
      borderBottomWidth: 1,
      borderBottomColor: colors.muted[theme],
    },
    menuItemSelected: {
      backgroundColor: withOpacity(colors.primary[theme], 0.1),
    },
    menuText: {
      fontFamily: 'Lexend-Medium',
      fontSize: 14,
      color: colors.text[theme],
    },
    menuTextSelected: {
      color: colors.primary[theme],
    },
  });
