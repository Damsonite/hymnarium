import { View } from 'react-native';

import Icon from '~/components/shared/Icon';

interface BoxArtProps {
  iconName: string;
}

export default function BoxArt({ iconName }: BoxArtProps) {
  return (
    <View className="size-20  items-center justify-center rounded-2xl border-[1px] border-gray-300 bg-surface dark:border-gray-700">
      <Icon name={iconName} size={32} />
    </View>
  );
}
