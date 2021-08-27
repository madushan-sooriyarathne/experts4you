import PrimaryButton from "@components/buttons/primary-button";
import PrimaryHeading from "@components/headings/primary-heading";
import ImageComponent from "@components/image-component";
import Paragraph from "@components/paragraph";
import {
  ServicesContainer,
  ServicesSection,
  SectionBackground,
} from "./styles";

interface Props {
  services: Service[];
}

const MainServicesSection: React.FC<Props> = ({
  services,
}: Props): JSX.Element => {
  return (
    <ServicesContainer>
      {services.slice(0, 3).map((service) => (
        <ServicesSection key={service.id}>
          <SectionBackground>
            <ImageComponent image={service.image} objectFit="cover" />
          </SectionBackground>
          <PrimaryHeading>{service.name}</PrimaryHeading>
          <Paragraph alignment="center">{service.description}</Paragraph>
          <PrimaryButton route={`/services/${service.id}`} type="route">
            Explore
          </PrimaryButton>
        </ServicesSection>
      ))}
    </ServicesContainer>
  );
};

export default MainServicesSection;
