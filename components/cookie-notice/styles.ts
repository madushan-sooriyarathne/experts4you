import { motion, Variants } from "framer-motion";
import styled from "styled-components";

const CookieBar = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100vw;
  height: auto;
  z-index: 70;
  padding: 2rem 3rem;

  background-color: ${(props) => props.theme.colors.primaryLight};

  display: grid;
  grid-template-columns: minmax(min-content, max-content) max-content;
  grid-auto-rows: min-content;
  grid-template-areas: "ma bu";
  gap: 5rem;
  align-items: center;
  justify-items: start;
  justify-content: center;

  ${(props) => props.theme.responsive.width900} {
    grid-template-areas: minmax(min-content, 1fr);
    grid-template-areas:
      "ma"
      "bu";

    gap: 2rem;
  }
`;

const CookieMessage = styled.p`
  grid-area: ma;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 145%;
  text-align: left;
  color: ${(props) => props.theme.colors.blackMedium};
`;

const ButtonWrapper = styled.div`
  grid-area: bu;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

const cookieBarVariants: Variants = {
  initial: {
    opacity: 0,
    y: "110%",
  },
  enter: {
    opacity: 1,
    y: "0",
  },
  exit: {
    opacity: 0,
    y: "110%",
  },
};

export { CookieBar, CookieMessage, ButtonWrapper, cookieBarVariants };
