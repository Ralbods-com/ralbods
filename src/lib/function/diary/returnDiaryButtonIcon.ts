import { IconType } from 'react-icons';
import {
  FaBold,
  FaCode,
  FaHeading,
  FaItalic,
  FaLink,
  FaListOl,
  FaListUl,
  FaQuestion,
} from 'react-icons/fa6';
import { RiQuoteText } from 'react-icons/ri';

export const returnDiaryButtonIcon = (
  kind: string,
): { Icon: IconType; text: string } => {
  switch (kind) {
    case 'heading':
      return { Icon: FaHeading, text: '見出し' };
    case 'bold':
      return { Icon: FaBold, text: '太字' };
    case 'italic':
      return { Icon: FaItalic, text: 'イタリック' };
    case 'link':
      return { Icon: FaLink, text: 'リンク' };
    case 'quote':
      return { Icon: RiQuoteText, text: '引用' };
    case 'code':
      return { Icon: FaCode, text: 'コード' };
    case 'list':
      return { Icon: FaListUl, text: 'リスト' };
    case 'numList':
      return { Icon: FaListOl, text: '番号リスト' };
    default:
      return { Icon: FaHeading, text: '見出し' };
  }
};

export const returnDiaryMenuButtonIcon = (kind: string): IconType => {
  switch (kind) {
    case 'メニューガイド':
      return FaQuestion;
    default:
      return FaQuestion;
  }
};
