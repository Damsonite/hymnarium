import { View } from 'react-native';

import TrackBar from '~/components/hymns/TrackBar';
import { Hymn } from '~/types/hymn';

interface PlayerProps {
  data?: Hymn | null;
  isLoading?: boolean;
}

export default function Player({ data, isLoading = false }: PlayerProps) {
  const disabled = isLoading || !data;

  return (
    <View>
      <TrackBar
        currentTime={0}
        duration={60}
        handleSlidingComplete={() => {}}
        disabled={disabled}
      />
    </View>
  );
}
