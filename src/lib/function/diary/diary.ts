export const getDiaryDetail = async (userId: string, id: number) => {
  try {
    const res = await fetch(`${userId}/${id}`);
    return await res.json();
  } catch (error) {
    return error;
  }
};

export const postDiary = async (
  date: string,
  title: string,
  body: string,
  mind: number,
  userId: string,
  tags: string[],
) => {
  try {
    const res = await fetch(`${userId}/form/create`, {
      method: 'POST',
      body: JSON.stringify({
        date, title, body, mind, userId, tags,
      }),
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};
