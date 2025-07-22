import { View } from 'react-native';

import PlayerButton from '~/components/hymns/PlayerButton';
import TrackBar from '~/components/hymns/TrackBar';
import Loading from '~/components/shared/Loading';
import useAudio from '~/hooks/useAudio';
import { Hymn } from '~/types/hymn';

interface PlayerProps {
  id: Hymn['id'];
}

export default function Player({ id }: PlayerProps) {
  const { currentTime, duration, isPlaying, isLoading, handleSlidingComplete, handlePlayPause } =
    useAudio(id);

  return (
    <>
      <TrackBar
        currentTime={currentTime}
        duration={duration}
        onSlidingComplete={handleSlidingComplete}
        isLoading={isLoading}
      />

      <View className="items-center">
        {isLoading ? (
          <Loading />
        ) : (
          <PlayerButton icon={isPlaying ? 'pause' : 'play'} onPress={handlePlayPause} shaped />
        )}
      </View>
    </>
  );
}
