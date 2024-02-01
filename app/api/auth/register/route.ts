import { NextResponse } from "next/server";
import { CreateUser } from "@/app/database/dynamo_conn.mjs";

export async function POST(request: Request) {
  try {
    const {
      lastName,
      firstName,
      lastNameKana,
      firstNameKana,
      nickName,
      email,
      password,
      confirmPassword
    } = await request.json();
    console.log({ email, password });
    let CreateUserResponse;
    if (email && password && password === confirmPassword) {
      CreateUserResponse = await CreateUser(
        lastName,
        firstName,
        lastNameKana,
        firstNameKana,
        nickName,
        email,
        password
      );
    }
    console.log({ CreateUserResponse });
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}
