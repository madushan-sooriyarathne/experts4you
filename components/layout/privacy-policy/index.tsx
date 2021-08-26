import PrimaryHeading from "@components/headings/primary-heading";
import SecondaryHeading from "@components/headings/secondary-heading";
import TertiaryHeading from "@components/headings/tertiary-heading";
import Paragraph from "@components/paragraph";
import { PrivacyPolicySection, SubGroup, SubSection, List } from "./styles";

const PrivacyPolicy: React.FC = (): JSX.Element => {
  return (
    <PrivacyPolicySection>
      <SubSection>
        <PrimaryHeading>Privacy Policy</PrimaryHeading>
        <Paragraph>
          We are committed to protecting your personal information and your
          right to privacy. If you have any questions or concerns about our
          policy or our practices with regard to your personal information,
          please contact us. This Privacy Policy governs the privacy policies
          and practices of our Website, located at experts4you.com. Please read
          our Privacy Policy carefully as it will help you make informed
          decisions about sharing your personal information with us.
        </Paragraph>
      </SubSection>
      <SubSection>
        <SecondaryHeading>Information We Collect</SecondaryHeading>
        <Paragraph>
          As a Visitor, you can browse our Website to find out more about our
          Website. You are not required to provide us with any personal
          information as a Visitor.
        </Paragraph>
      </SubSection>
      <SubSection>
        <SecondaryHeading>Information You Provide to Us</SecondaryHeading>
        <Paragraph>
          We collect your personal information when you express an interest in
          obtaining information about us or our products and services or
          otherwise contacting us.
        </Paragraph>
        <Paragraph>
          Generally, you control the amount and type of information you provide
          to us when using our Website. The personal information that we collect
          depends on the context of your interaction with us and the Website,
          the choices you make, and the products and features you use. The
          personal information we collect can include the following:
        </Paragraph>
        <List>
          <li>Name, Email Address, and Contact Data</li>
          <li>
            Business Information. If you choose to calculate your approximate
            tax on our Website, we may ask for specific information related to
            your business in order to create the tax report.
          </li>
        </List>
      </SubSection>
      <SubSection>
        <SecondaryHeading>Automatically Collected Information</SecondaryHeading>
        <Paragraph>
          When you use our Website, we automatically collect certain computer
          information by the interaction of your mobile phone or web browser
          with our Website. Such information is typically considered
          non-personal information. We also collect the following:
        </Paragraph>
        <SubGroup>
          <TertiaryHeading>Cookies</TertiaryHeading>
          <Paragraph>
            Our Website uses "Cookies" to identify the areas of our Website that
            you have visited. A Cookie is a small piece of data stored on your
            computer or mobile device by your web browser. We use Cookies to
            personalize the Content that you see on our Website. Most web
            browsers can be set to disable the use of Cookies. However, if you
            disable Cookies, you may not be able to access functionality on our
            Website correctly or at all. We never place Personally Identifiable
            Information in Cookies.
          </Paragraph>
        </SubGroup>
        <SubGroup>
          <TertiaryHeading>Log Information</TertiaryHeading>
          <Paragraph>
            We automatically receive information from your web browser or mobile
            device. This information includes the name of the website from which
            you entered our Website, if any, as well as the name of the website
            to which you're headed when you leave our website. This information
            also includes the IP address of your computer/proxy server that you
            use to access the Internet, your Internet Website provider name, web
            browser type, type of mobile device, and computer operating system.
            We use all of this information to analyze trends among our Users to
            help improve our Website.
          </Paragraph>
        </SubGroup>
        <SubGroup>
          <TertiaryHeading>Service Providers</TertiaryHeading>
          <Paragraph>
            We employ third-party companies and individuals to facilitate our
            Website ("Service Providers"), to provide our Website on our behalf,
            to perform Website-related services, or to assist us in analyzing
            how our Website is used. These third parties have access to your
            personal information only to perform these tasks on our behalf and
            are obligated not to disclose or use it for any other purpose.
          </Paragraph>
        </SubGroup>
      </SubSection>

      <SubSection>
        <SecondaryHeading>Analytics</SecondaryHeading>
        <Paragraph>
          Google Analytics is a web analytics service offered by Google that
          tracks and reports website traffic. Google uses the data collected to
          track and monitor the use of our Service. This data is shared with
          other Google services. Google may use the collected data to
          contextualize and personalize the ads of its own advertising network.
        </Paragraph>
        <Paragraph>
          You can opt-out of having made your activity on the Service available
          to Google Analytics by installing the Google Analytics opt-out browser
          add-on. The add-on prevents Google Analytics JavaScript (ga.js,
          analytics.js, and dc.js) from sharing information with Google
          Analytics about visits activity.
        </Paragraph>
        <Paragraph>
          For more information on the privacy practices of Google, please visit
          the Google Privacy & Terms web page:
          <br />
          <a href="http://www.google.com/intl/en/policies/privacy/">
            http://www.google.com/intl/en/policies/privacy/
          </a>
        </Paragraph>
      </SubSection>
      <SubSection>
        <SecondaryHeading>Contacting Us</SecondaryHeading>
        <Paragraph>
          If there are any questions regarding this privacy policy you may
          contact us.
        </Paragraph>
      </SubSection>
    </PrivacyPolicySection>
  );
};

export default PrivacyPolicy;
