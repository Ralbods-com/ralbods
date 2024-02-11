'use client';

import { useState } from 'react';
import styles from './diaryFooter.module.scss';
import TextLengthGauge from '../../gauge/TextLengthGauge';
import ToggleButton from '../../button/ToggleButton';
import DiaryFormMdButton from '../../button/diary/DiaryFormMdButton';
import DiaryFormMenuButton from '../../button/diary/DiaryFormMenuButton';

export default function CreateDiaryFormFooter({
  val,
  setVal,
  cursorPos,
  setCursorPos,
  handleFocus,
}: {
  val: string;
  setVal: (val: string) => void;
  cursorPos: number;
  setCursorPos: (pos: number) => void;
  handleFocus: () => void;
}) {
  const [isMenu, setIsMenu] = useState(true);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  const handleMdButton = (firstText: string, endText: string) => {
    const newTextVal =
      val.slice(0, cursorPos) + firstText + endText + val.slice(cursorPos);
    setVal(newTextVal);

    const newCursorPos = cursorPos + firstText.length;
    setCursorPos(newCursorPos);

    handleFocus();
  };

  return (
    <div className={styles['container']}>
      <DiaryFormMenuButton
        text='メニューガイド'
        description={null}
        left={true}
      />
      <div className={styles['md-menu-container']}>
        {isMenu && (
          <>
            <DiaryFormMdButton
              kind='heading'
              num={0}
              handleClick={() => handleMdButton('\n### ', '')}
            />
            <DiaryFormMdButton
              kind='bold'
              num={1}
              handleClick={() => handleMdButton(' ***', '*** ')}
            />
            <DiaryFormMdButton
              kind='italic'
              num={2}
              handleClick={() => handleMdButton(' _', '_ ')}
            />
            <DiaryFormMdButton
              kind='quote'
              num={3}
              handleClick={() => handleMdButton('\n> ', '')}
            />
            <DiaryFormMdButton
              kind='code'
              num={4}
              handleClick={() => handleMdButton(' `', '` ')}
            />
            <DiaryFormMdButton
              kind='link'
              num={5}
              handleClick={() => handleMdButton(' [', '](url) ')}
            />
          </>
        )}
        <ToggleButton
          menu={isMenu}
          handleMenu={handleMenu}
          menuText='アシストメニュー'
        />
        <TextLengthGauge textLength={val.length} maxLength={500} />
      </div>
    </div>
  );
}
