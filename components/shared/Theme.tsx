import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { Appearance, View } from 'react-native';

import { useThemeStore } from '~/store/theme';
import { themes } from '~/utils/color';

export default function Theme({ children }: { children: React.ReactNode }) {
  const { colorScheme, setColorScheme } = useColorScheme();
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme === 'system') {
      const systemColorScheme = Appearance.getColorScheme() || 'light';
      setColorScheme(systemColorScheme);

      const subscription = Appearance.addChangeListener(({ colorScheme }) => {
        setColorScheme(colorScheme || 'light');
      });

      return () => subscription.remove();
    } else {
      setColorScheme(theme);
    }
  }, [theme, setColorScheme]);

  return (
    <View
      className="flex-1 bg-background"
      style={themes[colorScheme === 'dark' ? 'dark' : 'light']}>
      {children}
    </View>
  );
}
