import styled from "styled-components";

interface ButtonProps {
  light: boolean;
}

const Button = styled.a<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 1rem;
  padding: 3rem 0 1rem 0;

  cursor: pointer;

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
      props.light ? props.theme.colors.secondary : props.theme.colors.black};
    transition: color 0.3s ease-in-out 0.2s;
  }

  & > svg {
    height: 1rem;
    width: 3rem;
    transform: translateX(calc(-1rem + (-100%)));
    opacity: 0;
    visibility: hidden;
    transition: transform 0.3s ease-in-out, opacity 0.4s ease-in-out;
    /* overflow: hidden; */
  }
`;

export { Button };
