import { motion, Variants } from "framer-motion";
import styled from "styled-components";

interface NavBarContainerProps {
  scrolled: boolean;
}

const NavBarContainer = styled.nav<NavBarContainerProps>`
  width: 100%;
  height: auto;
  padding: 3rem 10rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;

  display: grid;
  grid-template-columns: min-content minmax(min-content, 1fr);
  grid-template-rows: min-content;
  grid-template-areas: "lo na";
  column-gap: 5rem;

  align-items: center;
  justify-content: start;

  &::before {
    content: "";

    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: ${(props) =>
      props.scrolled ? props.theme.shadows.spread : "none"};
    transform-origin: ${(props) =>
      props.scrolled ? "center top" : "center bottom"};
    transform: ${(props) => (props.scrolled ? "scaleY(1)" : "scaleY(0)")};
    transition: transform 0.2s ease-in-out;
  }

  ${(props) => props.theme.responsive.width700} {
    padding: 3rem 5rem;
  }

  ${(props) => props.theme.responsive.width600} {
    padding: 3rem;
  }
`;

const MobileNavPanel = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background-image: ${(props) => props.theme.gradients.coverBg};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  row-gap: 5rem;

  ${(props) => props.theme.responsive.width800} {
    row-gap: 3rem;
  }
`;

const MobileNavLinks = styled(motion.a)`
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: none;
  outline: none;
  color: ${(props) => props.theme.colors.blackMedium};
  transition: color 0.2s ease-in-out 0.1s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }

  ${(props) => props.theme.responsive.width800} {
    font-size: 4rem;
  }

  ${(props) => props.theme.responsive.mobile} {
    font-size: 3.5rem;
  }
`;

const Logo = styled(motion.img)`
  z-index: 2;
  grid-area: lo;
  height: 3.5rem;
  object-fit: contain;
  cursor: pointer;

  ${(props) => props.theme.responsive.mobile} {
    height: 3rem;
  }
`;

const NavLinkWrapper = styled.div`
  z-index: 2;
  grid-area: na;
  justify-self: end;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 3rem;
`;

interface HamburgerProps {
  clicked: boolean;
}

const HamburgerMenuIcon = styled.button<HamburgerProps>`
  z-index: 2;
  width: 4rem;
  height: 3rem;

  justify-self: end;
  outline: none;
  border: none;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  background-color: transparent;

  & > span {
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.colors.blackMedium};
    border-radius: 5px;
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  }

  & > *:nth-child(1) {
    transform-origin: center left;
    transform: ${(props) =>
      props.clicked
        ? "translateY(-1px) rotate(45deg)"
        : "translateY(0) rotate(0deg)"};
  }
  & > *:nth-child(2) {
    transform: ${(props) =>
      props.clicked ? "translateX(-150%)" : "translateX(0)"};
    opacity: ${(props) => (props.clicked ? 0 : 1)};
  }
  & > *:nth-child(3) {
    transform-origin: center left;
    transform: ${(props) =>
      props.clicked
        ? "translateY(1px) rotate(-45deg)"
        : "translateY(0) rotate(0deg)"};
  }
`;

const NavLink = styled.a`
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;
  color: ${(props) => props.theme.colors.blackMedium};
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.primaryMedium};
  }
`;

const MobileNavPanelMotionVariants: Variants = {
  initial: {
    scaleY: 0,
    transformOrigin: "center top",
  },
  enter: {
    scaleY: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
      delay: 0.1,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
  exit: {
    transformOrigin: "center bottom",
    scaleY: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
      staggerChildren: 0.1,
      when: "afterChildren",
    },
  },
};

const MobileNavLinksMotionVariant: Variants = {
  initial: {
    opacity: 0,
    x: "-3rem",
  },
  enter: {
    opacity: 1,
    x: "0rem",
  },
  exit: { opacity: 0, x: "3rem" },
};

const logoMotionVariants: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export {
  NavBarContainer,
  MobileNavPanel,
  MobileNavLinks,
  Logo,
  NavLinkWrapper,
  HamburgerMenuIcon,
  NavLink,
  MobileNavPanelMotionVariants,
  MobileNavLinksMotionVariant,
  logoMotionVariants,
};
