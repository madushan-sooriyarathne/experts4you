import SecondaryHeading from "@components/headings/secondary-heading";
import Paragraph from "@components/paragraph";
import { Card, Icon } from "./styles";

interface Props {
  content: CardContentType;
}

const StaticCard: React.FC<Props> = ({ content }: Props): JSX.Element => {
  return (
    <Card>
      <Icon src={content.icon} alt={content.heading}></Icon>
      <SecondaryHeading>{content.heading}</SecondaryHeading>
      <Paragraph alignment="center">{content.description}</Paragraph>
    </Card>
  );
};

export default StaticCard;
