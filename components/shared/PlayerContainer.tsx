import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BoxArt from '~/components/shared/BoxArt';
import Marquee from '~/components/shared/Marquee';
import { Hymn } from '~/types/hymn';

interface PlayerContainerProps {
  data: Hymn;
}

export default function PlayerContainer({ data }: PlayerContainerProps) {
  const insets = useSafeAreaInsets();

  return (
    <View className="surface mb-2 pt-4 shadow-lg" style={{ paddingBottom: insets.bottom }}>
      <View className="mx-4 flex-row items-center gap-2">
        <BoxArt iconName="music" />

        <View className="ml-1 flex-1 overflow-hidden">
          <Marquee text={data?.title ?? ''} className="font-lxmedium text-[18px] text-text" />

          {data?.author_name && (
            <Text className="font-lxmedium text-text opacity-60" numberOfLines={1}>
              {data.author_name}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}
