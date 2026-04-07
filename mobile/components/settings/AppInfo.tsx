import { Text, TouchableOpacity, View } from 'react-native';

import { app, links } from '~/config/appConfig';
import { handleLinkPress } from '~/utils/url';

export default function AppInfo() {
  return (
    <View className="mb-6 mt-auto items-center space-y-3">
      <Text className="font-lxregular text-xs text-muted">
        {app.name} v{app.version}
      </Text>

      <Text className="font-lxregular text-xs text-muted">
        © {app.year} {app.author}
      </Text>

      <TouchableOpacity onPress={() => handleLinkPress(links.repository)}>
        <Text className="font-lxregular text-xs text-muted">
          Developed using <Text className="font-lxmedium text-primary">Hymnarium</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
