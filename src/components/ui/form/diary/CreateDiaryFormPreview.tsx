'use client';

import MarkdownIt from 'markdown-it';
import styles from './diaryForm.module.scss';

export default function CreateDiaryFormPreview({ mdText }: { mdText: string }) {
  const md = MarkdownIt();

  if (mdText === '') {
    return (
      <div className='md-container'>
        <div className={styles['md-non-prev']}>本文がありません</div>
      </div>
    );
  } else {
    const mdData = md.render(mdText);

    return (
      <div
        className='md-container'
        dangerouslySetInnerHTML={{ __html: mdData }}
      />
    );
  }
}
