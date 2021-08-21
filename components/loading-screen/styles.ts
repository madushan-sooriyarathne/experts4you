import styled, { keyframes } from "styled-components";
import { motion, Variants } from "framer-motion";

const rotate = keyframes`

0% {
    transform: rotate(0deg);
}

50% {
    transform: rotate(-180deg);
}

100% {
    transform: rotate(-360deg);
}

`;

const Screen = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  width: 100vw;
  height: 100vh;
  overflow: hidden;

  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
`;

const RotatingLogo = styled.img`
  width: 8rem;
  height: 8rem;
  animation: ${rotate} 2s ease-in-out infinite;
`;

// motion variants

const ScreenMotionVariants: Variants = {
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

export { Screen, RotatingLogo, ScreenMotionVariants };
