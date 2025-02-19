import { DiaryShowType, DiaryType } from '@/types/diaryType';
import { UserShowType } from '@/types/userType';

const exampleDiariesData = <DiaryType[]>[
  {
    id: 1, title: 'テンションぶちあげ Diary', body: '最高の1日', publishedAt: '2024-02-17T15:51:20.395Z', createdAt: '2024-02-17T15:51:20.395Z', updatedAt: '2024-02-17T15:51:20.395Z', userId: 'hasuro', mind: 4, date: '2024-02-17', tags: [],
  },
  {
    id: 2, title: 'テンションちょい上げ Diary', body: '', publishedAt: '2024-02-15T15:51:20.395Z', createdAt: '2024-02-15T15:51:20.395Z', updatedAt: '2024-02-15T15:51:20.395Z', userId: 'hasuro', mind: 3, date: '2024-02-15', tags: [{ id: 2, name: 'react' }, { id: 1, name: 'nextjs' }],
  },
  {
    id: 3, title: '普通 Diary', body: '# Hey\n## kk\n### kkaaは\n- あいうえおかきくけこさしすせそ\n1. kkafda\n```\nkkkkkkkk\n```\nkkk`kkk`\n> kkka', publishedAt: '2024-01-15T15:51:20.395Z', createdAt: '2024-01-15T15:51:20.395Z', updatedAt: '2024-01-15T15:51:20.395Z', userId: 'hasuro', mind: 2, date: '2024-01-15', tags: [{ id: 1, name: 'nextjs' }],
  },
  {
    id: 4, title: 'テンションちょい下げ Diary', body: '# Hey\n## kk\n### kkaaは\n- あいうえおかきくけこさしすせそ\n1. kkafda\n```\nkkkkkkkk\n```\nkkk`kkk`\n> kkka', publishedAt: '2024-01-15T15:51:20.395Z', createdAt: '2024-01-15T15:51:20.395Z', updatedAt: '2024-01-15T15:51:20.395Z', userId: 'hasuro', mind: 1, date: '2024-01-15', tags: [{ id: 1, name: 'nextjs' }],
  },
  {
    id: 5, title: 'テンションマジ無理 Diary', body: '# Hey\n## kk\n### kkaaは\n- あいうえおかきくけこさしすせそ\n1. kkafda\n```\nkkkkkkkk\n```\nkkk`kkk`\n> kkka', publishedAt: '2024-01-15T15:51:20.395Z', createdAt: '2024-01-15T15:51:20.395Z', updatedAt: '2024-01-15T15:51:20.395Z', userId: 'hasuro', mind: 0, date: '2024-01-15', tags: [{ id: 1, name: 'nextjs' }],
  },
  {
    id: 6, title: 'Third Diary', body: '# yeeeeer\n1. kkk', publishedAt: '2023-01-15T15:51:20.395Z', createdAt: '2023-01-15T15:51:20.395Z', updatedAt: '2023-01-15T15:51:20.395Z', userId: 'hasuro', mind: 1, date: '2023-01-15', tags: [{ id: 1, name: 'nextjs' }],
  },
];

export const exampleData = <UserShowType>{
  id: 'ralbods',
  name: 'Ralbods',
  image: null,
  achieveDateCount: 100,
  Diaries: exampleDiariesData,
};

const exampleUserData = <UserShowType>{
  id: 'ralbods',
  name: 'Ralbods',
  image: null,
  achieveDateCount: 100,
};

export const exampleDiaryData = <DiaryShowType>{
  id: 4, title: 'テンションちょい下げ Diary', body: '# Hey\n## kk\n### kkaaは\n- あいうえおかきくけこさしすせそ\n1. kkafda\n```\nkkkkkkkk\n```\nkkk`kkk`\n> kkka', publishedAt: '2024-01-15T15:51:20.395Z', createdAt: '2024-01-15T15:51:20.395Z', updatedAt: '2024-01-15T15:51:20.395Z', userId: 'hasuro', mind: 0, date: '2024-01-15', tags: [{ id: 1, name: 'nextjs' }], user: exampleUserData,
};
