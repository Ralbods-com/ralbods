export const returnDiaryBgColor = (mind: number) => {
  switch (mind) {
    case 4:
      return 'rgba(var(--red), 0.2)';
    case 3:
      return 'rgba(var(--yellow), 0.2)';
    case 2:
      return 'rgb(var(--pale-gray))';
    case 1:
      return 'rgba(var(--main-color), 0.2)';
    case 0:
      return 'rgba(var(--sub-color), 0.2)';
    default:
      return 'rgb(var(--pale-gray))';
  }
};
