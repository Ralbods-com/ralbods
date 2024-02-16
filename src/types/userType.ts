import { DiaryType } from './diaryType';

export type UserType = {
  id: string,
  name: string,
  image: string | null,
  achieveDateCount: number,
  diaries: DiaryType[],
};
