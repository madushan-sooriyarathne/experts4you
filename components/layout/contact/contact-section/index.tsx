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
import { useState } from "react";
import SecondaryHeading from "@components/headings/secondary-heading";
import Paragraph from "@components/paragraph";
import SubHeading from "@components/headings/sub-heading";

import { socialMedia } from "@site-data";

const ContactSection: React.FC = (): JSX.Element => {
  // other states
  const [loading, setLoading] = useState<boolean>(false);

  // form state
  const [firstName, updateFirstName, resetFirstName] = useInput("");
  const [lastName, updateLastName, resetLastName] = useInput("");
  const [email, updateEmail, resetEmail] = useInput("");
  const [phone, updatePhone, resetPhone] = useInput("");
  const [message, updateMessage, resetMessage] = useInput("");

  return (
    <FormDataSection>
      <FormSection>
        <PrimaryHeading alignment="left">Let's talk</PrimaryHeading>
        <FormGroup>
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
          <SecondaryHeading>Experts 4 You Private Limited.</SecondaryHeading>
          <Paragraph>
            No 290, D. R. Wijewardena Mw, Colombo, Sri Lanka
          </Paragraph>
        </ItemGroup>
        <ItemGroup>
          <SubHeading>077 734 2212</SubHeading>
          <SubHeading>connect@xperts4you.com</SubHeading>
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
