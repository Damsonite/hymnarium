import { Text, TouchableOpacity } from 'react-native';

import { useLanguageStore } from '~/store/language';
import { Language } from '~/types';

export default function LanguageButton() {
  const { language, setLanguage } = useLanguageStore();

  const nextLanguage: Language = language === 'es' ? 'ek' : 'es';

  const handlePress = () => {
    setLanguage(nextLanguage);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="h-9 w-11 items-center justify-center rounded-lg border border-primary">
      <Text className="font-lxmedium text-sm text-primary">{nextLanguage.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}
