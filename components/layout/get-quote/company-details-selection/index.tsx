import ActionButton from "@components/buttons/action-button";
import SubmitButton from "@components/buttons/submit-button";
import SecondaryHeading from "@components/headings/secondary-heading";
import InputField from "@components/input-field";
import { ChangeEvent, FormEvent } from "react";
import { Wrapper, FormGroup, ButtonGroup, EntitySelectorGroup } from "./styles";

import RadioButton from "@components/radio-button";

interface Props {
  type: "inc" | "book" | "tax";
  values: {
    businessName: string;
    natureOfBusiness: string;
    noOfDirectors: string;
    quarterlyTurnover: string;
    entityType: string;
  };
  handleChange: (e: ChangeEvent<any>) => void;
  handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void;
  onBack: () => void;
}

const entityTypes = [
  "Sole Proprietorship",
  "Partnership",
  "Limited Liability Company",
  "Public Limited Company",
  "Overseas Company",
  "Offshore Company",
];

const CompanyDetailsSelection: React.FC<Props> = (
  props: Props
): JSX.Element => {
  return (
    <Wrapper
      onSubmit={props.handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SecondaryHeading alignment="left">
        Tell us about your company
      </SecondaryHeading>
      <FormGroup>
        {props.type === "tax" && (
          <EntitySelectorGroup>
            {entityTypes.map((ent) => (
              <RadioButton
                key={ent.replace(" ", "-").toLowerCase()}
                name="entityType"
                label={ent}
                value={ent}
                checked={ent === props.values.entityType}
                onChange={props.handleChange}
              />
            ))}
          </EntitySelectorGroup>
        )}
        <InputField
          label={`${props.type === "tax" ? "Entity" : "Company"} Name`}
          placeholder={`My ${props.type === "tax" ? "Entity" : "Company"}`}
          name="businessName"
          type="text"
          value={props.values.businessName}
          onChange={props.handleChange}
          required
        />
        <InputField
          label={`Nature of the ${props.type === "tax" ? "Entity" : "Company"}`}
          name="natureOfBusiness"
          placeholder="Retail & Wholesale"
          type="text"
          value={props.values.natureOfBusiness}
          onChange={props.handleChange}
          required
        />

        {props.type === "inc" ? (
          <InputField
            label="Number of Directors"
            name="noOfDirectors"
            placeholder="2"
            type="number"
            value={props.values.noOfDirectors}
            onChange={props.handleChange}
            required
          />
        ) : (
          <InputField
            label="Quarterly Turnover"
            name="quarterlyTurnover"
            placeholder="5000000"
            type="number"
            value={props.values.quarterlyTurnover}
            onChange={props.handleChange}
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
