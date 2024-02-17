import Footer from '@/components/footer/Footer';
import LoginButton from '@/components/ui/button/login/LoginButton';
import HomeConceptBox from '@/components/home/HomeConceptBox';
import ScrollAnimation from '@/components/ui/animation/ScrollAnimation';
import { SiRabbitmq } from 'react-icons/si';
import { TbLayoutCollage, TbMarkdown } from 'react-icons/tb';
import { FaToolbox } from 'react-icons/fa6';
import styles from './page.module.scss';

export default async function Home() {
  return (
    <>
      {/* <MainHeader session={session} /> */}
      <div className={styles['top-container']}>
        <div className={styles['top-logo']}>
          <SiRabbitmq />
        </div>
        <p className={styles['top-title']}>Ralbods</p>
        <p className={styles['top-concept-text']}>
          日々の開発を記録する、
          <br />
          エンジニアのための日記です。
        </p>
        <div className={styles['button-container']}>
          <LoginButton />
        </div>
        <div className={styles['top-scroll-box']}>
          <ScrollAnimation />
        </div>
      </div>
      <div className={styles['separate']} />
      <div className={styles['concept-container']}>
        <p className={styles['concept-title']}>Concept</p>
        <p className={styles['concept-text']}>
          普段の何気ない開発を気軽に記しましょう。
          <br />
          ふと見返した時に、自分の成長を感じ、また次へつないでいく。
          <br />
          自分のペースで気楽にかける、日々の開発をより楽しく、より快適に
          <br />
          日記を共有しあったり、より細かく分析したり
          <br />
          使い方はそのクリエイター次第
          <br />
          ここは自由な開発日記アプリです。
        </p>
        <div className={styles['concept-box-index']}>
          <HomeConceptBox Icon={TbMarkdown} title='マークダウンに対応' description='マークダウン記法で日記を書くことができます。これにより、より自由な表現が可能です。' />
          <HomeConceptBox Icon={TbLayoutCollage} title='テンプレートを作成' description='日記に好きなテンプレートを決めることができます。毎日使うものをより便利に使いこなしましょう。' />
          <HomeConceptBox Icon={FaToolbox} title='技術別で管理' description='開発で使った技術やトピックを日記にタグ付けすることで、後から技術別に返すことが可能です。' />
        </div>
      </div>
      <Footer />
    </>
  );
}
