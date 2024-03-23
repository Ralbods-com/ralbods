import { atom } from 'jotai';
import { UserAtomType } from '@/types/userType';

export const invalidScrollState = atom(false);
export const currentUserState = atom<UserAtomType>({
  id: null, uid: null, name: null, image: null,
});
