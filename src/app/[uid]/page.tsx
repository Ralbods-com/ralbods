// import { exampleData } from '@/lib/data/example/exampleData';
import UserDetail from '@/components/user/UserDetail';
import UserHeader from '@/components/ui/button/header/user/UserHeader';
import NonUserPageButton from '@/components/ui/button/user/NonUserPageButton';
import UserDiaryGrassGauge from '@/components/ui/gauge/user/UserDiaryGrassGauge';
import { SiRabbitmq } from 'react-icons/si';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth/next';
import styles from './userPage.module.scss';

const getDiary = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/${id}`, {
      method: 'GET',
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};

export default async function UserPage({
  params,
}: {
  params: { uid: String }
}) {
  const session = await getServerSession(authOptions);
  const uid = String(params.uid);
  if (session?.user) {
    const userId: string = session.user.id;
    // userIdを使用するコード
    const res = await getDiary(userId);
    const userData = res.userDataByid;
    return (
      <div className={styles['screen']}>
        <div className={styles['container']}>
          <UserHeader userData={userData} />
          <div className={styles['user-contents-area']}>
            <div className={styles['user-grass-gauge-container']}>
              <UserDiaryGrassGauge userData={userData} />
            </div>
            <UserDetail userData={userData} />
          </div>
        </div>
      </div>
    );
  } else {
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
}
// return (
//   <div className={styles['screen']}>
//     <div className={styles['container']}>
//       <UserHeader userData={userData} />
//       <div className={styles['user-contents-area']}>
//         <div className={styles['user-grass-gauge-container']}>
//           <UserDiaryGrassGauge />
//         </div>
//         <UserDetail userData={userData} />
//       </div>
//     </div>
//   </div>
// );
