import { CourierClient } from "@trycourier/courier";

const courier = CourierClient({
  authorizationToken: process.env.COURIER_ACCESS_TOKEN,
});

const sendCallRequestEmail = async (
  data: CallRequestType
): Promise<string | null> => {
  let id: string | null = null;

  try {
    const { messageId } = await courier.send({
      eventId: "CF8MTTPV1D4Y6ZNKWD13KEP9DJP0",
      recipientId: "b4fbedea-221a-4eec-928a-58758064a2e0",
      profile: {
        email: process.env.ADMIN_EMAIL,
      },
      data: data,
      override: {},
    });

    id = messageId;
  } catch (err: any) {
    console.error(`Error sending email - ${err.message}`);
  }

  return id;
};

const sendTaxConsultationRequestEmail = async (
  data: TaxConsultationEmailType
): Promise<string | null> => {
  let id: string | null = null;

  try {
    const { messageId } = await courier.send({
      eventId: "EX30B1E94JMB9HQG3Y25H7MSR8KF",
      recipientId: "232084f8-38ea-4918-b5dd-9cc88a4f1a04",
      profile: {
        email: process.env.ADMIN_EMAIL,
      },
      data: data,
      override: {},
    });

    id = messageId;
  } catch (err: any) {
    console.error(`Error sending email - ${err.message}`);
  }

  return id;
};

const sendTaxCalculationResults = async (
  data: TaxCalculationResultsType
): Promise<string | null> => {
  let id: string | null = null;

  try {
    const { messageId } = await courier.send({
      eventId: "GPN0T3AQXCMNVWN268WQVSAQDR1D",
      recipientId: "4bbc1281-16ec-4f4c-b26b-9062a2d81956",
      profile: {
        email: data.email,
      },
      data: data,
      override: {},
    });

    id = messageId;
  } catch (err: any) {
    console.error(`Error sending email - ${err.message}`);
  }

  return id;
};

const sendConsultationRequestEmail = async (
  data: ConsultationRequestType
): Promise<string | null> => {
  let id: null | string = null;
  const mailConfig =
    data.type === "inc"
      ? {
          eventId: "SDMTF5SRK74Q2VM0FHZ3BCJT3BM5",
          recipientId: "6c2c17b4-0086-4fa3-bb43-ed8dbaa7c588",
        }
      : data.type === "tax"
      ? {
          eventId: "16EVC7NSSXMKJKPXDWN9R9JK7R0Y",
          recipientId: "551c0a3c-e59e-4872-8a8f-0dbd005b242b",
        }
      : {
          eventId: "VY21VBBBMJ40F0J6T3J61ZNRVNFB",
          recipientId: "4e657d96-2c6d-460c-b9d2-380cd0792dbb",
        };

  try {
    const { messageId } = await courier.send({
      eventId: mailConfig.eventId,
      recipientId: mailConfig.recipientId,
      profile: {
        email: process.env.ADMIN_EMAIL,
      },
      data: data,
      override: {},
    });

    id = messageId;
  } catch (err: any) {
    console.error(`Error sending email - ${err.message}`);
  }

  return id;
};

const sendContactInquiryEmail = async (
  data: ContactInquiry
): Promise<string | null> => {
  let id: string | null = null;

  try {
    const { messageId } = await courier.send({
      eventId: "M3N33V2ZARMRE0K78W1Q8R697VG0",
      recipientId: "89fc007f-62cc-40cc-af29-1854b2e25460",
      profile: {
        email: process.env.ADMIN_EMAIL,
      },
      data: data,
      override: {},
    });
    id = messageId;
  } catch (err: any) {
    console.error(`Error sending email - ${err.message}`);
  }

  return id;
};

export {
  sendCallRequestEmail,
  sendConsultationRequestEmail,
  sendContactInquiryEmail,
  sendTaxConsultationRequestEmail,
  sendTaxCalculationResults,
};
