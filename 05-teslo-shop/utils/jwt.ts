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

export const isValidToken = (token: string): Promise<string> => {
  if (!process.env.JWT_SECRET) {
    throw new Error("Can't read secret key");
  }

  if (token.length <= 10) {
    Promise.reject("JWT not valid");
  }

  return new Promise((resolve, reject) => {
    try {
      jwt.verify(token, process.env.JWT_SECRET || "", (err, payload) => {
        if (err) return reject("jwt not valid");

        const { _id } = payload as { _id: string };

        resolve(_id);
      });
    } catch (e) {
      reject("jwt not valid");
    }
  });
};
