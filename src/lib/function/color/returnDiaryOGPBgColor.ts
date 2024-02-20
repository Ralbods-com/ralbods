export const returnDiaryBgOGPColor = (mind: string) => {
  switch (mind) {
    case 'maximum':
      return 'rgb(255, 102, 102)';
    case 'happy':
      return 'rgb(255, 204, 51)';
    case 'normal':
      return 'rgb(242, 242, 242)';
    case 'sad':
      return 'rgb(54, 217, 191)';
    case 'bad':
      return 'rgb(0, 175, 204)';
    default:
      return 'rgb(var(--pale-gray))';
  }
};
