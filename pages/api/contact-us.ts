import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body;

  if (!body.name || !body.email || !body.message) {
    return res
      .status(400)
      .json({ message: "Name, email or message was not found." });
  }

  res.status(200).json({
    message: "I received your message, my son.",
  });
}
