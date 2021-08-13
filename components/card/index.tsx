import PrimaryButton from "@components/buttons/primary-button";
import SecondaryButton from "@components/buttons/secondary-button";
import SecondaryHeading from "@components/headings/secondary-heading";
import Paragraph from "@components/paragraph";
import Link from "next/link";
import { CardContainer, Icon } from "./styles";

interface Props {
  title: string;
  description: string;
  route: string;
  icon: string;
  withButton?: boolean;
}

const Card: React.FC<Props> = ({
  title,
  description,
  route,
  icon,
  withButton = false,
}: Props): JSX.Element => {
  return withButton ? (
    <CardContainer withButton={withButton}>
      <Icon src={icon} alt={title} />
      <SecondaryHeading alignment="left">{title}</SecondaryHeading>
      <Paragraph alignment="left">{description}</Paragraph>
      <SecondaryButton route={route} type="route">
        Learn More
      </SecondaryButton>
    </CardContainer>
  ) : (
    <Link href={route}>
      <CardContainer withButton={withButton}>
        <Icon src={icon} alt={title} />
        <SecondaryHeading alignment="left">{title}</SecondaryHeading>
        <Paragraph alignment="left">{description}</Paragraph>
      </CardContainer>
    </Link>
  );
};

export default Card;
