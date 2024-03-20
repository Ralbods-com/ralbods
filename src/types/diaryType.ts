import type { TagApiType } from './tagType';
import type { UserShowType } from './userType';

export type DiaryType = {
  id: number,
  date: string,
  title: string,
  body: string | null,
  createdAt: string,
  publishedAt: string | null,
  updatedAt: string,
  userId: string,
  mind: string,
  tags: TagApiType[],
};

export type DiaryShowType = {
  id: number,
  date: string,
  title: string,
  body: string | null,
  createdAt: string,
  publishedAt: string | null,
  updatedAt: string,
  userId: string,
  mind: number,
  tags: TagApiType[],
  user: UserShowType,
};
