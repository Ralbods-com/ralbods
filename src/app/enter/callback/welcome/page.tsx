'use client';

import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { SiRabbitmq } from 'react-icons/si';
import { returnValidateUID } from '@/lib/function/validate/returnValidateUID';
import styles from './enterWellCome.module.scss';

export default function EnterWellComePage() {
  const [uid, setUid] = useState('');
  const [initialized, setInitialized] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef<any>(null);

  const handleChange = (e: { target: { value: any; }; }) => {
    const val = e.target.value;
    setUid(val);
    const eMessage = returnValidateUID(uid);
    setErrorMessage(eMessage);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      const eMessage = returnValidateUID(uid);
      setErrorMessage(eMessage);
    } else {
      setInitialized(true);
    }
  }, [uid]);

  return (
    <div className={styles['container']}>
      <div className={styles['all-box']}>
        <SiRabbitmq className={styles['logo-icon']} />
        <p className={styles['title']}>
          <span>Ralbods</span>
          へようこそ!!
        </p>
        <p className={styles['description']}>
          ユーザー名を決めてください
        </p>
        <div className={styles['form']}>
          <input
            className={styles['input-box']}
            placeholder='英数字で15文字以内'
            value={uid}
            onChange={handleChange}
            ref={inputRef}
          />
          {errorMessage.length !== 0 && (
            <p className={styles['error-text']}>{errorMessage}</p>
          )}
          <div className={styles['send-button']}>決定する</div>
        </div>
      </div>
    </div>
  );
}
