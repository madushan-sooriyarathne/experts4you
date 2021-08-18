import { motion } from "framer-motion";
import styled from "styled-components";

interface ButtonProps {
  light: boolean;
}

const Button = styled(motion.button)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 2rem;
  padding: 1.5rem 2.5rem;
  background-color: ${(props) =>
    props.light
      ? props.theme.colors.primaryLight
      : props.theme.colors.blackMedium};
  border: ${(props) =>
    `2px solid ${
      props.light
        ? props.theme.colors.blackMedium
        : props.theme.colors.primaryLight
    }`};
  cursor: pointer;
  outline: none;
`;

const ButtonText = styled(motion.span)<ButtonProps>`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${(props) =>
    props.light
      ? props.theme.colors.blackMedium
      : props.theme.colors.primaryLight};
`;

export { Button, ButtonText };
