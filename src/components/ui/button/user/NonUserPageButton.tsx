import Link from 'next/link';
import styles from '../button.module.scss';

export default function NonUserPageButton() {
  return <Link href='/' className={styles['white-button']}>ホームに戻る</Link>;
}
