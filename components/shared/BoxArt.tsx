import { View } from 'react-native';

import Icon, { IconName } from '~/components/shared/Icon';

export default function BoxArt({ iconName }: { iconName: IconName }) {
  return (
    <View className="bg-grey h-20 w-20 items-center justify-center rounded-2xl border-[1px] border-surface">
      <Icon name={iconName} size={32} />
    </View>
  );
}
