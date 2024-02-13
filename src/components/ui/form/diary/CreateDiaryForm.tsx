'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './createDiaryForm.module.scss';

export default function CreateDiaryForm({
  val,
  setVal,
  cursorPos,
  setCursorPos,
  focusTrigger,
}: {
  val: string;
  setVal: (val: string) => void;
  cursorPos: number;
  setCursorPos: (pos: number) => void;
  focusTrigger: number;
}) {
  const [height, setHeight] = useState('auto');
  const textareaRef = useRef<any>(null);

  const handleValChange = (e: { target: { value: string } }) => {
    setVal(e.target.value);
    const element = textareaRef.current;
    const cursorPosition = element.selectionStart;
    setCursorPos(cursorPosition);

    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
    setHeight(`${element.scrollHeight}px`);
  };

  const handleFocus = () => {
    const element = textareaRef.current;
    const cursorPosition = element.selectionStart;
    setCursorPos(cursorPosition);
  };

  useEffect(() => {
    if (textareaRef.current) {
      const element = textareaRef.current;
      element.selectionStart = cursorPos;
      element.selectionEnd = cursorPos;
      element.focus();
    }
  }, [focusTrigger]);

  return (
    <div className={styles['form-container']}>
      <textarea
        className={styles['textarea']}
        placeholder='本文を500字以内で入力 (マークダウン対応)'
        maxLength={2000}
        value={val}
        onChange={(e) => handleValChange(e)}
        onFocus={handleFocus}
        ref={textareaRef}
        style={{ height }}
      />
    </div>
  );
}
