import type { NextApiRequest, NextApiResponse } from "next";

type Response = {
  message: string;
  body?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  switch (req.method) {
    case "POST":
      return createOrder(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const createOrder = (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const body = req.body;

  return res.status(201).json({ message: "success", body });
};
