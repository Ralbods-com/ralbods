'use client';

import { UserShowType } from '@/types/userType';
import { useSession } from 'next-auth/react';
import { SiRabbitmq } from 'react-icons/si';
import styles from './userHeader.module.scss';
import ApplyFriendButton from '../../user/ApplyFriendButton';
import UserCreateDiaryButton from '../../user/UserCreateDiaryButton';

export default function UserHeader({
  userData,
}: {
  userData: UserShowType,
}) {
  const { data: session } = useSession();

  return (
    <div className={styles['user-header']}>
      <div className={styles['user-header-left']}>
        {userData.image ? (
          <img
            src={userData.image}
            alt={userData.name}
            className={styles['user-header-icon']}
          />
        ) : (
          <div className={styles['user-header-icon-default']}>
            <SiRabbitmq />
          </div>
        )}
        <p className={styles['user-header-name']}>
          {userData.name}
        </p>
      </div>
      {(session?.user) ? (
        <UserCreateDiaryButton />
      ) : (
        <ApplyFriendButton id={userData.id} />
      )}
    </div>
  );
}
