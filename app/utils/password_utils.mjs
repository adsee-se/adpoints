import crypto from "crypto";

export function genPassword(password) {
  let salt = crypto.randomBytes(32).toString("hex");
  let genHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return {
    salt: salt,
    hashString: genHash,
  };
}

export function validPassword(password, hashString, salt) {
  let hashVerify = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return hashString === hashVerify;
}
