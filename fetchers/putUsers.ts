export const putUsers = async (users: any): Promise<any> => {
  console.log(users, "users");
  try {
    const response = await fetch(`http://127.0.0.1:3000/usersConfirm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
      cache: "no-store",
      mode: "cors",
    });

    const data = await response.json();
    const sessionId = data.sessionId;
    return sessionId;
  } catch (error) {
    throw error;
  }
};
