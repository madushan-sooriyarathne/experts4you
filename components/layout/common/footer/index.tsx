import TertiaryHeading from "@components/headings/tertiary-heading";
import Paragraph from "@components/paragraph";
import Link from "next/link";
import {
  FooterContainer,
  FooterBG,
  FooterOverlay,
  CopyrightNote,
  Logo,
  LinkSection,
  LinkGroup,
  Route,
  SocialMediaButton,
  CompanyDetailsGroup,
  FooterWrapper,
} from "./styles";

import { homeLinks, navLinks, socialMedia } from "@site-data";

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterContainer>
      <FooterBG />
      <FooterOverlay />

      <FooterWrapper>
        <LinkSection>
          <Logo
            src="/assets/logo/logo.svg"
            alt="Experts 4 You | Business consultants in Sri Lanka"
          ></Logo>
          <CompanyDetailsGroup>
            <TertiaryHeading alignment="left">
              Expert4U (Private) Limited.
            </TertiaryHeading>
            <Paragraph alignment="left">
              No 290, D. R. Wijewardena Mw, Colombo 0010, Sri Lanka
            </Paragraph>
          </CompanyDetailsGroup>

          <Paragraph alignment="left">
            {`Phone: 071 866 3023\n\nEmail: connect@xperts4you.com`}
          </Paragraph>
        </LinkSection>
        <LinkSection>
          <TertiaryHeading>Home</TertiaryHeading>
          <LinkGroup>
            {homeLinks.map((link) => (
              <Link href={link.route} key={`footer-home-${link.name}`}>
                <Route>{link.name}</Route>
              </Link>
            ))}
          </LinkGroup>
        </LinkSection>
        <LinkSection>
          <TertiaryHeading>Navigation</TertiaryHeading>
          <LinkGroup>
            {navLinks.map((link) => (
              <Link href={link.route} key={`footer-nav-${link.name}`}>
                <Route>{link.name}</Route>
              </Link>
            ))}
          </LinkGroup>
        </LinkSection>
        <LinkSection>
          <TertiaryHeading>Follow us on</TertiaryHeading>
          <LinkGroup>
            {socialMedia.map((media) => (
              <SocialMediaButton
                href={media.link}
                key={`footer-social-${media.name}`}
              >
                <svg>
                  <use xlinkHref={`/assets/svg/sprites.svg#${media.icon}`} />
                </svg>
                <span>{media.name}</span>
              </SocialMediaButton>
            ))}
          </LinkGroup>
        </LinkSection>
        <CopyrightNote>
          <Paragraph small alignment="center">
            {`?? ${new Date().getFullYear()} **Expert4U (Private) Limited.** All Rights Reserved.`}
          </Paragraph>
          <Paragraph small alignment="center">
            Website designed & developed by [Advertaro](https://advertaro.lk)
          </Paragraph>
        </CopyrightNote>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
