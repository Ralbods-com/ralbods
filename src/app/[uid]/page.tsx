import { getUserDataByuid } from '@/lib/function/user/getUserDataByuid';
import { exampleData } from '@/lib/data/example/exampleData';
import UserDetail from '@/components/user/UserDetail';
import UserHeader from '@/components/ui/button/header/user/UserHeader';
import styles from './userPage.module.scss';

export default async function UserPage({ params }: { params: { uid: String } }) {
  const uid = String(params.uid);
  const res = await getUserDataByuid(uid);
  const userData = res.userDataByid;
  return (
    <div className={styles['screen']}>
      <div className={styles['container']}>
        <UserHeader userData={userData} />
        <div className={styles['user-contents-area']}>
          <UserDetail userData={userData} />
        </div>
      </div>
    </div>
  );
}
