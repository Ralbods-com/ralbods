export const getAllTags = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/tag`, {
      method: 'GET',
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};
