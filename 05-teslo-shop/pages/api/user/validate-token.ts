import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import User from "../../../models/user";
import { isValidToken, signToken } from "../../../utils/jwt";

type Data =
  | {
      message: string;
    }
  | {
      message: string;
      token: string;
      user: {
        name: string;
        email: string;
        role: string;
      };
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return checkJWT(req, res);

    default:
      return res.status(400).json({
        message: "Bad request",
      });
  }
}

const checkJWT = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // const bearerToken = req.headers.authorization?.split(" ")[1];

  const { token = "" } = req.cookies;

  console.log(req.cookies);

  let userId = "";

  try {
    userId = await isValidToken(token);
  } catch (e) {
    return res.status(401).json({
      message: "Token de autorización no es válido",
    });
  }

  await db.connect();
  const user = await User.findById(userId).lean();
  await db.disconnect();

  if (!user) {
    return res.status(400).json({ message: "User does not exist" });
  }

  const { _id, email, role, name } = user;

  return res.status(200).json({
    message: "Success",
    token: signToken({ _id, email }),
    user: {
      name: name,
      email: email,
      role: name,
    },
  });
};
