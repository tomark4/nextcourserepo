import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import User from "../../../models/user";
import bcrypt from "bcryptjs";
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
  const bearerToken = req.headers.authorization?.split(" ")[1];

  let userId = "";
  await db.connect();

  try {
    userId = await isValidToken(bearerToken || "");
    const user = await User.findById(userId).lean();

    if (!user) {
      await db.disconnect();
      return res.status(400).json({ message: "User does not exist" });
    }

    const token = signToken({ _id: user._id, email: user.email });

    return res.status(200).json({
      message: "Success",
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.name,
      },
    });
  } catch (e) {
    return res.status(401).json({ message: "Token not valid" });
  }
};
