import { NextApiRequest, NextApiResponse } from "next";
import {
  sendTaxCalculationResults,
  sendTaxConsultationRequestEmail,
} from "utils/courier";

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

  const inquiryData: TaxConsultationEmailType = { ...req.body };

  // check request body fields
  if (!inquiryData.email || !inquiryData.name || !inquiryData.phone) {
    res.status(400).json({
      status: "failed",
      message: "Some required fields are missing in the HTTP request",
    });
    return;
  }

  const systemMessageId = await sendTaxConsultationRequestEmail(inquiryData);
  const clientMessageId = await sendTaxCalculationResults(inquiryData);

  if (systemMessageId && clientMessageId) {
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
