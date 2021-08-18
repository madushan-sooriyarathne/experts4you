import LoadingSpinner from "@components/loading-spinner";
import { AnimateSharedLayout } from "framer-motion";
import { ReactNode } from "react";
import { Button, ButtonText } from "./styles";

interface Props {
  children: ReactNode;
  loading: boolean;
  light?: boolean;
}

const SubmitButton: React.FC<Props> = ({
  children,
  loading,
  light = false,
}: Props): JSX.Element => {
  return (
    <AnimateSharedLayout>
      <Button light={light} type="submit" layout>
        <ButtonText light={light} layoutId="buttontext">
          {children}
        </ButtonText>
        {loading && <LoadingSpinner light={!light} small />}
      </Button>
    </AnimateSharedLayout>
  );
};

export default SubmitButton;
