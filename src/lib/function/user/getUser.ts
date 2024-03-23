export const getUser = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/user/${id}`, {
      method: 'GET',
    });

    return await res.json();
  } catch (error) {
    return error;
  }
};
