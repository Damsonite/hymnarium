import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { Appearance } from 'react-native';

import MultiSelect from '~/components/settings/MultiSelect';
import SettingsOption from '~/components/settings/SettingsOption';
import { useThemeStore } from '~/store/theme';
import { Theme } from '~/types';

export default function ThemeSelector() {
  const { theme, setTheme } = useThemeStore();
  const { setColorScheme } = useColorScheme();

  const themeOptions: { value: Theme; label: string }[] = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
  ];

  const currentOption = themeOptions.find((option) => option.value === theme);

  const handleThemeSelect = (selectedThemeValue: string) => {
    const newTheme = selectedThemeValue as Theme;
    setTheme(newTheme);
  };

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
    <SettingsOption label="Theme">
      <MultiSelect
        currentOption={currentOption}
        options={themeOptions}
        handleOptionSelect={handleThemeSelect}
      />
    </SettingsOption>
  );
}
