import MultiSelect from '~/components/settings/MultiSelect';
import SettingsOption from '~/components/settings/SettingsOption';
import { useThemeStore } from '~/store/theme';
import { Theme } from '~/types';

export default function ThemeSelector() {
  const { theme, setTheme } = useThemeStore();

  const themeOptions: { value: Theme; label: string }[] = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
  ];

  const currentOption = themeOptions.find((option) => option.value === theme);

  const handleThemeSelect = (selectedThemeValue: string) => {
    const newTheme = selectedThemeValue as Theme;
    setTheme(newTheme);
  };

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
