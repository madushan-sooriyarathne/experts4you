import styled from "styled-components";

interface ContainerProps {
  show: boolean;
}

const Container = styled.div<ContainerProps>`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows.spread};
  opacity: ${(props) => (props.show ? "1" : "0")};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: opacity 0.2s ease-out;
  ${(props) => props.theme.responsive.width500} {
    padding: 1rem;
  }
`;

const Icon = styled.svg`
  width: 3rem;
  height: 3rem;
  fill: ${(props) => props.theme.colors.primaryDark};
  transition: fill 0.2s ease-in-out;
  &:hover {
    fill: ${(props) => props.theme.colors.primaryMedium};
  }
`;

export { Container, Icon };
