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
} from "./styles";

import { homeLinks, navLinks, socialMedia } from "@site-data";

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterContainer>
      <FooterBG />
      <FooterOverlay />
      <LinkSection>
        <Logo
          src="/assets/logo/logo.svg"
          alt="Experts 4 You | Business consultants in Sri Lanka"
        ></Logo>
        <TertiaryHeading>Experts 4 You Private Limited.</TertiaryHeading>
        <Paragraph>No 290, D. R. Wijewardena Mw, Colombo, Sri Lanka</Paragraph>
        <Paragraph>
          Phone: 077 734 2212
          <br />
          Email: connect@xperts4you.com
        </Paragraph>
      </LinkSection>
      <LinkSection>
        <TertiaryHeading>Home</TertiaryHeading>
        <LinkGroup>
          {homeLinks.map((link) => (
            <Link href={link.route}>
              <Route>{link.name}</Route>
            </Link>
          ))}
        </LinkGroup>
      </LinkSection>
      <LinkSection>
        <TertiaryHeading>Navigation</TertiaryHeading>
        <LinkGroup>
          {navLinks.map((link) => (
            <Link href={link.route}>
              <Route>{link.name}</Route>
            </Link>
          ))}
        </LinkGroup>
      </LinkSection>
      <LinkSection>
        <TertiaryHeading>Follow us on</TertiaryHeading>
        <LinkGroup>
          {socialMedia.map((media) => (
            <SocialMediaButton href={media.link}>
              <svg>
                <use xlinkHref={`/assets/svg/sprites.svg#${media.icon}`} />
              </svg>
              <span>{media.name}</span>
            </SocialMediaButton>
          ))}
        </LinkGroup>
      </LinkSection>
      <CopyrightNote>
        <Paragraph small>
          © {new Date().getFullYear()} <b>Experts 4 You Private Limited.</b> All
          Rights Reserved.
        </Paragraph>
        <Paragraph small>
          Website designed & developed by{" "}
          <b>
            <a href="https://advertaro.lk" target="_blank">
              Advertaro
            </a>
          </b>
        </Paragraph>
      </CopyrightNote>
    </FooterContainer>
  );
};

export default Footer;
