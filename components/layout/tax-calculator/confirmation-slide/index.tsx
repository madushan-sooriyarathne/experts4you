import ActionButton from "@components/buttons/action-button";
import SecondaryHeading from "@components/headings/secondary-heading";
import SubHeading from "@components/headings/sub-heading";
import { SlideContainer, TitleWrapper, Icon } from "./styles";

interface Props {
  success: boolean;
  onSuccessSubmit: () => void;
  onFailedSubmit: () => void;
}

const ConfirmationSlide: React.FC<Props> = ({
  success,
  onSuccessSubmit,
  onFailedSubmit,
}: Props): JSX.Element => {
  return success ? (
    <SlideContainer
      key="confirmation-success-slide"
      layoutId="confirmation-success-slide"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TitleWrapper>
        <SecondaryHeading alignment="center">
          Thank you for submitting!
        </SecondaryHeading>
        <SubHeading alignment="center">
          One of our Tax experts will contact you soon!
        </SubHeading>
      </TitleWrapper>
      <Icon
        src="/assets/svg/system/done.svg"
        alt="Form successfully submitted!"
      />
      <ActionButton onClick={onSuccessSubmit} large>
        Okay
      </ActionButton>
    </SlideContainer>
  ) : (
    <SlideContainer
      key="confirmation-failed-slide"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <TitleWrapper>
        <SecondaryHeading alignment="center">Oh no!</SecondaryHeading>
        <SubHeading alignment="center">
          We encountered an error while submitting your request. Please try
          again!
        </SubHeading>
      </TitleWrapper>
      <Icon src="/assets/svg/system/error.svg" alt="Failed to submit!" />
      <ActionButton onClick={onFailedSubmit} large>
        Try Again
      </ActionButton>
    </SlideContainer>
  );
};

export default ConfirmationSlide;
