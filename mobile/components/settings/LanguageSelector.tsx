import MultiSelect from '~/components/settings/MultiSelect';
import SettingsOption from '~/components/settings/SettingsOption';
import { Language, languages } from '~/config';
import { useLanguageStore } from '~/store/languageStore';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguageStore();

  const currentOption = languages.find((option) => option.value === language);

  const handleLanguageSelect = (selectedLanguageValue: string) => {
    setLanguage(selectedLanguageValue as Language);
  };

  return (
    <SettingsOption label="Content language">
      <MultiSelect
        currentOption={currentOption}
        options={languages}
        handleOptionSelect={handleLanguageSelect}
      />
    </SettingsOption>
  );
}
