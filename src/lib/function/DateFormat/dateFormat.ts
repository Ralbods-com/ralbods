// YYYY-MM-DD to String

export function getCurrentDate(): string {
  const currentDate: Date = new Date();
  const year: number = currentDate.getFullYear();
  const month: number = currentDate.getMonth() + 1;
  const day: number = currentDate.getDate();

  const monthString: string = month < 10 ? `0${month}` : `${month}`;
  const dayString: string = day < 10 ? `0${day}` : `${day}`;

  return `${year}-${monthString}-${dayString}`;
}

// 現在の日付を取得し、指定された形式で出力する
// const formattedDate: string = getCurrentDate();
// console.log(formattedDate);
