export const postDiary = async (
  userId: string,
  date: string,
  title: string,
  body: string,
  publishedAt: Date,
) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}`, {
      method: 'POST',
      body: JSON.stringify({
        userId,
        date,
        title,
        body,
        publishedAt,
      }),
    });
    return await res.json();
  } catch (error) {
    return console.log(error);
  }
};
