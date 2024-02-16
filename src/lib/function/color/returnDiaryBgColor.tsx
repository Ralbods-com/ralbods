export const returnDiaryBgColor = (mind: string) => {
  switch (mind) {
    case 'maximum':
      return 'rgba(var(--red), 0.2)';
    case 'happy':
      return 'rgba(var(--yellow), 0.2)';
    case 'normal':
      return 'rgb(var(--pale-gray))';
    case 'sad':
      return 'rgba(var(--main-color), 0.2)';
    case 'bad':
      return 'rgba(var(--sub-color), 0.2)';
    default:
      return 'rgb(var(--pale-gray))';
  }
};
