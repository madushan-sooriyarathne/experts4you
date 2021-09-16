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
} from "./styled";

interface Props {
  values: IncomeFormFields;
  handleChange: (event: InputEventType) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const IncomeForm: React.FC<Props> = ({
  values,
  handleChange,
  handleSubmit,
}: Props): JSX.Element => {
  return (
    <FormContainer
      key="income-form"
      layoutId="income-form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TitleWrapper>
        <SecondaryHeading alignment="center">
          Tell us about your income
        </SecondaryHeading>
        <SubHeading alignment="center">
          You will be taxed only if your total monthly income is above Rs.
          250,000
        </SubHeading>
      </TitleWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <InputField
          label="Employment Income"
          name="employment"
          value={values.employment}
          onChange={handleChange}
          type="number"
          placeholder="250000"
          required
        />
        <InputField
          label="Business Income"
          name="business"
          value={values.business}
          onChange={handleChange}
          type="number"
          placeholder="250000"
          required
        />
        <InputField
          label="Interest Income"
          name="interest"
          value={values.interest}
          onChange={handleChange}
          type="number"
          placeholder="250000"
          required
        />
        <InputField
          label="Other Income"
          name="other"
          value={values.other}
          onChange={handleChange}
          type="number"
          placeholder="250000"
          required
        />
        <ButtonWrapper>
          <SubmitButton loading={false}>Next</SubmitButton>
        </ButtonWrapper>
      </FormWrapper>
    </FormContainer>
  );
};

export default IncomeForm;
