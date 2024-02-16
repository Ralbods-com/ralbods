import CreateDiaryFormArea from '@/components/ui/form/diary/CreateDiaryFormArea';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import styles from './diaryCreate.module.scss';

export default async function DiaryCreatePage() {
  const session = await getServerSession(authOptions);
  return (
    <div className={styles['all-container']}>
      <CreateDiaryFormArea session={session} />
    </div>
  );
}
