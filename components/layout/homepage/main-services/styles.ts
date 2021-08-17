import styled from "styled-components";

const ServicesContainer = styled.section`
  grid-column: full-start / full-end;
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-template-rows: 1fr;

  & > *:nth-child(1) {
    background-image: linear-gradient(
      0deg,
      rgba(252, 239, 232, 1) 0%,
      rgba(252, 239, 232, 0.8) 50%,
      rgba(252, 239, 232, 0.5) 100%
    );
  }

  & > *:nth-child(2) {
    background-image: linear-gradient(
      0deg,
      rgba(236, 250, 255, 1) 0%,
      rgba(236, 250, 255, 0.8) 50%,
      rgba(245, 252, 255, 0.5) 100%
    );
  }

  & > *:nth-child(3) {
    background-image: linear-gradient(
      0deg,
      rgba(252, 239, 232, 1) 0%,
      rgba(252, 239, 232, 0.8) 50%,
      rgba(252, 239, 232, 0.5) 100%
    );
  }
`;

const ServicesSection = styled.div`
  width: 100%;
  height: calc(100vw / 3);

  padding: 5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const SectionBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

export { ServicesContainer, ServicesSection, SectionBackground };
