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

const sendConsultationRequestEmail = async (
  data: ConsultationRequestType
): Promise<string | null> => {
  let id: null | string = null;
  const mailConfig =
    data.type === "inc"
      ? {
          eventId: "SDMTF5SRK74Q2VM0FHZ3BCJT3BM5",
          recipientId: "5117ccf1-1b52-4aab-b810-7103fd5679c0",
        }
      : {
          eventId: "VY21VBBBMJ40F0J6T3J61ZNRVNFB",
          recipientId: "7334483c-6df2-44a3-a980-6a79db9a5345",
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
      recipientId: "2394b158-5b83-4fe1-9d1c-063607670bf0",
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
};
