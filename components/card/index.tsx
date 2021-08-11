import SecondaryHeading from "@components/headings/secondary-heading";
import Paragraph from "@components/paragraph";
import Link from "next/link";
import { CardContainer, Icon } from "./styles";

interface Props {
  title: string;
  description: string;
  route: string;
  icon: string;
}

const Card: React.FC<Props> = ({
  title,
  description,
  route,
  icon,
}: Props): JSX.Element => {
  return (
    <Link href={route}>
      <CardContainer>
        <Icon src={icon} alt={title} />
        <SecondaryHeading alignment="left">{title}</SecondaryHeading>
        <Paragraph alignment="left">{description}</Paragraph>
      </CardContainer>
    </Link>
  );
};

export default Card;
