import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import { useEffect, useState } from 'react';

import { usePlaylistStore } from '~/store/playlist';
import { Hymn } from '~/types/hymn';
import { demos } from '~/utils/audioFiles';

export default function useAudio(hymnId: Hymn['id']) {
  const audioSource = hymnId ? demos[hymnId.toString()] : null;
  const player = useAudioPlayer(audioSource);
  const status = useAudioPlayerStatus(player);

  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    playlist,
    setCurrentHymn,
    initializePlaylist,
    nextTrack,
    previousTrack,
    toggleLoop,
    toggleRandomMode,
    isLooping,
    isRandomMode,
  } = usePlaylistStore();

  // Initialize playlist if empty
  useEffect(() => {
    if (playlist.length === 0) {
      initializePlaylist();
    }
  }, [playlist.length, initializePlaylist]);

  // Update loading state based on player status
  useEffect(() => {
    if (status.isLoaded) {
      setIsLoading(false);
    }
  }, [status.isLoaded]);

  // Set current hymn when hymnId changes
  useEffect(() => {
    if (hymnId) {
      setCurrentHymn(hymnId);
    }
  }, [hymnId, setCurrentHymn]);

  // Auto-play next track when current track ends
  useEffect(() => {
    if (
      status.isLoaded &&
      !status.playing &&
      status.currentTime > 0 &&
      status.currentTime >= (status.duration || 0) - 0.1
    ) {
      const nextId = nextTrack();
      if (nextId && nextId !== hymnId) {
        // Track ended, auto-advance handled by parent component
      }
    }
  }, [status.playing, status.currentTime, status.duration, status.isLoaded, hymnId, nextTrack]);

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

  const handleNext = () => {
    const nextId = nextTrack();
    return nextId;
  };

  const handlePrevious = () => {
    const prevId = previousTrack();
    return prevId;
  };

  const handleToggleLoop = () => {
    toggleLoop();
  };

  const handleToggleRandom = () => {
    toggleRandomMode();
  };

  if (!audioSource) {
    return {
      currentTime: 0,
      duration: 0,
      isPlaying: false,
      isLoading: false,
      isLooping,
      isRandomMode,
      handleSlidingComplete: () => {},
      handlePlayPause: () => {},
      handleNext: () => null,
      handlePrevious: () => null,
      handleToggleLoop: () => {},
      handleToggleRandom: () => {},
    };
  }

  return {
    currentTime: status.currentTime || 0,
    duration: status.duration || 0,
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
  };
}
