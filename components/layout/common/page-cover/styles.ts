import styled from "styled-components";

const CoverContainer = styled.header`
  grid-column: full-start / full-end;
  width: 100%;
  height: 80vh;
  padding: 15rem 10rem 0rem 10rem;
  /* margin-bottom: 5rem; */
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem 10rem;
  background-color: transparent;
  position: relative;

  display: grid;
  grid-template-columns: minmax(60rem, 1fr) 1fr;
  gap: 10rem;
  align-items: center;
  justify-content: start;
`;

const CoverBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: -2;
  background: ${(props) => props.theme.gradients.coverBg};
`;

const CoverBgOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: -1;
  background-image: ${(props) => props.theme.gradients.blurBg};
  backdrop-filter: blur(4px);
`;

const SubHeadingBox = styled.div`
  position: absolute;
  z-index: 1;
  height: auto;
  width: 50rem;

  top: 70%;
  left: 0;
  padding: 5rem;
  background-color: ${(props) => props.theme.colors.blackMedium};
  transition: transform 0.3s ease-in-out, box-shadow 0.2s ease-in-out;
  &:hover {
    transform: translate3d(0, -5px, 2px);
    box-shadow: ${(props) => props.theme.shadows.spread};
  }
`;

export { CoverContainer, Cover, CoverBg, CoverBgOverlay, SubHeadingBox };
