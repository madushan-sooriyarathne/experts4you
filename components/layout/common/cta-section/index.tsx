import PrimaryButton from "@components/buttons/primary-button";
import SecondaryHeading from "@components/headings/secondary-heading";
import { CTAContainer } from "./styles";

const CTASection: React.FC = (): JSX.Element => {
  return (
    <CTAContainer>
      <SecondaryHeading>
        Got a problem that needs a solution from us?
      </SecondaryHeading>
      <PrimaryButton type="route" route="/quote">
        Get a Quote
      </PrimaryButton>
    </CTAContainer>
  );
};

export default CTASection;
