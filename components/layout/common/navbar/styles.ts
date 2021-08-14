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
  z-index: 100;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
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
`;

const Logo = styled(motion.img)`
  grid-area: lo;
  height: 3.5rem;
  object-fit: contain;
  cursor: pointer;
`;

const NavLinkWrapper = styled.div`
  grid-area: na;
  justify-self: end;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 4rem;
`;

const NavLinkGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 3rem;
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
    color: ${(props) => props.theme.colors.secondaryMedium};
  }
`;

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
  Logo,
  NavLinkWrapper,
  logoMotionVariants,
  NavLinkGroup,
  NavLink,
};
