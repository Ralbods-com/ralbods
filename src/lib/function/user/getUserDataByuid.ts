// idでユーザーを取得
export const getUserDataByuid = async (uid: string) => {
  try {
    const res = await fetch(`/api/${uid}`, {
      method: 'GET',
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};
