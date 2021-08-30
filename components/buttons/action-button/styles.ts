import styled from "styled-components";

interface ButtonProps {
  light: boolean;
  large: boolean;
}

const Button = styled.button<ButtonProps>`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 1.5rem 2.5rem;
  color: ${(props) =>
    props.light
      ? props.theme.colors.primaryLight
      : props.theme.colors.primaryDark};
  outline: none;
  border: ${(props) =>
    props.large
      ? `2px solid ${
          props.light
            ? props.theme.colors.primaryLight
            : props.theme.colors.primaryDark
        }`
      : "none"};
  background-color: transparent;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${(props) =>
      props.large
        ? props.light
          ? props.theme.colors.primaryDark
          : props.theme.colors.primaryLight
        : props.theme.colors.primary};
    background-color: ${(props) =>
      props.large
        ? `${
            props.light
              ? props.theme.colors.primaryLight
              : props.theme.colors.primaryDark
          }`
        : "transparent"};
  }
`;

export { Button };
