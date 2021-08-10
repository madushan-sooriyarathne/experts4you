import styled from "styled-components";

const HeroContainer = styled.div`
  grid-column: full-start / full-end;
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-template-rows: 1fr;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 100%;

  padding: 5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 1) 100%
  );

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

export { HeroContainer, HeroSection, SectionBackground };
