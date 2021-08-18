import { Spinner } from "./styles";

interface Props {
  light?: boolean;
  small?: boolean;
}

const LoadingSpinner: React.FC<Props> = ({
  light = false,
  small = false,
}: Props): JSX.Element => {
  return <Spinner light={light} small={small} layout />;
};

export default LoadingSpinner;
