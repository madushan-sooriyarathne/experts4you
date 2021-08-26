import Page from "@components/layout/common/page";
import PrivacyPolicy from "@components/layout/privacy-policy";
import { NextPage } from "next";

const PrivacyPolicyPage: NextPage = (): JSX.Element => {
  return (
    <Page>
      <PrivacyPolicy />
    </Page>
  );
};

export default PrivacyPolicyPage;
