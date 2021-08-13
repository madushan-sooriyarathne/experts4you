import { ReactNode } from "react";
import { Heading } from "./styles";

interface Props {
  children: ReactNode;
  light?: boolean;
  alignment?: AlignmentType;
}

const SubHeading: React.FC<Props> = ({
  children,
  light = false,
  alignment = "center",
}: Props): JSX.Element => {
  return (
    <Heading alignment={alignment} light={light}>
      {children}
    </Heading>
  );
};

export default SubHeading;
