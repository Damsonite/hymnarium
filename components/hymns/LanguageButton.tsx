import { Text, TouchableOpacity } from 'react-native';

import { useLanguageStore } from '~/store/language';

export default function LanguageButton() {
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <TouchableOpacity
      onPress={toggleLanguage}
      className="h-9 w-11 items-center justify-center rounded-lg border border-primary">
      <Text className="font-lxmedium text-sm text-primary">{language === 'en' ? 'ES' : 'EN'}</Text>
    </TouchableOpacity>
  );
}
