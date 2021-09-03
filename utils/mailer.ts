import nodemailer from "nodemailer";

// create email transporter
const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST as string,
  port: parseInt(process.env.EMAIL_PORT as string),
  secure: process.env.EMAIL_PORT === "465",
  auth: {
    user: process.env.EMAIL_ADDRESS as string,
    pass: process.env.EMAIL_PASSWORD as string,
  },
});

// Email template for call request
const generateCallRequest = (emailData: CallRequestType): EmailObj => {
  return {
    from: `"$${emailData.name}" <${emailData.email}>`,
    // to: `connect@xperts4you.com`,
    to: "hello@madushan.dev",
    subject: `New Call Request ☎️ from ${emailData.name} ✉️`,
    html: `
        <p>${emailData.name} is requesting a call</p>
        <br>
        <p><span style="background-color: #ff9900;">Name:</span> ${emailData.name}</p>
        <p><span style="background-color: #ff9900;">Phone:</span> ${emailData.phone}</p>
        <p><span style="background-color: #ff9900;">Email:</span> ${emailData.phone}</p>
    
        <br>
        <p>Cheers.</p>`,
  };
};

// Email template for Inquiry submission
const generateInquirySubmission = (emailData: ContactInquiry): EmailObj => {
  return {
    from: `"$${emailData.firstName} ${emailData.lastName}" <${emailData.email}>`,
    to: `connect@xperts4you.com`,
    subject: `New inquiry from ${emailData.firstName} ✉️`,
    html: `
        <p>New Inquiry from ${emailData.firstName} ${emailData.lastName}</p>
        <br>
        <p><span style="background-color: #ff9900;">Name:</span> ${
          emailData.firstName
        } ${emailData.lastName}</p>
        <p><span style="background-color: #ff9900;">Phone:</span> ${
          emailData.phone
        }</p>
        <p><span style="background-color: #ff9900;">Email:</span> ${
          emailData.email || "Not specified"
        }</p>
        <p><span style="background-color: #ff9900;">Message:</span> ${
          emailData.message || "Not specified"
        }</p>
        <br>
        <p>Cheers.</p>`,
  };
};

// Email template for consultation request
const generateConsultationRequest = (
  emailData: ConsultationRequestType
): EmailObj => {
  return {
    from: `"$${emailData.name}" <${emailData.email}>`,
    to: `connect@xperts4you.com`,
    subject: `${emailData.name} is requesting a consultation session on ${emailData.service} ✉️`,
    html: `
        <p>${emailData.name} needs some assistance  ${emailData.service}</p>
        <br>
        <h2>
            Required service: ${emailData.service}
        <h2>
        <br>
        <br>
        <h2>Company Details<h2>
        <p><span style="background-color: #ff9900;">Company Name:</span> ${
          emailData.companyName
        }</p>
        <p><span style="background-color: #ff9900;">Nature of business:</span> ${
          emailData.natureOfTheBusiness
        }</p>
        ${
          emailData.type === "inc"
            ? `<p><span style="background-color: #ff9900;">No of Directors:</span> ${emailData.noOfDirectors}</p>`
            : `<p><span style="background-color: #ff9900;">Quarterly Turnover:</span> ${emailData.quarterlyTurnover}</p>`
        }
        <br>
        <br>
        <h2>Contact Details<h2>
        <p><span style="background-color: #ff9900;">Name:</span> ${
          emailData.name
        }</p>
        <p><span style="background-color: #ff9900;">Email:</span> ${
          emailData.email
        }</p>
        <p><span style="background-color: #ff9900;">Phone:</span> ${
          emailData.phone
        }</p>
        <p><span style="background-color: #ff9900;">Preferred time to call:</span> ${
          emailData.timeToContact || "Not specified"
        }</p>`,
  };
};

const sendEmail = async (mailObj: EmailObj): Promise<boolean> => {
  try {
    const result = await transport.sendMail(mailObj);

    console.log(`Message sent (${result.messageId})`);
    return true;
  } catch (error: any) {
    console.error(`Error occurred while sending the email - ${error.message}`);
    return false;
  }
};

export {
  sendEmail,
  generateCallRequest,
  generateInquirySubmission,
  generateConsultationRequest,
};
