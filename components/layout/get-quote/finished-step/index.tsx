import ActionButton from "@components/buttons/action-button";
import SecondaryHeading from "@components/headings/secondary-heading";
import SubHeading from "@components/headings/sub-heading";
import { Wrapper, Icon, TitleGroup } from "./styles";

interface Props {
  success: boolean;
  onClick: () => void;
}

const FinishedStep: React.FC<Props> = ({
  success,
  onClick,
}: Props): JSX.Element => {
  return success ? (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Icon
        src="/assets/svg/system/done.svg"
        alt="Form successfully submitted!"
      />
      <TitleGroup>
        <SecondaryHeading alignment="center">That's it!</SecondaryHeading>
        <SubHeading alignment="center">
          One of our representatives will contact you withing 24 Hours.
        </SubHeading>
      </TitleGroup>
      <ActionButton large={true} onClick={onClick}>
        Done
      </ActionButton>
    </Wrapper>
  ) : (
    <Wrapper>
      <Icon
        src="/assets/svg/system/error.svg"
        alt="Form cannot be submitted!"
      />
      <TitleGroup>
        <SecondaryHeading alignment="center">Oh no!</SecondaryHeading>
        <SubHeading alignment="center">
          We encountered an error while submitting your request. Please try
          again or contact us.
        </SubHeading>
      </TitleGroup>
      <ActionButton large={true} onClick={onClick}>
        Try again
      </ActionButton>
    </Wrapper>
  );
};

export default FinishedStep;
