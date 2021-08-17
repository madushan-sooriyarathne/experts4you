import PrimaryButton from "@components/buttons/primary-button";
import PrimaryHeading from "@components/headings/primary-heading";
import SubHeading from "@components/headings/sub-heading";
import { ReactNodeArray } from "react";
import GridLayout from "../grid-layout";
import { GridContainer, TitleWrapper } from "./styles";

interface Props {
  heading: string;
  subHeading?: string;
  children: ReactNodeArray;
  route?: string;
  id?: string;
}

const TitledGrid: React.FC<Props> = ({
  heading,
  children,
  subHeading,
  route,
  id = "",
}: Props): JSX.Element => {
  return (
    <GridContainer id={id}>
      <TitleWrapper>
        <PrimaryHeading>{heading}</PrimaryHeading>
        {subHeading && <SubHeading>{subHeading}</SubHeading>}
      </TitleWrapper>
      <GridLayout>{children}</GridLayout>
      {route && (
        <PrimaryButton route={route} type="route">
          Learn More
        </PrimaryButton>
      )}
    </GridContainer>
  );
};

export default TitledGrid;
