"use server";
import {
  DynamoDBClient,
  ScanCommand,
  // GetItemCommand,
  PutItemCommand,
  UpdateItemCommand,
} from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { validPassword, genPassword } from "../utils/password_utils.mjs";
import { v4 as uuidv4 } from "uuid";

const dynamoDBClient = new DynamoDBClient({
  credentials: {
    accessKeyId: "DUMMYACCESSKEY",
    secretAccessKey: "DUMMYSECRETACCESSKEY",
  },
  region: "ap-northeast-1",
  endpoint: "http://localhost:8000",
});

export const CreateUser = async (
  lastName,
  firstName,
  lastNameKana,
  firstNameKana,
  nickName,
  email,
  password
) => {
  let newSaltHash = genPassword(password);
  const userId = uuidv4();
  let params = {
    TableName: "Users",
    Item: {
      id: { S: userId },
      email: { S: email },
      firstName: { S: firstName },
      lastName: { S: lastName },
      firstNameKana: { S: firstNameKana },
      lastNameKana: { S: lastNameKana },
      nickName: { S: nickName },
      passwordHash: { S: newSaltHash.hashString },
      salt: { S: newSaltHash.salt },
      role: { S: "basic" },
    },
  };
  try {
    const putItemCommand = new PutItemCommand(params);
    let putItemResponse = await dynamoDBClient.send(putItemCommand);

    if (putItemResponse && putItemResponse.$metadata.httpStatusCode === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const VerifyUser = async (email, password) => {
  let params = {
    TableName: "Users",
    FilterExpression: "email = :emailValue",
    ExpressionAttributeValues: {
      ":emailValue": { S: email },
    },
  };
  try {
    const scanCommand = new ScanCommand(params);
    const userData = await dynamoDBClient.send(scanCommand);
    const scanUserData = userData?.Items ? unmarshall(userData?.Items[0]) : null;
    const isValid = validPassword(
      password,
      scanUserData.passwordHash,
      scanUserData.salt
    );
    return isValid ? scanUserData : null;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
