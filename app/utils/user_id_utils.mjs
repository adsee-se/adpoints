import crypto from "crypto";

export function hashEmailTo10Digits(email) {
  return crypto.createHash('sha256').update(email).digest('hex').substring(0, 10);
}
