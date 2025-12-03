import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = 'de' | 'en' | 'fr' | 'ru';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'fr', // Default to French as per prompt
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'aqua-rooks-language', // unique name for localStorage key
    }
  )
);
