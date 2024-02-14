export const postDiary = async (
  userId: string,
  date: string,
  title: string,
  body: string,
  createdAt: Date,
  updatedAt: Date,
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
        createdAt,
        updatedAt,
        publishedAt,
      }),
    });
    return await res.json();
  } catch (error) {
    return console.log(error);
  }
};
