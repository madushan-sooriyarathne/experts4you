import { redirect } from "next/dist/next-server/server/api-utils";
import styled from "styled-components";

interface ButtonProps {
  light: boolean;
}

const Button = styled.a<ButtonProps>`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 2rem 3rem;
  outline: none;
  text-decoration: none;
  text-align: center;
  color: ${(props) =>
    props.light ? props.theme.colors.primaryLight : props.theme.colors.primary};
  border: ${(props) =>
    `1px solid ${
      props.light ? props.theme.colors.primaryLight : props.theme.colors.primary
    }`};

  background-color: transparent;
  position: relative;
  cursor: pointer;
  display: block;
  transition: color 0.3s ease-in-out 0.2s;

  z-index: 0;
  &:hover {
    color: ${(props) =>
      props.light
        ? props.theme.colors.primary
        : props.theme.colors.primaryLight};

    &::before {
      transform: scaleY(1);
      transform-origin: center bottom;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    transform-origin: center top;
    transform: scaleY(0);
    z-index: -1;
    background-color: ${(props) =>
      props.light
        ? props.theme.colors.primaryLight
        : props.theme.colors.primary};
    transition: transform 0.3s ease-in-out 0.2s;
  }
`;

export { Button };
