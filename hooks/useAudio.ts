import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import { useEffect, useState } from 'react';

import { Hymn } from '~/types/hymn';
import { demos } from '~/utils/audioFiles';

export default function useAudio(hymnId: Hymn['id']) {
  const audioSource = hymnId ? demos[hymnId.toString()] : null;
  const player = useAudioPlayer(audioSource);
  const status = useAudioPlayerStatus(player);

  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (status.isLoaded) {
      setIsLoading(false);
    }
  }, [status.isLoaded]);

  const handlePlayPause = () => {
    if (isLoading) return;

    if (player && audioSource) {
      if (status.playing) {
        player.pause();
        setIsPlaying(false);
      } else {
        player.play();
        setIsPlaying(true);
      }
    }
  };

  const handleSlidingComplete = (value: number) => {
    if (player && audioSource) {
      player.seekTo(value);
    }
  };

  if (!audioSource) {
    return {
      currentTime: 0,
      duration: 0,
      isPlaying: false,
      isLoading: false,
      handleSlidingComplete: () => {},
      handlePlayPause: () => {},
    };
  }

  return {
    currentTime: status.currentTime || 0,
    duration: status.duration || 0,
    isPlaying,
    isLoading,
    handleSlidingComplete,
    handlePlayPause,
  };
}
