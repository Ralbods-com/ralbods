'use client';

import { SiRabbitmq } from 'react-icons/si';
import { UserShowType } from '@/types/userType';
import { use } from 'react';
import styles from './userHeader.module.scss';
// import ApplyFriendButton from '../../user/ApplyFriendButton';

export default function UserHeader({
  userData,
}: {
  userData: UserShowType,
}) {
  console.log(userData);
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
      {/* <ApplyFriendButton id={userData.id} /> */}
    </div>
  );
}
