import MarkdownIt from 'markdown-it';
import { DiaryType } from '@/types/diaryType';
import styles from './diary.module.scss';
// import TagBox from '../tag/TagBox';

export default function DiaryDetail({
  diaryData,
}: {
  diaryData: DiaryType,
}) {
  const markdownIt = MarkdownIt();
  return (
    <div className={styles['detail-container']}>
      <p className={styles['detail-title']}>{diaryData[0].title}</p>
      {/* {diaryData.tags && (
        <div className={styles['detail-tag-index']}>
          {diaryData.tags.map((tag) => (
            <TagBox kind={tag.name} key={tag.id} />
          ))}
        </div>
      )} */}
      <div className={styles['detail-md-container']}>
        {diaryData[0].body ? (
          <div
            className='md-container'
            dangerouslySetInnerHTML={{ __html: markdownIt.render(diaryData[0].body) }}
          />
        ) : (
          <div className='md-container'>
            <div className={styles['md-non-prev']}>本文がありません</div>
          </div>
        )}
      </div>
    </div>
  );
}
