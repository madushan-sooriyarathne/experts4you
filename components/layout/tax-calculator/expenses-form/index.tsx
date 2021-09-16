import { FormEvent } from "react";

import SubmitButton from "@components/buttons/submit-button";
import SecondaryHeading from "@components/headings/secondary-heading";
import SubHeading from "@components/headings/sub-heading";
import InputField from "@components/input-field";

import {
  FormContainer,
  TitleWrapper,
  FormWrapper,
  ButtonWrapper,
} from "./styles";

interface Props {
  values: {
    health: string;
    family: string;
    housing: string;
    pension: string;
    investments: string;
  };
  monthly: boolean;
  handleChange: (event: InputEventType) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const ExpensesForm: React.FC<Props> = ({
  values,
  monthly,
  handleChange,
  handleSubmit,
}: Props): JSX.Element => {
  return (
    <FormContainer
      key="expenses-form"
      layoutId="expenses-form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TitleWrapper>
        <SecondaryHeading alignment="center">
          Tell us about your expenses
        </SecondaryHeading>
        <SubHeading alignment="center">{`Your ${
          monthly ? "Monthly" : "Annually"
        } expenses`}</SubHeading>
      </TitleWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <InputField
          label={`${monthly ? "Monthly" : "Annual"} Health expenses`}
          name="health"
          value={values.health}
          onChange={handleChange}
          type="number"
          placeholder="50000"
          required
        />
        <InputField
          label={`${
            monthly ? "Monthly" : "Annual"
          } Expenditure incurred locally`}
          name="family"
          value={values.family}
          onChange={handleChange}
          type="number"
          placeholder="50000"
          required
        />
        <InputField
          label={`${monthly ? "Monthly" : "Annual"} Housing loan Interest paid`}
          name="housing"
          value={values.housing}
          onChange={handleChange}
          type="number"
          placeholder="50000"
          required
        />
        <InputField
          label={`${
            monthly ? "Monthly" : "Annual"
          } Contributions to any local pension scheme`}
          name="pension"
          value={values.pension}
          onChange={handleChange}
          type="number"
          placeholder="50000"
          required
        />
        <InputField
          label="Investments in listed shares or treasury bonds/bills etc..."
          name="investments"
          value={values.investments}
          onChange={handleChange}
          type="number"
          placeholder="50000"
          required
        />
        <ButtonWrapper>
          <SubmitButton loading={false}>Calculate my TAX</SubmitButton>
        </ButtonWrapper>
      </FormWrapper>
    </FormContainer>
  );
};

export default ExpensesForm;
