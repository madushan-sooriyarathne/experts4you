import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

interface SpinnerProps {
  small: boolean;
  light: boolean;
}

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

const Spinner = styled(motion.div)<SpinnerProps>`
  width: ${(props) => (props.small ? "1.5rem" : "10rem")};
  height: ${(props) => (props.small ? "1.5rem" : "10rem")};
  background: transparent;

  border-radius: 50%;
  border-top-width: ${(props) => (props.small ? "2px" : "4px")};
  border-top-style: solid;
  border-top-color: ${(props) =>
    props.light
      ? props.theme.colors.primaryLight
      : props.theme.colors.blackMedium};
  animation: ${spin} 1s linear infinite;
`;

export { Spinner };
