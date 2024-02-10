'use client';

import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import styles from './themeButton.module.scss';

export default function ColorThemeToggleButton() {
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
