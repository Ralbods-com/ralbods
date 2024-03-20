import { usingPaths } from '@/lib/data/path/usingPaths';
import { uidIsNotSignRegex, uidIsTextRegex } from '@/lib/regex/regex';

export const returnValidateUID = (uid: string) => {
  if (uid.length <= 1) {
    return '2文字以上で入力してください';
  } else if (uidIsTextRegex.test(uid)) {
    return 'ユーザー名を数字のみにすることはできません';
  } else if (!uidIsNotSignRegex.test(uid)) {
    return 'ユーザー名には半角英数字とアンダースコア（ _ ）のみを使用できます';
  } else if (usingPaths.includes(uid)) {
    return 'このユーザー名は使用できません';
  } else {
    return '';
  }
};
