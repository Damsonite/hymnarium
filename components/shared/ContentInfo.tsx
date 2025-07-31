import { Text, View } from 'react-native';

import BoxArt from '~/components/shared/BoxArt';
import Marquee from '~/components/shared/Marquee';

interface ContentInfoProps {
  title: string;
  subtitle?: string;
}

export default function ContentInfo({ title, subtitle }: ContentInfoProps) {
  return (
    <View className="mx-4 flex-1 flex-row items-center gap-2">
      <BoxArt iconName="music" />

      <View className="ml-1 flex-1 overflow-hidden">
        <Marquee text={title} className="font-lxmedium text-[18px] text-text" />

        <Text className="font-lxmedium text-text opacity-60" numberOfLines={1}>
          {subtitle || 'Unknown'}
        </Text>
      </View>
    </View>
  );
}
