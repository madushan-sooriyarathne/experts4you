import styled from "styled-components";

interface HeadingProps {
  alignment: AlignmentType;
  light: boolean;
}

const Heading = styled.h4<HeadingProps>`
  font-size: 1.8rem;
  font-weight: 300;
  font-family: ${(props) => props.theme.fonts.primary};
  letter-spacing: 0.5px;
  text-align: ${(props) => props.alignment};
  color: ${(props) =>
    props.light ? props.theme.colors.white : props.theme.colors.black};
`;

export { Heading };
