import styled from "styled-components";

interface ParaProps {
  alignment: AlignmentType;
  small: boolean;
  light: boolean;
}

const Para = styled.div<ParaProps>`
  /* margin-bottom: 1rem; */
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  row-gap: 1rem;

  & p {
    font-size: ${(props) => (props.small ? "1.3rem" : "1.5rem")};
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 400;
    letter-spacing: 0.1px;
    line-height: 150%;
    text-align: ${(props) => props.alignment};
    color: ${(props) =>
      props.light ? props.theme.colors.white : props.theme.colors.black};
  }

  & b {
    font-weight: 700;
  }

  & a {
    font-weight: 700;
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  & ul {
    padding: 0 5rem;
    & > li {
      font-size: 1.5rem;
      font-weight: 500;
      letter-spacing: 0.5px;
      line-height: 145%;
    }

    ${(props) => props.theme.responsive.width500} {
      padding: 0 2rem;
    }
  }
`;

export { Para };
