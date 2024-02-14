'use client';

import { useEffect, useRef, useState } from 'react';
import { formListRegex, formNumListRegex } from '@/lib/regex/regex';
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

  const handleKeyDown = (e: { preventDefault(): unknown; key: string }) => {
    if (e.key === 'Enter') {
      const element = textareaRef.current;

      const textBeforeCursor = val.substring(0, cursorPos);
      const lastTextIndex = textBeforeCursor.lastIndexOf('\n');
      const lastText = textBeforeCursor.substring(lastTextIndex + 1);

      const isMatchList = formListRegex.test(lastText);
      const isMatchNumList = formNumListRegex.test(lastText);

      if (isMatchList) {
        e.preventDefault();
        let newTextVal = '';
        if (lastText === '- ') {
          newTextVal = val.slice(0, cursorPos - 2) + val.slice(cursorPos);
          setVal(newTextVal);

          element.selectionStart -= 2;
          element.selectionEnd -= 2;
        } else {
          newTextVal = `${val.slice(0, cursorPos)}\n- ${val.slice(cursorPos)}`;
          setVal(newTextVal);

          element.selectionStart += 3;
          element.selectionPosEnd += 3;
        }
      }
      if (isMatchNumList) {
        e.preventDefault();
        let newTextVal = '';
        const num = parseInt(lastText[0], 10);

        if (lastText === `${num}. `) {
          newTextVal = val.slice(0, cursorPos - 3) + val.slice(cursorPos);
          setVal(newTextVal);

          element.selectionStart -= 3;
          element.selectionEnd -= 3;
        } else {
          const newNum = num + 1;
          newTextVal = `${val.slice(0, cursorPos)}\n${newNum}. ${val.slice(cursorPos)}`;
          setVal(newTextVal);

          element.selectionStart += 3 + newNum.toString().length;
          element.selectionEnd += 3 + newNum.toString().length;
        }
      }
    }
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
        onKeyDown={handleKeyDown}
        ref={textareaRef}
        style={{ height }}
      />
    </div>
  );
}
