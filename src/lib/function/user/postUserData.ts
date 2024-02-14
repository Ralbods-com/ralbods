export async function postUserData(email: string, name: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/user`, {
      method: 'POST',
      body: JSON.stringify({ email, name }),
    });
    return await res.json();
  } catch (error) {
    return console.log(error);
  }
}
