export const postDiary = async (
  userId: string,
  date: string,
  title: string,
  body: string,
) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/form/diary`, {
      method: 'POST',
      body: JSON.stringify({
        userId,
        date,
        title,
        body,
      }),
    });
    return await res.json();
  } catch (error) {
    return console.log(error);
  }
};
