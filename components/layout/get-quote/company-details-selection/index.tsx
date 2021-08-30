import ActionButton from "@components/buttons/action-button";
import SecondaryButton from "@components/buttons/secondary-button";
import SubmitButton from "@components/buttons/submit-button";
import SecondaryHeading from "@components/headings/secondary-heading";
import InputField from "@components/input-field";
import { FormEvent } from "react";
import { Wrapper, FormGroup, ButtonGroup } from "./styles";

interface IncProps {
  businessName: string;
  natureOfBusiness: string;
  noOfDirectors: string;
  updateBusinessName: (event: InputEventType) => void;
  updateNatureOfBusiness: (event: InputEventType) => void;
  updateNoOfDirectors: (event: InputEventType) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
  type: "inc";
}

interface OtherProps {
  businessName: string;
  natureOfBusiness: string;
  quarterlyTurnOver: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
  updateBusinessName: (event: InputEventType) => void;
  updateNatureOfBusiness: (event: InputEventType) => void;
  updateQuarterlyTurnOver: (event: InputEventType) => void;
  type: "other";
}

type Props = IncProps | OtherProps;

const CompanyDetailsSelection: React.FC<Props> = (
  props: Props
): JSX.Element => {
  return (
    <Wrapper
      onSubmit={props.onSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SecondaryHeading alignment="left">
        Tell us about your company
      </SecondaryHeading>
      <FormGroup>
        <InputField
          name="Company Name"
          placeholder="My Company"
          type="text"
          value={props.businessName}
          onChange={props.updateBusinessName}
          required
        />
        <InputField
          name="Nature of Business"
          placeholder="Retail & Wholesale"
          type="text"
          value={props.natureOfBusiness}
          onChange={props.updateNatureOfBusiness}
          required
        />
        {props.type === "inc" ? (
          <InputField
            name="Number of Directors"
            placeholder="2"
            type="number"
            value={props.noOfDirectors}
            onChange={props.updateNoOfDirectors}
            required
          />
        ) : (
          <InputField
            name="Quarterly Turnover"
            placeholder="5000000"
            type="number"
            value={props.quarterlyTurnOver}
            onChange={props.updateQuarterlyTurnOver}
            required
          />
        )}
      </FormGroup>
      <ButtonGroup>
        <ActionButton onClick={props.onBack}>Back</ActionButton>
        <SubmitButton loading={false}>Next</SubmitButton>
      </ButtonGroup>
    </Wrapper>
  );
};

export default CompanyDetailsSelection;
