import { DiaryType } from './diaryType';

export type UserShowType = {
  id: string,
  name: string,
  image: string | null,
  achieveDateCount: number,
  Diaries: DiaryType[],
};

export type UserType = {
  id: string,
  name: string,
  image: string | null,
  achieveDateCount: number,
};
