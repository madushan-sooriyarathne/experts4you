import { ReactNode } from "react";

import { Button } from "./styles";

interface Props {
  onClick: () => void;
  children: ReactNode;
  light?: boolean;
  large?: boolean;
}

const ActionButton: React.FC<Props> = ({
  onClick,
  children,
  light = false,
  large = false,
}: Props): JSX.Element => {
  return (
    <Button light={light} large={large} type="button" onClick={onClick}>
      {children}
    </Button>
  );
};

export default ActionButton;
