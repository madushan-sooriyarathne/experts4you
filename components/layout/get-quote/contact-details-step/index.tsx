import ActionButton from "@components/buttons/action-button";
import SubmitButton from "@components/buttons/submit-button";
import SecondaryHeading from "@components/headings/secondary-heading";
import InputField from "@components/input-field";
import { FormEvent } from "react";
import { Wrapper, FormGroup, ButtonGroup } from "./styles";

interface Props {
  values: {
    name: string;
    email: string;
    phone: string;
    timeToContact: string;
  };
  loading: boolean;
  handleChange: (event: InputEventType) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
}

const ContactDetailsStep: React.FC<Props> = ({
  values,
  loading,
  handleChange,
  handleSubmit,
  onBack,
}: Props): JSX.Element => {
  return (
    <Wrapper
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SecondaryHeading alignment="left">
        Tell us how to contact you
      </SecondaryHeading>
      <FormGroup>
        <InputField
          label="Your Name"
          name="name"
          placeholder="John Doe"
          type="text"
          value={values.name}
          onChange={handleChange}
          required
        />
        <InputField
          label="Email"
          name="email"
          placeholder="sample@sample.com"
          type="email"
          value={values.email}
          onChange={handleChange}
          required
        />
        <InputField
          label="Phone"
          name="phone"
          placeholder="+94 12 345 6789"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          required
        />
        <InputField
          label="Preferred time to contact"
          name="timeToContact"
          placeholder="10.00 AM"
          type="text"
          value={values.timeToContact}
          onChange={handleChange}
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
