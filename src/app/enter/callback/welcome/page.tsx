'use client';

import {
  useEffect, useRef, useState,
} from 'react';
import { useRouter } from 'next/navigation';
import { SiRabbitmq } from 'react-icons/si';
import { returnValidateUID } from '@/lib/function/validate/returnValidateUID';
import { useAtom } from 'jotai';
import { currentUserState } from '@/atoms/atoms';
import { UserType } from '@/types/userType';
import styles from './enterWellCome.module.scss';

export default function EnterWellComePage() {
  const [currentUser, setCurrentUser] = useAtom(currentUserState);
  const router = useRouter();
  const [uid, setUid] = useState('');
  const [initialized, setInitialized] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<any>(null);

  const handleChange = (e: { target: { value: any; }; }) => {
    const val = e.target.value;
    setUid(val);
    const eMessage = returnValidateUID(uid);
    setErrorMessage(eMessage);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    await fetch(`${process.env.NEXT_PUBLIC_URL}/user/uid`, {
      method: 'PATCH',
      body: JSON.stringify({ uid }),
    })
      .then(async (res) => {
        const data = await res.json();
        const userData: UserType = data.res;
        setCurrentUser({
          id: userData.id, uid: userData.uid, name: userData.name, image: userData.image,
        });

        router.push(`/${currentUser.uid}`);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        if (e.status === 409) {
          setErrorMessage('このユーザー名は使用できません');
        }
      });
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
          {(errorMessage.length === 0 && uid.length !== 0 && !isLoading) ? (
            <div
              className={styles['send-button']}
              onClick={handleSubmit}
            >
              決定する
            </div>
          ) : (
            <div className={styles['send-disabled-button']}>決定する</div>
          )}
        </div>
      </div>
    </div>
  );
}
