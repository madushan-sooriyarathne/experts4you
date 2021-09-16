import SubmitButton from "@components/buttons/submit-button";
import SecondaryHeading from "@components/headings/secondary-heading";
import SubHeading from "@components/headings/sub-heading";
import RadioButton from "@components/radio-button";
import { FormEvent } from "react";

import {
  FormContainer,
  TitleWrapper,
  FormWrapper,
  ButtonWrapper,
  RadioButtonWrapper,
} from "./styles";

interface Props {
  values: PeriodFormFields;
  handleChange: (event: InputEventType) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const PeriodForm: React.FC<Props> = ({
  values,
  handleChange,
  handleSubmit,
}: Props): JSX.Element => {
  return (
    <FormContainer
      key="period-form"
      layoutId="period-form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TitleWrapper>
        <SecondaryHeading alignment="center">
          Select the period
        </SecondaryHeading>
        <SubHeading alignment="center">
          Please select your income and expenses period
        </SubHeading>
      </TitleWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <RadioButtonWrapper>
          <RadioButton
            label="Monthly"
            value="Monthly"
            name="period"
            checked={values.period === "Monthly"}
            onChange={handleChange}
          />
          <RadioButton
            label="Annually"
            value="Annually"
            name="period"
            checked={values.period === "Annually"}
            onChange={handleChange}
          />
        </RadioButtonWrapper>
        <ButtonWrapper>
          <SubmitButton loading={false}>Next</SubmitButton>
        </ButtonWrapper>
      </FormWrapper>
    </FormContainer>
  );
};

export default PeriodForm;
