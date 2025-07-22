import { create } from 'zustand';

import { demos } from '~/utils/audioFiles';

const getAvailableHymnIds = (): number[] => {
  return Object.keys(demos)
    .map(Number)
    .sort((a, b) => a - b);
};

export interface PlaylistState {
  currentHymnId: number | null;
  playlist: number[];
  currentIndex: number;
  isLooping: boolean;
  isRandomMode: boolean;
  playedIndices: number[];

  setCurrentHymn: (id: number) => void;
  setPlaylist: (playlist: number[]) => void;
  initializePlaylist: (hymnIds?: number[]) => void;
  nextTrack: () => number | null;
  previousTrack: () => number | null;
  toggleLoop: () => void;
  toggleRandomMode: () => void;
  reset: () => void;
}

export const usePlaylistStore = create<PlaylistState>((set, get) => ({
  currentHymnId: null,
  playlist: [],
  currentIndex: 0,
  isLooping: false,
  isRandomMode: false,
  playedIndices: [],

  setCurrentHymn: (id: number) =>
    set((state) => {
      const index = state.playlist.indexOf(id);
      return {
        currentHymnId: id,
        currentIndex: index !== -1 ? index : 0,
      };
    }),

  setPlaylist: (playlist: number[]) =>
    set({
      playlist,
      currentIndex: 0,
      playedIndices: [],
    }),

  initializePlaylist: (hymnIds?: number[]) =>
    set({
      playlist: hymnIds || getAvailableHymnIds(),
      currentIndex: 0,
      playedIndices: [],
    }),

  nextTrack: () => {
    const state = get();
    const { playlist, currentIndex, isRandomMode, isLooping, playedIndices } = state;

    if (playlist.length === 0) return null;

    let nextIndex: number;

    if (isRandomMode) {
      // If all tracks have been played, reset or loop
      if (playedIndices.length >= playlist.length) {
        if (isLooping) {
          set({ playedIndices: [] });
          nextIndex = Math.floor(Math.random() * playlist.length);
        } else {
          return null;
        }
      } else {
        // Find unplayed tracks
        const unplayedIndices = playlist
          .map((_, index) => index)
          .filter((index) => !playedIndices.includes(index));
        nextIndex = unplayedIndices[Math.floor(Math.random() * unplayedIndices.length)];
      }

      set((state) => ({
        currentIndex: nextIndex,
        currentHymnId: playlist[nextIndex],
        playedIndices: [...state.playedIndices, nextIndex],
      }));
    } else {
      // Sequential mode
      if (currentIndex >= playlist.length - 1) {
        if (isLooping) {
          nextIndex = 0;
        } else {
          return null;
        }
      } else {
        nextIndex = currentIndex + 1;
      }

      set({
        currentIndex: nextIndex,
        currentHymnId: playlist[nextIndex],
      });
    }

    return playlist[nextIndex];
  },

  previousTrack: () => {
    const state = get();
    const { playlist, currentIndex, isLooping } = state;

    if (playlist.length === 0) return null;

    let prevIndex: number;

    if (currentIndex <= 0) {
      if (isLooping) {
        prevIndex = playlist.length - 1;
      } else {
        return null;
      }
    } else {
      prevIndex = currentIndex - 1;
    }

    set({
      currentIndex: prevIndex,
      currentHymnId: playlist[prevIndex],
    });

    return playlist[prevIndex];
  },

  toggleLoop: () => set((state) => ({ isLooping: !state.isLooping })),

  toggleRandomMode: () =>
    set((state) => ({
      isRandomMode: !state.isRandomMode,
      playedIndices: [],
    })),

  reset: () =>
    set({
      currentHymnId: null,
      currentIndex: 0,
      playedIndices: [],
    }),
}));
