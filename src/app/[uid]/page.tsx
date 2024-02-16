import ApplyFriendButton from '@/components/ui/button/user/ApplyFriendButton';
import { SiRabbitmq } from 'react-icons/si';
import UserDetail from '@/components/user/UserDetail';
import { getUserDataByuid } from '@/lib/function/user/getUserDataByuid';
import styles from './userPage.module.scss';

export default async function UserPage({ params }: { params: { uid: String } }) {
  const uid = String(params.uid);
  const res = await getUserDataByuid(uid);
  const userData = res.userDataByid;
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
            <ApplyFriendButton name={userData.name} />
          </div>
        </div>
        <div className={styles['user-contents-area']}>
          <UserDetail userData={userData} />
        </div>
      </div>
    </div>
  );
}
