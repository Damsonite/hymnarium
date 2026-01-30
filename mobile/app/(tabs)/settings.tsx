import { View } from 'react-native';

import AppInfo from '~/components/settings/AppInfo';
import Contact from '~/components/settings/Contact';
import LanguageSelector from '~/components/settings/LanguageSelector';
import ThemeSelector from '~/components/settings/ThemeSelector';
import SectionHeader from '~/components/shared/SectionHeader';

export default function Settings() {
  return (
    <View className="container">
      <SectionHeader title="Settings" largeTitle />

      <View className="mb-12 mt-6">
        <LanguageSelector />
        <ThemeSelector />
      </View>

      <Contact />

      <AppInfo />
    </View>
  );
}
