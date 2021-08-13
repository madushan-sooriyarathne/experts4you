import styled from "styled-components";

const Container = styled.div`
  grid-column: full-start / full-end;

  width: 100%;
  height: 100vh;
  padding: 10rem 10rem 0 10rem;

  margin-bottom: -20rem;

  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: 1fr;
  grid-template-areas: "co im";
  column-gap: 5rem;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);
`;

const ContainerBG = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -2;

  background-image: ${(props) => `url("/assets/svg/bg.svg"),
    ${props.theme.gradients.mainBg}`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContainerOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background-image: ${(props) => props.theme.gradients.blurBg};
  backdrop-filter: blur(100px);
`;

const TextContainer = styled.div`
  grid-area: co;
  padding: 10rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  row-gap: 4rem;
`;

const ImageContainer = styled.div`
  grid-area: im;
  width: 100%;
  height: 100%;
`;

const StatGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  align-items: start;
  justify-items: start;
  column-gap: 5rem;

  margin-top: 5rem;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 1rem;
`;

const StatNumber = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  font-family: ${(props) => props.theme.fonts.primary};
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.blackMedium};
`;

const StatLabel = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: ${(props) => props.theme.fonts.primary};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-align: left;
  color: ${(props) => props.theme.colors.blackMedium};
`;

export {
  Container,
  ContainerBG,
  ContainerOverlay,
  TextContainer,
  ImageContainer,
  StatGroup,
  StatItem,
  StatNumber,
  StatLabel,
};
