import { useState } from 'react';
import { View } from 'react-native';

import SectionHeader from '~/components/shared/SectionHeader';
import VideoList from '~/components/videos/VideoList';

export default function Videos() {
  const [isAscending, setIsAscending] = useState(false);

  return (
    <View className="container">
      <SectionHeader title="All videos" isAscending={isAscending} setIsAscending={setIsAscending} />

      <VideoList isAscending={isAscending} />
    </View>
  );
}
