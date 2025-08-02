import MultiSelect from '~/components/settings/MultiSelect';
import SettingsOption from '~/components/settings/SettingsOption';
import { appConfig } from '~/config/appConfig';
import { useLanguageStore } from '~/store/language';
import { Language } from '~/types';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguageStore();

  const languageOptions = appConfig.languages;
  const currentOption = languageOptions.find((option) => option.value === language);

  const handleLanguageSelect = (selectedLanguageValue: string) => {
    setLanguage(selectedLanguageValue as Language);
  };

  return (
    <SettingsOption label="Content language">
      <MultiSelect
        currentOption={currentOption}
        options={languageOptions}
        handleOptionSelect={handleLanguageSelect}
      />
    </SettingsOption>
  );
}
