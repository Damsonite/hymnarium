import { Text, TouchableOpacity, View } from 'react-native';

import { appConfig } from '~/config/appConfig';
import { handleLinkPress } from '~/utils/url';

export default function AppInfo() {
  return (
    <View className="mb-6 mt-auto items-center space-y-3">
      <Text className="font-lxregular text-sm text-muted">
        {appConfig.app.name} v{appConfig.app.version}
      </Text>

      <Text className="font-lxregular text-sm text-muted">
        © {appConfig.app.year} {appConfig.app.author}
      </Text>

      <TouchableOpacity onPress={() => handleLinkPress(appConfig.links.repository)}>
        <Text className="font-lxregular text-sm text-muted">
          Developed using <Text className="font-lxmedium text-primary">Hymnarium</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
