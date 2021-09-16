import Page from "@components/layout/common/page";
import CalculatorParent from "@components/layout/tax-calculator/calculator-parent";
import { NextPage } from "next";

const TaxCalculator: NextPage = (): JSX.Element => {
  return (
    <Page>
      <CalculatorParent />
    </Page>
  );
};

export default TaxCalculator;
