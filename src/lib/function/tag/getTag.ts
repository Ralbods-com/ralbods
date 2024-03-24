export const getAllTags = async () => {
  try {
    const res = await fetch('/tag', {
      method: 'GET',
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};
