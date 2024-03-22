export const returnDiaryBgOGPColor = (mind: number) => {
  switch (mind) {
    case 4:
      return 'rgb(255, 102, 102)';
    case 3:
      return 'rgb(255, 204, 51)';
    case 2:
      return 'rgb(242, 242, 242)';
    case 1:
      return 'rgb(54, 217, 191)';
    case 0:
      return 'rgb(0, 175, 204)';
    default:
      return 'rgb(var(--pale-gray))';
  }
};
