import PrimaryButton from "@components/buttons/primary-button";
import PrimaryHeading from "@components/headings/primary-heading";
import ImageComponent from "@components/image-component";
import Paragraph from "@components/paragraph";
import { HeroContainer, HeroSection, SectionBackground } from "./styles";

interface Props {
  services: Service[];
}

const Hero: React.FC<Props> = ({ services }: Props): JSX.Element => {
  return (
    <HeroContainer>
      {services.map((service) => (
        <HeroSection key={service.id}>
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
        </HeroSection>
      ))}
    </HeroContainer>
  );
};

export default Hero;
