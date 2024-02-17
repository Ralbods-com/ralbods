export const getDiaryDetail = async (userId: string, id: number) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/${userId}/${id}`);
    return await res.json();
  } catch (error) {
    return error;
  }
};
