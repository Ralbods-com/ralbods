// import { exampleData } from '@/lib/data/example/exampleData';
import UserDetail from '@/components/user/UserDetail';
import UserHeader from '@/components/ui/button/header/user/UserHeader';
import NonUserPageButton from '@/components/ui/button/user/NonUserPageButton';
import UserDiaryGrassGauge from '@/components/ui/gauge/user/UserDiaryGrassGauge';
import { SiRabbitmq } from 'react-icons/si';
import { getUserDataByuid } from '@/lib/function/user/getUserDataByuid';
import styles from './userPage.module.scss';

export default async function UserPage({
  params,
}: {
  params: { uid: String }
}) {
  const uid = String(params.uid);
  const res = await getUserDataByuid(uid);
  const userData = res.userDataByid;
  // const userData = exampleData;

  if (!userData) {
    return (
      <div className={styles['non-user-container']}>
        <div className={styles['non-user-icon']}>
          <SiRabbitmq />
        </div>
        <p className={styles['non-user-text']}>
          ユーザーが見つかりませんでした…
        </p>
        <NonUserPageButton />
      </div>
    );
  }

  return (
    <div className={styles['screen']}>
      <div className={styles['container']}>
        <UserHeader userData={userData} />
        <div className={styles['user-contents-area']}>
          <div className={styles['user-grass-gauge-container']}>
            <UserDiaryGrassGauge />
          </div>
          <UserDetail userData={userData} />
        </div>
      </div>
    </div>
  );
}
