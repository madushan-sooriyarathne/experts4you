import SubmitButton from "@components/buttons/submit-button";
import PrimaryHeading from "@components/headings/primary-heading";
import ImageComponent from "@components/image-component";
import InputField from "@components/input-field";
import Paragraph from "@components/paragraph";
import { useInput } from "@hooks";
import { FormEvent, useState } from "react";
import { CallSection, InputGroup, InputSide } from "./styles";

const CallRequest: React.FC = (): JSX.Element => {
  //other states
  const [loading, setLoading] = useState<boolean>(false);

  // form states
  const [name, updateName, resetName] = useInput("");
  const [email, updateEmail, resetEmail] = useInput("");
  const [phone, updatePhone, resetPhone] = useInput("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setLoading(true);
    setTimeout(() => setLoading(false), 1000);

    // reset form fields
    resetName();
    resetEmail();
    resetPhone();
  };

  return (
    <CallSection>
      <InputSide>
        <PrimaryHeading>Request a Call</PrimaryHeading>
        <InputGroup onSubmit={handleSubmit}>
          <InputField
            value={name}
            onChange={updateName}
            name="Name"
            placeholder="John Doe"
            type="text"
          />
          <InputField
            value={email}
            onChange={updateEmail}
            name="Phone"
            placeholder="(+94) 77 123 4567"
            pattern="^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
            type="tel"
          />
          <InputField
            value={phone}
            onChange={updatePhone}
            name="Email"
            placeholder="example@example.com"
            pattern={`/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`}
            type="email"
          />
          <SubmitButton loading={loading} light>
            Submit
          </SubmitButton>
        </InputGroup>
        <Paragraph small>
          By submitting this form, I agree to having my personal and contact
          information processed and used for the purpose of marketing
          communications.
          <br /> For more details, Please refer to our <a>Privacy Policy.</a>
        </Paragraph>
      </InputSide>
      <ImageComponent
        image={{
          src: "/assets/img/phone.jpg",
          alt: "Request a Call | Experts 4 You",
          blurUrl: "data:image/svg+xml;base64,L4ON8#t7~qxuxaofayWB~qtQ9FRj",
        }}
      />
    </CallSection>
  );
};

export default CallRequest;
