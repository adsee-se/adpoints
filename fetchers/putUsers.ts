export const putUsers = async (users: any): Promise<void> => {
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

    // if (!response.ok) {
    //   throw new Error(`Failed to save point. Status: ${response.status}`);
    // }
    return;
  } catch (error) {
    throw error;
  }
};
