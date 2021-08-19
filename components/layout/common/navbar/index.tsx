import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks } from "@site-data";

import {
  NavBarContainer,
  Logo,
  NavLinkWrapper,
  logoMotionVariants,
  NavLink,
  NavLinkGroup,
} from "./styles";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const NavBar: React.FC = (): JSX.Element => {
  const router = useRouter();

  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  });

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <NavBarContainer scrolled={scrolled}>
      <AnimatePresence>
        {scrolled ? (
          <Logo
            src="/assets/logo/logo-small.svg"
            alt="Experts 4 You"
            key="logo-regular"
            variants={logoMotionVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            onClick={handleLogoClick}
          />
        ) : (
          <Logo
            src="/assets/logo/logo.svg"
            alt="Experts 4 You"
            key="logo-small"
            variants={logoMotionVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            onClick={handleLogoClick}
          />
        )}
      </AnimatePresence>

      <NavLinkWrapper>
        <NavLinkGroup>
          {navLinks.map((link) => (
            <Link href={link.route} key={`nav-${link.name}`}>
              <NavLink>{link.name}</NavLink>
            </Link>
          ))}
        </NavLinkGroup>
      </NavLinkWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
