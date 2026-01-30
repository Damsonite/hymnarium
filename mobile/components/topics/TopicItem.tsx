import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

import Icon from '~/components/shared/Icon';
import { Topic } from '~/types';

export default function TopicItem({ item }: { item: Topic }) {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: '/topics/[id]',
      params: { id: item.id, title: item.name },
    });
  };

  return (
    <TouchableOpacity
      className="mb-2 h-20 w-full flex-row items-center rounded-xl p-4"
      onPress={handlePress}>
      <Icon name="folder" size={28} />

      <View className="ml-2 justify-center gap-2 px-2">
        <Text className="font-lxmedium text-text" numberOfLines={1}>
          {item.name}
        </Text>

        <Text className="font-lxmedium text-sm text-primary" numberOfLines={1}>
          {`${item.hymn_count} himnos`}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
