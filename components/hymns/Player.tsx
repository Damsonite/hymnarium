import { useRouter } from 'expo-router';
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
  const router = useRouter();

  const {
    currentTime,
    duration,
    isPlaying,
    isLoading,
    isLooping,
    isRandomMode,
    handleSlidingComplete,
    handlePlayPause,
    handleNext,
    handlePrevious,
    handleToggleLoop,
    handleToggleRandom,
  } = useAudio(id);

  const onNext = () => {
    const nextId = handleNext();
    if (nextId) {
      router.replace(`/hymns/${nextId}`);
    }
  };

  const onPrevious = () => {
    const prevId = handlePrevious();
    if (prevId) {
      router.replace(`/hymns/${prevId}`);
    }
  };

  return (
    <>
      <TrackBar
        currentTime={currentTime}
        duration={duration}
        onSlidingComplete={handleSlidingComplete}
        isLoading={isLoading}
      />

      <>
        {isLoading ? (
          <Loading />
        ) : (
          <View className="mx-2 flex-row items-center justify-center">
            {/* Random Mode Button */}
            <PlayerButton icon="random" onPress={handleToggleRandom} active={isRandomMode} />

            {/* Previous Button */}
            <PlayerButton icon="step-backward" onPress={onPrevious} />

            {/* Play/Pause Button */}
            <PlayerButton icon={isPlaying ? 'pause' : 'play'} onPress={handlePlayPause} shaped />

            {/* Next Button */}
            <PlayerButton icon="step-forward" onPress={onNext} />

            {/* Loop Button */}
            <PlayerButton icon="repeat" onPress={handleToggleLoop} active={isLooping} />
          </View>
        )}
      </>
    </>
  );
}
