import { dateFormat } from '../DateFormat/dateFormat';

export const getKusa = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/kusa`, {
      method: 'GET',
    });
    const diaries = await res.json();
    const thisYear = new Date().getFullYear();
    const resultArray = [];
    const publishedAtArray = JSON.parse(diaries.diaries.publishedAt);
    for (let i = 0; i < publishedAtArray.length; i += 1) {
      const year = publishedAtArray[i].getFullYear();
      if (thisYear === year) {
        const publishedAtTodate = dateFormat(publishedAtArray[i]);
        resultArray.push(publishedAtTodate);
      }
    }
    return resultArray;
  } catch (error) {
    return console.log(error);
  }
};
