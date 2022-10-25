import { NextApiRequest, NextApiResponse } from "next";
import math from "../../utils/math";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    body: { message, privateKey },
  } = req;

  switch (method) {
    case `POST`:
      try {
        const descrypted_message = math.decrypt(message, privateKey);
        const decoded_message = math.decode(descrypted_message);

        res.status(200).json({
          success: true,
          message: decoded_message,
        });
      } catch (error) {
        res.status(400).json({
          message: `Error: ${error}`,
          success: false,
        });
      }

    default:
      res.status(405).json({
        message: `method ${method} not allowed.`,
        success: false,
      });
  }
}