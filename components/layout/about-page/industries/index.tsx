import PrimaryHeading from "@components/headings/primary-heading";
import TertiaryHeading from "@components/headings/tertiary-heading";
import {
  IndustriesSection,
  IndustriesGroup,
  IndustryBox,
  Icon,
} from "./styles";

interface Props {
  industries: {
    name: string;
    id: string;
    icon: string;
  }[];
}

const Industries: React.FC<Props> = ({ industries }: Props): JSX.Element => {
  return (
    <IndustriesSection>
      <PrimaryHeading alignment="center">
        Key Industries of our clients
      </PrimaryHeading>
      <IndustriesGroup>
        {industries.map((ind) => (
          <IndustryBox key={ind.id}>
            <Icon src={ind.icon} alt={ind.name}></Icon>
            <TertiaryHeading alignment="center">{ind.name}</TertiaryHeading>
          </IndustryBox>
        ))}
      </IndustriesGroup>
    </IndustriesSection>
  );
};

export default Industries;
