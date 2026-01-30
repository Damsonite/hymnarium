import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { View } from 'react-native';

import { useThemeStore } from '~/store/theme';
import { themes } from '~/utils/color';

export default function Theme({ children }: { children: React.ReactNode }) {
  const { setColorScheme } = useColorScheme();
  const { theme } = useThemeStore();

  useEffect(() => {
    setColorScheme(theme);
  }, [theme, setColorScheme]);

  return (
    <View className="flex-1 bg-background" style={themes[theme]}>
      {children}
    </View>
  );
}
