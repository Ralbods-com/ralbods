import { tags } from '@/lib/data/tag/tags';
import { TagType } from '@/types/tagType';

export const returnTagData = (name: string): TagType => {
  const tagData = tags.find((tag) => tag.name === name);

  if (tagData) {
    return tagData;
  } else {
    return { name, text: name, img: '' };
  }
};
