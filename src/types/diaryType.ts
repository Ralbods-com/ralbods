import { TagApiType } from './tagType';

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
