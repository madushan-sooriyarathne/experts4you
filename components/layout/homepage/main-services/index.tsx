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
      {services.map((service) => (
        <ServicesSection key={service.id}>
          <SectionBackground>
            <ImageComponent image={service.image} />
          </SectionBackground>
          <PrimaryHeading light>{service.name}</PrimaryHeading>
          <Paragraph light alignment="center">
            {service.description}
          </Paragraph>
          <PrimaryButton route={`/${service.id}`} type="route" light>
            Learn More
          </PrimaryButton>
        </ServicesSection>
      ))}
    </ServicesContainer>
  );
};

export default MainServicesSection;