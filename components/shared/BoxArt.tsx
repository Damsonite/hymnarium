import { View } from 'react-native';

import Icon from '~/components/shared/Icon';

interface BoxArtProps {
  iconName: string;
  size?: number;
}

export default function BoxArt({ iconName, size = 72 }: BoxArtProps) {
  return (
    <View
      className="items-center justify-center rounded-2xl border-[1px] border-gray-300 bg-surface dark:border-gray-700"
      style={{ width: size, aspectRatio: 1 }}>
      <Icon name={iconName} size={32} />
    </View>
  );
}
