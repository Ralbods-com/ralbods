export const returnHoverMenuTransition = (
  where: string,
): { xy: string; val: number } => {
  switch (where) {
    case 'left':
      return { xy: 'x', val: 8 };
    case 'top':
      return { xy: 'y', val: 8 };
    default:
      return { xy: 'x', val: 0 };
  }
};
