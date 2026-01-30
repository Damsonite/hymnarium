import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface FavoritesState {
  favorites: Set<number>;
  favoritesIds: number[];

  toggleFavorite: (hymnId: number) => void;
  isFavorite: (hymnId: number) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: new Set<number>(),
      favoritesIds: [],

      toggleFavorite: (hymnId: number) =>
        set((state) => {
          const newFavorites = new Set(state.favorites);

          if (newFavorites.has(hymnId)) {
            newFavorites.delete(hymnId);
          } else {
            newFavorites.add(hymnId);
          }

          const newFavoritesIds = Array.from(newFavorites).sort((a, b) => a - b);

          return {
            favorites: newFavorites,
            favoritesIds: newFavoritesIds,
          };
        }),

      isFavorite: (hymnId: number) => {
        const state = get();
        return state.favorites.has(hymnId);
      },
    }),
    {
      name: 'hymnarium-favorites',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        favorites: Array.from(state.favorites),
      }),
      onRehydrateStorage: () => (state) => {
        if (state && Array.isArray(state.favorites)) {
          const favoritesSet = new Set(state.favorites);
          const favoritesIds = Array.from(favoritesSet).sort((a, b) => a - b);
          state.favorites = favoritesSet;
          state.favoritesIds = favoritesIds;
        }
      },
    }
  )
);
