import styled from "styled-components";

interface HeadingProps {
  alignment: AlignmentType;
  light: boolean;
}

const Heading = styled.h1<HeadingProps>`
  font-size: 5rem;
  font-weight: 900;
  font-family: ${(props) => props.theme.fonts.secondary};
  letter-spacing: 1px;
  text-align: ${(props) => props.alignment};
  color: ${(props) =>
    props.light ? props.theme.colors.white : props.theme.colors.primary};

  background: ${(props) =>
    props.light
      ? props.theme.gradients.headingLight
      : props.theme.gradients.headingDark};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export { Heading };
