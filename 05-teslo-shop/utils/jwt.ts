import jwt from "jsonwebtoken";

interface Payload {
  _id: string;
  email: string;
}

export const signToken = (payload: Payload) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("Can't read secret key");
  }

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "30d" });
};
