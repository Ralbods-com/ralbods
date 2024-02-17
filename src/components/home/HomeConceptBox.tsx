import { IconType } from 'react-icons';
import styles from './home.module.scss';

export default function HomeConceptBox({
  Icon, title, description,
}: {
  Icon: IconType, title: string, description: string,
}) {
  return (
    <div className={styles['concept-box']}>
      <div className={styles['concept-box-icon']}>
        <Icon />
      </div>
      <p className={styles['concept-box-title']}>
        {title}
      </p>
      <p className={styles['concept-box-text']}>
        {description}
      </p>
    </div>
  );
}
