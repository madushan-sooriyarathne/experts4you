import styled from "styled-components";

interface HeadingProps {
  alignment: AlignmentType;
  light: boolean;
}

const Heading = styled.h2<HeadingProps>`
  font-size: 3rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.primary};
  letter-spacing: 0.5px;
  text-align: ${(props) => props.alignment};
  color: ${(props) =>
    props.light ? props.theme.colors.white : props.theme.colors.secondary};

  background: ${(props) =>
    props.light
      ? props.theme.gradients.secondaryLight
      : props.theme.gradients.secondaryDark};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export { Heading };
