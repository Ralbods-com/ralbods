export const postTag = async (name: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLUIC_URL}/tag`, {
      method: 'POST',
      body: JSON.stringify({ name }),
    });
    return res.json;
  } catch (error) {
    return error;
  }
};
