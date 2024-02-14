'use client';

import { motion } from 'framer-motion';
import { returnHoverMenuTransition } from '@/lib/function/menu/returnHoverMenuTransition';
import styles from './guide.module.scss';

export default function HoverGuide({
  text,
  description,
  where,
  end,
}: {
  text: string;
  description: string | null;
  where: string;
  end: string | null;
}) {
  const endText = end ? `${end}-end-` : '';
  const transition = returnHoverMenuTransition(where);
  const padding = description ? 1.8 : 1.2;

  return (
    <motion.div
      className={styles[`${endText + where}-menu`]}
      style={{ width: `${padding + text.length * 0.8}rem` }}
      initial={{ [transition.xy]: transition.val, opacity: 0 }}
      animate={{
        [transition.xy]: 0,
        opacity: 1,
        transition: { duration: 0.3, delay: 0.2 },
      }}
    >
      {text}
      {description && <span>{description}</span>}
    </motion.div>
  );
}
