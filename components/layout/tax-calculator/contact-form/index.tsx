import SubmitButton from "@components/buttons/submit-button";
import SecondaryHeading from "@components/headings/secondary-heading";
import SubHeading from "@components/headings/sub-heading";
import InputField from "@components/input-field";
import { FormEvent } from "react";

import {
  FormContainer,
  TitleWrapper,
  FormWrapper,
  ButtonWrapper,
  TaxSummery,
  TaxSummeryItem,
} from "./styles";
import ActionButton from "@components/buttons/action-button";
import PrimaryHeading from "@components/headings/primary-heading";

interface Props {
  tax: {
    taxAmount: number;
    taxRelief: number;
  };
  values: ContactFormFields;
  handleChange: (event: InputEventType) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
  loading: boolean;
}

const ContactForm: React.FC<Props> = ({
  values,
  tax,
  loading,
  handleChange,
  handleSubmit,
  onCancel,
}: Props): JSX.Element => {
  return (
    <FormContainer
      key="contact-form"
      layoutId="contact-form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TaxSummery>
        {tax.taxAmount - tax.taxRelief <= 0 ? (
          <PrimaryHeading alignment="center">
            You are not liable to pay any TAX
          </PrimaryHeading>
        ) : (
          <TaxSummeryItem>
            <p>Total TAX Payable (Annual)</p>
            <PrimaryHeading alignment="center">
              {`LKR ${tax.taxAmount - tax.taxRelief}`}
            </PrimaryHeading>
          </TaxSummeryItem>
        )}
      </TaxSummery>
      <TitleWrapper>
        <SecondaryHeading alignment="center">
          Consult our Tax Experts for Free & Plan your Tax Liability.
        </SecondaryHeading>
        <SubHeading alignment="center">
          Get a detailed tax report based on your income and expenses
        </SubHeading>
      </TitleWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <InputField
          label="Your name"
          name="name"
          value={values.name}
          onChange={handleChange}
          type="text"
          placeholder="John Doe"
          required
        />
        <InputField
          label="Your Email Address"
          name="email"
          value={values.email}
          onChange={handleChange}
          type="email"
          placeholder="example@example.com"
          required
        />
        <InputField
          label="Your Phone Number"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          type="tel"
          placeholder="+94 77 123 456"
          required
        />
        <ButtonWrapper>
          <SubmitButton loading={loading}>Submit</SubmitButton>
          <ActionButton onClick={onCancel}>Cancel</ActionButton>
        </ButtonWrapper>
      </FormWrapper>
    </FormContainer>
  );
};

export default ContactForm;
