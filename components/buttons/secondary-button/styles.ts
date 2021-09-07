import styled from "styled-components";

interface ButtonProps {
  light: boolean;
  padding: boolean;
}

const Button = styled.a<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 1rem;
  cursor: pointer;
  padding: ${(props) => (props.padding ? "0 3rem" : "none")};

  &:hover {
    & > svg {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }
  }

  & > span {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    outline: none;
    text-decoration: none;
    text-align: center;
    color: ${(props) =>
      props.light
        ? props.theme.colors.primaryLight
        : props.theme.colors.primary};
    transition: color 0.3s ease-in-out 0.2s;
  }

  & > svg {
    height: 1rem;
    width: 3rem;
    transform: translateX(calc(-1rem + (-100%)));
    opacity: 0;
    visibility: hidden;
    stroke: ${(props) =>
      props.light
        ? props.theme.colors.primaryLight
        : props.theme.colors.primary};
    transition: transform 0.3s ease-in-out, opacity 0.4s ease-in-out;
    /* overflow: hidden; */
  }
`;

export { Button };
