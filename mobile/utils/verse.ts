import { appConfig } from '~/config/appConfig';
import { Language } from '~/types';

type BookCode = 'Ps' | 'Mat' | 'John' | 'Acts' | 'Rom' | 'Phil' | '1John';

const BOOK_NAMES: Record<Language, Record<BookCode, string>> = {
  es: {
    Ps: 'Salmos',
    Mat: 'Mateo',
    John: 'Juan',
    Acts: 'Hechos',
    Rom: 'Romanos',
    Phil: 'Filipenses',
    '1John': '1 Juan',
  },

  en: {
    Ps: 'Psalms',
    Mat: 'Matthew',
    John: 'John',
    Acts: 'Acts',
    Rom: 'Romans',
    Phil: 'Philippians',
    '1John': '1 John',
  },
};

export function formatVerse(
  verseRef: string,
  language: Language = appConfig.defaultLanguage
): string {
  const parts = verseRef.split('.');

  if (parts.length < 3) {
    throw new Error(
      'Invalid verse reference format. Expected format: "Book.Chapter.StartVerse" or "Book.Chapter.StartVerse.EndVerse"'
    );
  }

  const [bookCode, chapter, startVerse, endVerse] = parts;

  const bookName = BOOK_NAMES[language][bookCode as BookCode];

  if (!bookName) {
    throw new Error(`Unknown book code: ${bookCode}`);
  }

  if (endVerse && endVerse !== startVerse) {
    return `${bookName} ${chapter}:${startVerse}-${endVerse}`;
  } else {
    return `${bookName} ${chapter}:${startVerse}`;
  }
}
