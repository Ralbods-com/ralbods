'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { calcSelectYearMenuPosition } from '@/lib/function/style/calcSelectYearMenuPosition';
import { years } from '@/lib/data/date/years';
import { IoIosArrowUp } from 'react-icons/io';
import styles from './userMenu.module.scss';

export default function UserDetailSelectYearMenu({
  year, setYear,
}: {
  year: number, setYear: (year: number) => void,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const yearArray = isOpen ? years : [year];
  const yearIndex = years.indexOf(year);
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  const handleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles['select-year-container']}>
      <div className={styles['select-year-menu']} data-isOpen={`${isOpen}`}>
        <div
          className={styles['select-year-bg-container']}
          style={{ top: isOpen ? calcSelectYearMenuPosition(yearIndex) : '' }}
        >
          <motion.div
            className={styles['select-year-bg']}
            layout
            transition={spring}
          />
        </div>
        {yearArray.map((item) => (
          <div
            className={styles['select-year-tab']}
            style={{ color: item === year ? 'rgb(var(--white))' : '' }}
            onClick={() => setYear(item)}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        className={styles['select-year-menu-btn']}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={handleMenu}
      >
        <IoIosArrowUp />
      </motion.div>
    </div>
  );
}
