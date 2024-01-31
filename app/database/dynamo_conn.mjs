"use server";

import {
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
  UpdateItemCommand,
} from "@aws-sdk/client-dynamodb";

import { unmarshall } from "@aws-sdk/util-dynamodb";

import { validPassword, genPassword } from "../utils/password_utils.mjs";

const dynamodbclient = new DynamoDBClient({
  credentials: {
    accessKeyId: "DUMMYACCESSKEY",
    secretAccessKey: "DUMMYSECRETACCESSKEY",
  },
  region: "ap-northeast-1",
  endpoint: "http://localhost:8000",
});

export const CreateUser = async (lastName,
  firstName,
  lastNameKana,
  firstNameKana,
  nickName,
  email,
  password) => {
  let newSaltHash = genPassword(password);
  let params = {
    TableName: "users",
    Item: {
      id: { N: 10 },
      lastName: { S: lastName },
      firstName: { S: firstName },
      lastNameKana: { S: lastNameKana },
      firstNameKana: { S: firstNameKana },
      nickName: { S: nickName },
      mail_address: { S: email },
      hashstring: { S: newSaltHash.hashstring },
      salt: { S: newSaltHash.salt },
      // role: { S: "basic" },
    },
  };
  try {
    const putItemCommand = new PutItemCommand(params);
    let putitemResponse = await dynamodbclient.send(putItemCommand);

    if (putitemResponse && putitemResponse.$metadata.httpStatusCode === 200) {
      console.log("成功！！！");
      return true;
    } else {
      console.log("失敗");
      return false;
    }
  } catch (error) {
    console.log("エラーはいてますやん");
    console.error(error);
    throw error;
  }
};

export const VerifyUser = async (email, password) => {
  let params = {
    TableName: "users",
    Key: {
      id: { N: 10 },
      mail_address: { S: email },
    },
  };

  try {
    const getItemCommand = new GetItemCommand(params);
    let userdata = await dynamodbclient.send(getItemCommand);
    userdata = userdata?.Item ? unmarshall(userdata?.Item) : null;
    const isValid = validPassword(password, userdata.hashstring, userdata.salt);
    console.log({ userdata });
    console.log(isValid, "isValid");

    return isValid ? userdata : null;
  } catch (error) {
    console.log("ログインできませんやん");
    console.error(error);
    throw error;
  }
};


// export const fetchUserFromDatabase = async (userId, mail_address) => {
//   let params = {
//     TableName: "users",
//     Key: {
//       id: { N: userId },
//       mail_address: { S: mail_address },
//     },
//   };

//   try {
//     const getItemCommand = new GetItemCommand(params);
//     let userdata = await dynamodbclient.send(getItemCommand);
//     userdata = userdata?.Item ? unmarshall(userdata?.Item) : null;
//     return userdata.Item;
//   } catch (error) {
//     console.error("Error fetching user data: ", error);
//     throw error;
//   }
// };


