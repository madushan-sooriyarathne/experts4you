import PrimaryButton from "@components/buttons/primary-button";
import PrimaryHeading from "@components/headings/primary-heading";
import ImageComponent from "@components/image-component";
import Paragraph from "@components/paragraph";
import {
  Container,
  ImageContainer,
  TextContainer,
  StatGroup,
  StatItem,
  StatNumber,
  StatLabel,
  ContainerBG,
  ContainerOverlay,
} from "./styles";

interface Props {
  title: string;
  subText: string;
  stats: Stat[];
  image: Image;
}

const HeroSection: React.FC<Props> = ({
  title,
  subText,
  stats,
  image,
}: Props): JSX.Element => {
  return (
    <Container>
      <ContainerBG />
      <ContainerOverlay />
      <TextContainer>
        <PrimaryHeading alignment="left">{title}</PrimaryHeading>
        <Paragraph alignment="left">{subText}</Paragraph>
        <PrimaryButton type="route" route="/get-quote">
          Get your free consultation
        </PrimaryButton>
        <StatGroup>
          {stats.map((stat, index) => (
            <StatItem key={`stat-${index}`}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatGroup>
      </TextContainer>
      <ImageContainer>
        <ImageComponent
          image={image}
          objectFit="contain"
          pos={{ x: "center", y: "bottom" }}
        />
      </ImageContainer>
    </Container>
  );
};

export default HeroSection;
