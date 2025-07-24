import { Text, View } from 'react-native';

import BoxArt from '~/components/shared/BoxArt';
import Marquee from '~/components/shared/Marquee';
import { Hymn } from '~/types/hymn';

interface ContentInfoProps {
  data: Hymn | null;
}

export default function ContentInfo({ data }: ContentInfoProps) {
  return (
    <View className="mx-4 flex-1 flex-row items-center gap-2">
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
  );
}
