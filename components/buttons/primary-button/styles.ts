import { redirect } from "next/dist/next-server/server/api-utils";
import styled from "styled-components";

interface ButtonProps {
  light: boolean;
}

const Button = styled.a<ButtonProps>`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 2rem 3rem;
  outline: none;
  text-decoration: none;
  text-align: center;
  color: ${(props) =>
    props.light ? props.theme.colors.black : props.theme.colors.white};
  border: ${(props) =>
    `1px solid ${
      props.light ? props.theme.colors.black : props.theme.colors.white
    }`};

  background-color: transparent;
  position: relative;
  cursor: pointer;
  display: block;

  &:hover {
    &::after {
      transform: translate(0, 0);
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: translate(1rem, 1rem);
    /* background-color: ${(props) =>
      props.light ? props.theme.colors.black : props.theme.colors.white}; */
    background-color: yellow;
    transition: transform 0.3s ease-in-out;
  }
`;

export { Button };
