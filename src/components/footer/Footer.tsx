import Link from 'next/link';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';
import styles from './footer.module.scss';
import ColorThemeToggleButton from '../ui/button/Theme/ColorThemeToggleButton';

export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['top-container']}>
        <div className={styles['top-left-box']}>
          <p className={styles['title']}>Ralbods</p>
          <p className={styles['desctiption']}>
            日々の開発を記録し、成長を振り返る
            <br />
            開発日記アプリ
          </p>
        </div>
        <div className={styles['top-right-box']}>
          <div className={styles['content-box']}>
            <p className={styles['content-title']}>App</p>
            <Link href='/home' className={styles['content-text']}>
              Ralbodsについて
            </Link>
            <Link href='/about' className={styles['content-text']}>
              使い方
            </Link>
            <Link href='/home' className={styles['content-text']}>
              サポート
            </Link>
          </div>
          <div className={styles['content-box']}>
            <p className={styles['content-title']}>Legal</p>
            <Link href='/home' className={styles['content-text']}>
              利用規約
            </Link>
            <Link href='/home' className={styles['content-text']}>
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
      <div className={styles['bottom-container']}>
        <div className={styles['bottom-box']}>
          <p className={styles['copyright']}>©︎ 2024 Ralbods</p>
          <div className={styles['media-container']}>
            <a
              href='https://twitter.com/ralbods'
              className={styles['media-box']}
              aria-label='Twitter'
              target='_blank'
              rel='noreferrer'
            >
              <FaXTwitter />
            </a>
            <hr className={styles['hr']} />
            <a
              href='https://github.com/Ralbods'
              className={styles['media-box']}
              aria-label='Twitter'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <ColorThemeToggleButton />
      </div>
    </footer>
  );
}
