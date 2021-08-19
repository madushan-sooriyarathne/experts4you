import Page from "@components/layout/common/page";
import ContactSection from "@components/layout/contact/contact-section";
import MapSection from "@components/layout/contact/map";
import { NextPage } from "next";

const ContactPage: NextPage = (): JSX.Element => {
  return (
    <Page title="Contact">
      <ContactSection />
      <MapSection />
    </Page>
  );
};

export default ContactPage;
