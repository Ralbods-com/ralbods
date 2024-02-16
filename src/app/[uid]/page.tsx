import ApplyFriendButton from '@/components/ui/button/user/ApplyFriendButton';
import { exampleData } from '@/lib/data/example/exampleData';
import { SiRabbitmq } from 'react-icons/si';
import UserDetail from '@/components/user/UserDetail';
import styles from './userPage.module.scss';

export default function UserPage() {
  const userData = exampleData;

  return (
    <div className={styles['screen']}>
      <div className={styles['container']}>
        <div className={styles['user-header']}>
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
            <ApplyFriendButton id={userData.id} />
          </div>
        </div>
        <div className={styles['user-contents-area']}>
          <UserDetail userData={userData} />
        </div>
      </div>
    </div>
  );
}
