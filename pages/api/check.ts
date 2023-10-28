// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import dbConnect from "../../../libs/dbConnect";
// import { RtcTokenBuilder, RtcRole } from "agora-access-token";
// import { RtmTokenBuilder, RtmRole } from "agora-access-token";
// import Room from "../../../models/Room";

type Room = {
    status: String;
  };
export default  function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
 res.status(200).json({name: "nehhhaa"})
  
}
