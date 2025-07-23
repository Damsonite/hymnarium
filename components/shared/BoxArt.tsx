import { View } from 'react-native';

import Icon from '~/components/shared/Icon';

export default function BoxArt({ iconName }: { iconName: string }) {
  return (
    <View className="h-20 w-20 items-center justify-center rounded-2xl border-[1px] border-surface bg-grey">
      <Icon name={iconName} size={32} />
    </View>
  );
}
