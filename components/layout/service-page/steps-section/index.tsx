import PrimaryHeading from "@components/headings/primary-heading";
import TertiaryHeading from "@components/headings/tertiary-heading";
import Paragraph from "@components/paragraph";
import {
  StepsContainer,
  StepsGroup,
  StepBox,
  StepNumber,
  Icon,
} from "./styles";

interface Props {
  steps: Step[];
}

const StepSection: React.FC<Props> = ({ steps }: Props): JSX.Element => {
  return (
    <StepsContainer>
      <PrimaryHeading>How it works</PrimaryHeading>
      <StepsGroup>
        {steps.map((step, index: number) => (
          <StepBox key={`step-${step.name}-${index}`}>
            <StepNumber>{index + 1}.</StepNumber>
            <Icon src={step.icon} alt={step.name}></Icon>
            <TertiaryHeading alignment="center">{step.name}</TertiaryHeading>
            <Paragraph alignment="center">{step.description}</Paragraph>
          </StepBox>
        ))}
      </StepsGroup>
    </StepsContainer>
  );
};

export default StepSection;
