// YYYY-MM-DD to String

export function dateFormat(date: Date): string {
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;
  const day: number = date.getDate();

  const monthString: string = month < 10 ? `0${month}` : `${month}`;
  const dayString: string = day < 10 ? `0${day}` : `${day}`;

  return `${year}-${monthString}-${dayString}`;
}
