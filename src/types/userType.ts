import { DiaryType } from './diaryType';

export type UserShowType = {
  id: string,
  uid: string,
  name: string,
  image: string | null,
  achieveDateCount: number,
  Diaries: DiaryType[],
};

export type UserType = {
  id: string,
  uid: string,
  name: string,
  image: string | null,
  achieveDateCount: number,
};

export type UserAtomType = {
  id: string | null,
  uid: string | null,
  name: string | null,
  image: string | null,
};
