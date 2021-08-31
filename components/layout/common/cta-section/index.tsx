import PrimaryButton from "@components/buttons/primary-button";
import SecondaryHeading from "@components/headings/secondary-heading";
import { CTAContainer } from "./styles";

interface Props {
  heading?: string;
  route?: string;
  buttonText?: string;
}

const CTASection: React.FC<Props> = ({
  heading = "Got a problem that needs a solution from us?",
  route = "/get-quote",
  buttonText = "Get a Quote",
}: Props): JSX.Element => {
  return (
    <CTAContainer>
      <SecondaryHeading>{heading}</SecondaryHeading>
      <PrimaryButton type="route" route={route}>
        {buttonText}
      </PrimaryButton>
    </CTAContainer>
  );
};

export default CTASection;
