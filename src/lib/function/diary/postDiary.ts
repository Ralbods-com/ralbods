export const postDiary = async (
  userId: string,
  date: string,
  title: string,
  body: string,
  publishedAt: Date,
  tags: string[],
) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/${userId}/form/diary`, {
      method: 'POST',
      body: JSON.stringify({
        userId,
        date,
        title,
        body,
        publishedAt,
        tags,
      }),
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};
