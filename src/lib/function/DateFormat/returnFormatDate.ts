export const returnFormatDate = (base: string) => {
  const date = new Date(base);
  const month = date.getMonth() + 1; // 月は0から始まるため、1を加える
  const day = date.getDate();
  const formattedDate = `${month}/${day}`;

  return formattedDate;
};
