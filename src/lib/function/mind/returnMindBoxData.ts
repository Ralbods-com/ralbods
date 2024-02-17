import MaxImage from '@/public/mind/max.png';
import HappyImage from '@/public/mind/happy.png';
import DefaultImage from '@/public/mind/default.png';
import SadImage from '@/public/mind/sad.png';
import BadImage from '@/public/mind/bad.png';

export const returnMindBoxData = (kind: number) => {
  switch (kind) {
    case 0:
      return { percentage: '0%', image: BadImage, color: 'var(--red)' };
    case 1:
      return { percentage: '25%', image: SadImage, color: 'var(--yellow)' };
    case 2:
      return { percentage: '50%', image: DefaultImage, color: 'var(--text-color)' };
    case 3:
      return { percentage: '75%', image: HappyImage, color: 'var(--sub-color)' };
    case 4:
      return { percentage: '100%', image: MaxImage, color: 'var(--main-color)' };
    default:
      return { percentage: '50%', image: DefaultImage, color: 'var(--pale-gray)' };
  }
};
