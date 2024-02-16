export const calcSelectYearMenuPosition = (index: number) => {
  const top = `calc(var(--select-year-menu-height) * ${index} + 0.2rem)`;
  return top;
};
