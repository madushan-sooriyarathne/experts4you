import styled from "styled-components";

const CoverContainer = styled.header`
  grid-column: full-start / full-end;
  width: 100%;
  min-height: 80vh;
  height: auto;
  padding: 10rem;
  z-index: 0;
  position: relative;

  ${(props) => props.theme.responsive.width700} {
    padding: 10rem 5rem 5rem 5rem;
    min-height: 50vh;
  }

  ${(props) => props.theme.responsive.width600} {
    padding: 10rem 2rem 5rem 2rem;
    min-height: 50vh;
  }
`;

const CoverContainerBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -2;
`;

const CoverContainerBgOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background-image: ${(props) => props.theme.gradients.blurBg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: relative;

  display: grid;
  grid-template-columns: minmax(60rem, 1fr) 1fr;
  gap: 10rem;
  align-items: center;
  justify-content: start;

  ${(props) => props.theme.responsive.width1200} {
    gap: 5rem;
  }

  ${(props) => props.theme.responsive.width1100} {
    grid-template-columns: 100% 0%;
    gap: 0;
  }
`;

const CoverCTA = styled.div`
  padding: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 5rem;

  ${(props) => props.theme.responsive.width1600} {
    padding: 5rem;
  }

  ${(props) => props.theme.responsive.width1400} {
    padding: 0;
  }
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 5rem;
`;

export {
  CoverContainer,
  CoverContainerBg,
  CoverContainerBgOverlay,
  Cover,
  CoverCTA,
  HeadingWrapper,
  ButtonWrapper,
};
