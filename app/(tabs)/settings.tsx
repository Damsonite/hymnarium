import { View } from 'react-native';

import LanguageSelector from '~/components/settings/LanguageSelector';
import ThemeSelector from '~/components/settings/ThemeSelector';
import SectionHeader from '~/components/shared/SectionHeader';

export default function Settings() {
  return (
    <View className="container">
      <SectionHeader title="Settings" largeTitle />

      <View className="mt-6">
        <LanguageSelector />
        <ThemeSelector />
      </View>
    </View>
  );
}
