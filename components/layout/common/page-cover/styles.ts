import styled from "styled-components";

const CoverContainer = styled.header`
  grid-column: full-start / full-end;
  width: 100%;
  height: 80vh;
  padding: 10rem;
  z-index: 0;
  position: relative;
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
`;

const CoverCTA = styled.div`
  padding: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 5rem;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 2rem;
`;

export {
  CoverContainer,
  CoverContainerBg,
  CoverContainerBgOverlay,
  Cover,
  CoverCTA,
  HeadingWrapper,
};
