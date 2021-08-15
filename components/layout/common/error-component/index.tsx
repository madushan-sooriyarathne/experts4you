import { ErrorContainer, ErrorCode, TitleGroup } from "./styles";
import { errors } from "@site-data";
import SecondaryHeading from "@components/headings/secondary-heading";
import SubHeading from "@components/headings/sub-heading";
import PrimaryButton from "@components/buttons/primary-button";

interface Props {
  statusCode: number;
}

const ErrorComponent: React.FC<Props> = ({
  statusCode,
}: Props): JSX.Element => {
  const error: ErrorType =
    errors.find((err) => err.errorCode == statusCode) || errors[0];

  return (
    <ErrorContainer>
      <ErrorCode>{error.errorCode}</ErrorCode>
      <TitleGroup>
        <SecondaryHeading>{error.heading}</SecondaryHeading>
        <SubHeading>{error.message}</SubHeading>
      </TitleGroup>
      <PrimaryButton type="route" route="/">
        Go Back to Home Page
      </PrimaryButton>
    </ErrorContainer>
  );
};

export default ErrorComponent;
