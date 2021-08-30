import { NextPage } from "next";

import Page from "@components/layout/common/page";
import MultiStepForm from "@components/layout/get-quote/multi-step-form";

const GetQuote: NextPage = (): JSX.Element => {
  return (
    <Page>
      <MultiStepForm />
    </Page>
  );
};

export default GetQuote;
