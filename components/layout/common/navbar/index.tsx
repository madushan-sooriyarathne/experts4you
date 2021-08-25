import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks } from "@site-data";

import {
  NavBarContainer,
  Logo,
  NavLinkWrapper,
  logoMotionVariants,
  NavLink,
  HamburgerMenuIcon,
  MobileNavPanel,
  MobileNavPanelMotionVariants,
  MobileNavLinks,
  MobileNavLinksMotionVariant,
} from "./styles";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const NavBar: React.FC = (): JSX.Element => {
  const router = useRouter();

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showHamburger, setShowHamburger] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const resizeHandler = () => {
      if (window.innerWidth < 1000) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
      }
    };

    // run once on component mount
    scrollHandler();
    resizeHandler();

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", resizeHandler);

    // when component un-mounts
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const handleLogoClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
      setTimeout(() => router.push("/"), 500);
    } else {
      router.push("/");
    }
  };

  const handleMenuClick = () => {
    if (menuOpen) {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
    setMenuOpen((preState) => !preState);
  };

  const handleNavigation = (route: string): void => {
    setMenuOpen(false);
    setTimeout(() => {
      router.push(route);
    }, 500);
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
      {showHamburger ? (
        <HamburgerMenuIcon clicked={menuOpen} onClick={handleMenuClick}>
          <span />
          <span />
          <span />
        </HamburgerMenuIcon>
      ) : (
        <NavLinkWrapper>
          {navLinks.map((link) => (
            <Link href={link.route} key={`nav-${link.name}`}>
              <NavLink>{link.name}</NavLink>
            </Link>
          ))}
        </NavLinkWrapper>
      )}
      <AnimatePresence>
        {menuOpen && (
          <MobileNavPanel
            variants={MobileNavPanelMotionVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            key="mobile-nav-panel"
          >
            <AnimatePresence>
              {navLinks.map((link) => (
                <MobileNavLinks
                  variants={MobileNavLinksMotionVariant}
                  key={`nav-${link.name}`}
                  onClick={() => handleNavigation(link.route)}
                >
                  {link.name}
                </MobileNavLinks>
              ))}
            </AnimatePresence>
          </MobileNavPanel>
        )}
      </AnimatePresence>
    </NavBarContainer>
  );
};

export default NavBar;
