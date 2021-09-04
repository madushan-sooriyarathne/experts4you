import ActionButton from "@components/buttons/action-button";
import SubmitButton from "@components/buttons/submit-button";
import SecondaryHeading from "@components/headings/secondary-heading";
import InputField from "@components/input-field";
import { FormEvent } from "react";
import { Wrapper, FormGroup, ButtonGroup } from "./styles";

interface Props {
  name: string;
  email: string;
  phone: string;
  timeToContact: string;
  loading: boolean;
  updateName: (event: InputEventType) => void;
  updateEmail: (event: InputEventType) => void;
  updatePhone: (event: InputEventType) => void;
  updateTimeToContact: (event: InputEventType) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
}

const ContactDetailsStep: React.FC<Props> = ({
  name,
  email,
  phone,
  timeToContact,
  loading,
  updateName,
  updateEmail,
  updatePhone,
  updateTimeToContact,
  onSubmit,
  onBack,
}: Props): JSX.Element => {
  return (
    <Wrapper
      onSubmit={onSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SecondaryHeading alignment="left">
        Tell us how to contact you
      </SecondaryHeading>
      <FormGroup>
        <InputField
          name="Your Name"
          placeholder="John Doe"
          type="text"
          value={name}
          onChange={updateName}
          required
        />
        <InputField
          name="Email"
          placeholder="sample@sample.com"
          type="email"
          value={email}
          onChange={updateEmail}
          required
        />
        <InputField
          name="Phone"
          placeholder="+94 12 345 6789"
          type="tel"
          value={phone}
          onChange={updatePhone}
          required
        />
        <InputField
          name="Preferred time to contact"
          placeholder="10.00 AM"
          type="text"
          value={timeToContact}
          onChange={updateTimeToContact}
          required={false}
        />
      </FormGroup>
      <ButtonGroup>
        <ActionButton onClick={onBack}>Back</ActionButton>
        <SubmitButton loading={loading}>Submit</SubmitButton>
      </ButtonGroup>
    </Wrapper>
  );
};

export default ContactDetailsStep;
