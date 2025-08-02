import { Text, TouchableOpacity, View } from 'react-native';

import Icon from '~/components/shared/Icon';
import { appConfig } from '~/config/appConfig';
import { handleLinkPress } from '~/utils/url';

export default function Contact() {
  const socialLinks = appConfig.links.social || [];

  return (
    <View className="items-center">
      <Text className="mb-4 font-lxmedium text-xl text-text">Contact</Text>

      {
        <View className="flex-row flex-wrap justify-center gap-4">
          {socialLinks.map((link) => (
            <TouchableOpacity
              key={link.label}
              onPress={() => handleLinkPress(link.url)}
              className="flex-row items-center justify-center gap-2 rounded-2xl border border-surface bg-secondary px-3 py-2">
              <Icon name={link.icon} size={24} color="background" />

              <Text className="font-lxregular text-sm text-background">{link.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      }
    </View>
  );
}
