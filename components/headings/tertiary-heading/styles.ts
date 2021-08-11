import styled from "styled-components";

interface HeadingProps {
  alignment: AlignmentType;
  light: boolean;
}

const Heading = styled.h1<HeadingProps>`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.primary};
  letter-spacing: 0.5px;
  text-align: ${(props) => props.alignment};
  text-transform: uppercase;
  color: ${(props) =>
    props.light ? props.theme.colors.white : props.theme.colors.black};
`;

export { Heading };
