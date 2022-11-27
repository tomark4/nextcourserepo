import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import User from "../../../models/user";
import bcrypt from "bcryptjs";
import { signToken } from "../../../utils/jwt";

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
    case "POST":
      return loginUser(req, res);

    default:
      return res.status(400).json({
        message: "Bad request",
      });
  }
}

const loginUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { email = "", password = "" } = req.body;
  await db.connect();
  const user = await User.findOne({ email });

  if (!user) {
    // if user doesn't exists;
    return res.status(400).json({
      message: "Email or password invalid - e",
    });
  }

  if (!bcrypt.compareSync(password, user.password!)) {
    // if password is invalid
    return res.status(400).json({
      message: "Email or password invalid - p",
    });
  }

  await db.disconnect();

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
};
