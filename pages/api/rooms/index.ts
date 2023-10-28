// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../libs/dbConnect";
// import { RtcTokenBuilder, RtcRole } from "agora-access-token";
// import { RtmTokenBuilder, RtmRole } from "agora-access-token";
import Room from "../../../models/Room";

type Room = {
  status: String;
};

type ResponseData = Room[] | string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { method } = req;
  //const userId = query.userId as string;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const rooms = await Room.aggregate([
          { $match: { status: "waiting" } },
          { $sample: { size: 1 } },
        ]);
        if(rooms.length > 0){
          const roomId = rooms[0]._id;
          await Room.findByIdAndUpdate(roomId,{
            status:"chatting",
          })
        }
        res.status(200).json(rooms);
      } catch (error) {
        res.status(400).json((error as any).message);
      }
      break;
      case "POST":
        const rooms = await Room.create(
          {status:"waiting"});
        res.status(200).json(rooms);
      break;
    default:
      res.status(400).json("no method for endpoint");
      break;
  }
  
}
