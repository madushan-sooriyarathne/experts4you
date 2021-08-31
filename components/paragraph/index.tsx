import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { Para } from "./styles";

interface Props {
  children: string;
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
      <ReactMarkdown>{children.toString()}</ReactMarkdown>
    </Para>
  );
};

export default Paragraph;
