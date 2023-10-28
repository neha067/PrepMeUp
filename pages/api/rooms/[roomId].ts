// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../libs/dbConnect";
import { RtcTokenBuilder, RtcRole } from "agora-access-token";
import { RtmTokenBuilder, RtmRole } from "agora-access-token";
import Room from "../../../models/Room";

type Room = {
  status: String;
};

type ResponseData = Room[] | string;


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { method, query } = req;
  const roomId = query.roomId as string;

 await dbConnect();

  switch (method) {
    case "PUT":
      await Room.findByIdAndUpdate(roomId, {
        status: "waiting",
      });
      res.status(200).json("success");
      break;
    default:
      res.status(400).json("no method for this endpoint");
      break;
  }
}
