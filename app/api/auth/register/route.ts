import { NextResponse } from "next/server";
import { CreateUser } from "@/app/database/dynamoDBConnection.mjs";

export async function POST(request: Request) {
  try {
    const {
      lastName,
      firstName,
      lastNameKana,
      firstNameKana,
      nickName,
      email,
      password
    } = await request.json();
    let CreateUserResponse;
    if (email && password ) {
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
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}
