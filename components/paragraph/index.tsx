import { ReactNode } from "react";
import { Para } from "./styles";

interface Props {
  children: ReactNode;
  alignment?: AlignmentType;
  small?: boolean;
  light?: boolean;
}

const Paragraph: React.FC<Props> = ({
  children,
  alignment = "justify",
  small = false,
  light = false,
}: Props): JSX.Element => {
  return (
    <Para alignment={alignment} small={small} light={light}>
      {children}
    </Para>
  );
};

export default Paragraph;
