import PrimaryHeading from "@components/headings/primary-heading";
import InputField from "@components/input-field";
import SubmitButton from "@components/buttons/submit-button";

import {
  FormDataSection,
  FormSection,
  FormGroup,
  DetailsSection,
  ItemGroup,
  SocialMediaGroup,
  SocialMediaIcon,
} from "./styles";
import { useInput } from "@hooks";
import { FormEvent, useContext, useState } from "react";
import SecondaryHeading from "@components/headings/secondary-heading";
import Paragraph from "@components/paragraph";
import SubHeading from "@components/headings/sub-heading";

import { socialMedia } from "@site-data";
import { notificationDispatchContext } from "context/notification-context";

const ContactSection: React.FC = (): JSX.Element => {
  // Notification context dispatch
  const showNotification = useContext(
    notificationDispatchContext
  ) as DispatchFn<string | null>;

  // other states
  const [loading, setLoading] = useState<boolean>(false);

  // form state
  const [firstName, updateFirstName, resetFirstName] = useInput("");
  const [lastName, updateLastName, resetLastName] = useInput("");
  const [email, updateEmail, resetEmail] = useInput("");
  const [phone, updatePhone, resetPhone] = useInput("");
  const [message, updateMessage, resetMessage] = useInput("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    fetch("/api/inquire", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        message: message || "Not Specified",
      }),
    }).then((res) => {
      if (res.status === 200) {
        showNotification(
          `Hi ${firstName}! We received your inquiry and appreciate you reaching out. One of our representatives will respond to you soon.`
        );
      } else {
        showNotification(
          `Hi ${firstName}! We encountered an error while submitting your inquiry. Please call 071 866 3023 or email us to connect@xperts4you.com. Sorry for the inconvenience caused!`
        );
      }

      setLoading(false);
      // reset the form fields
      resetFirstName();
      resetLastName();
      resetEmail();
      resetPhone();
      resetMessage();
    });
  };

  return (
    <FormDataSection>
      <FormSection>
        <PrimaryHeading alignment="left">Let's talk</PrimaryHeading>
        <FormGroup onSubmit={handleSubmit}>
          <InputField
            value={firstName}
            onChange={updateFirstName}
            name="First Name"
            placeholder="John"
            type="text"
          />
          <InputField
            value={lastName}
            onChange={updateLastName}
            name="Last Name"
            placeholder="Doe"
            type="text"
          />
          <InputField
            value={email}
            onChange={updateEmail}
            name="Email"
            placeholder="example@example.com"
            type="email"
          />
          <InputField
            value={phone}
            onChange={updatePhone}
            name="Phone"
            placeholder="(+94) 77 123 4567"
            type="tel"
          />
          <InputField
            value={message}
            onChange={updateMessage}
            name="Message"
            placeholder="Your Message"
            type="text"
            textArea
            required={false}
          />
          <SubmitButton loading={loading} light>
            Submit
          </SubmitButton>
        </FormGroup>
      </FormSection>
      <DetailsSection>
        <ItemGroup>
          <SecondaryHeading alignment="center">
            Expert4U Private Limited.
          </SecondaryHeading>
          <Paragraph alignment="center">
            No 290, D. R. Wijewardena Mw, Colombo 0010, Sri Lanka
          </Paragraph>
        </ItemGroup>
        <ItemGroup>
          <SubHeading alignment="center">071 866 3023</SubHeading>
          <SubHeading alignment="center">connect@xperts4you.com</SubHeading>
        </ItemGroup>
        <SocialMediaGroup>
          {socialMedia.map((item) => (
            <SocialMediaIcon key={item.icon}>
              <use xlinkHref={`/assets/svg/sprites.svg#${item.icon}`} />
            </SocialMediaIcon>
          ))}
        </SocialMediaGroup>
      </DetailsSection>
    </FormDataSection>
  );
};

export default ContactSection;
