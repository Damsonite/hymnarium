import MultiSelect from '~/components/settings/MultiSelect';
import SettingsOption from '~/components/settings/SettingsOption';
import { useLanguageStore } from '~/store/language';
import { Language } from '~/types';

interface LanguageOption {
  value: Language;
  label: string;
}

export const languageOptions: LanguageOption[] = [
  { value: 'es', label: 'Español (ES)' },
  { value: 'ek', label: 'Embera Katio (EK)' },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguageStore();

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
