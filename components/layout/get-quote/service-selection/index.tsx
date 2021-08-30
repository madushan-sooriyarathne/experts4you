import SecondaryHeading from "@components/headings/secondary-heading";
import TertiaryHeading from "@components/headings/tertiary-heading";
import { Wrapper, ServiceOptionsGroup, SelectionBox, Icon } from "./styles";

interface Props {
  options: {
    name: string;
    icon: string;
    id: string;
    selected: boolean;
  }[];
  onSelect: (id: string) => void;
}

const ServiceSelection: React.FC<Props> = ({
  options,
  onSelect,
}: Props): JSX.Element => {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SecondaryHeading alignment="left">
        Let's start with what you are looking for.
      </SecondaryHeading>
      <ServiceOptionsGroup>
        {options.map((option) => (
          <SelectionBox key={option.id} onClick={() => onSelect(option.id)}>
            <Icon src={option.icon} alt={option.name} />
            <TertiaryHeading alignment="center">{option.name}</TertiaryHeading>
          </SelectionBox>
        ))}
      </ServiceOptionsGroup>
    </Wrapper>
  );
};

export default ServiceSelection;
