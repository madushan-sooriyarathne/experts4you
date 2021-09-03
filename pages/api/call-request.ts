import { NextApiRequest, NextApiResponse } from "next";
import { sendCallRequestEmail } from "utils/courier";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>
): Promise<void> => {
  // check the method
  if (req.method !== "POST") {
    res.status(405).json({
      status: "failed",
      message: `${req.method} method is not allowed in this route`,
    });
    return;
  }

  const inquiryData: CallRequestType = { ...req.body };

  // check request body fields
  if (!inquiryData.email || !inquiryData.name || !inquiryData.phone) {
    res.status(400).json({
      status: "failed",
      message: "Some required fields are missing in the HTTP request",
    });
    return;
  }

  const messageId = await sendCallRequestEmail(inquiryData);
  console.log("messageID: " + messageId);
  if (messageId) {
    res.status(200).json({
      status: "success",
    });
    return;
  } else {
    res.status(500).json({
      status: "failed",
      message: "Error occurred while submitting the the details",
    });
    return;
  }
};
