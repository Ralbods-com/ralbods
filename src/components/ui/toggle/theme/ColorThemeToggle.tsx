'use client';

import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import styles from './themeToggle.module.scss';

export default function ColorThemeToggle() {
  return (
    <div className={styles['toggle-container']}>
      <div className={styles['theme-icon-focus']}>
        <MdOutlineLightMode />
      </div>
      <div className={styles['theme-icon']}>
        <MdOutlineDarkMode />
      </div>
    </div>
  );
}
