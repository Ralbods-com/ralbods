import CreateDiaryFormArea from '@/components/ui/form/diary/CreateDiaryFormArea';
import styles from './diaryCreate.module.scss';

export default function DiaryCreatePage() {
  return (
    <div className={styles['all-container']}>
      <CreateDiaryFormArea />
    </div>
  );
}
