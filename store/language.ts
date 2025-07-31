import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { Language } from '~/types';

export interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: 'es',

      setLanguage: (language: Language) =>
        set(() => ({
          language,
        })),

      toggleLanguage: () =>
        set((state) => ({
          language: state.language === 'es' ? 'ek' : 'es',
        })),
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
