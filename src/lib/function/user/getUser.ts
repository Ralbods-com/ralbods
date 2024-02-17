export const getUser = async (email: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/user/id`, {
      method: 'POST',
      body: JSON.stringify({
        email,
      }),
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};
