export const getUser = async (id: string) => {
  try {
    const res = await fetch(`/api/user/${id}`, {
      method: 'GET',
    });

    return await res.json();
  } catch (error) {
    return error;
  }
};
