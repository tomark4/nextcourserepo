import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import User from "../../../models/user";
import bcrypt from "bcryptjs";
import { signToken } from "../../../utils/jwt";
import validator from "validator";

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
      return registerUser(req, res);

    default:
      return res.status(400).json({
        message: "Bad request",
      });
  }
}
/**
 * Register user
 * @param req NextApiRequest
 * @param res NextApiResponse
 * @returns
 */
const registerUser = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const {
    name = "",
    email = "",
    password = "",
  } = req.body as { email: string; name: string; password: string };

  await db.connect();

  const user = await User.findOne({ email });

  if (user) {
    await db.disconnect();
    return res.status(400).json({
      message: "User registered yet",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "Password too short",
    });
  }

  if (name.length < 2) {
    return res.status(400).json({
      message: "Name too short",
    });
  }

  // TODO: validate email

  if (!validator.isEmail(email)) {
    return res.status(400).json({
      message: "Invalid email",
    });
  }

  const newUser = new User({
    name,
    email: email.toLowerCase(),
    password: bcrypt.hashSync(password),
    role: "client",
  });

  try {
    await newUser.save({ validateBeforeSave: true });
    await db.disconnect();

    const token = signToken({ _id: newUser._id, email: newUser.email });

    return res.status(200).json({
      message: "Success",
      token,
      user: {
        name: newUser.name,
        email: newUser.email,
        role: "client",
      },
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      message: "Server error",
    });
  }
};
