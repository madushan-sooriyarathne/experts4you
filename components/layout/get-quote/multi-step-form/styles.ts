import styled from "styled-components";

const MainContainer = styled.section`
  grid-column: content-start / content-end;
  margin-top: 20rem;
  width: 100%;
  min-height: 80vh;
  height: auto;
  padding: 10rem 20rem;

  display: grid;
  grid-template-columns: max-content minmax(min-content, 1fr);
  grid-template-rows: min-content;
  grid-template-areas: "st fo";
  align-items: start;
  justify-items: start;
  gap: 10rem;

  ${(props) => props.theme.responsive.smallDesktop} {
    padding: 10rem;
  }

  ${(props) => props.theme.responsive.width1100} {
    padding: 10rem 5rem;
  }

  ${(props) => props.theme.responsive.width1000} {
    grid-template-columns: minmax(min-content, 1fr);
    grid-template-rows: repeat(2, min-content);
    grid-template-areas:
      "st"
      "fo";
  }

  ${(props) => props.theme.responsive.width800} {
    padding: 10rem 0;
  }
`;

const StatusBar = styled.div`
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: min-content max-content;
  grid-template-rows: 40rem;
  grid-template-areas: "br st";
  align-items: start;
  justify-items: start;
  column-gap: 1rem;

  ${(props) => props.theme.responsive.width1000} {
    grid-template-columns: minmax(min-content, 1fr);
    grid-template-rows: repeat(2, min-content);
    grid-template-areas:
      "br"
      "st";
    width: 100%;
    row-gap: 1rem;
  }
`;

interface ProgressPercentage {
  step: 0 | 1 | 2 | 3;
}

const ProgressBar = styled.div<ProgressPercentage>`
  grid-area: br;
  height: 100%;
  border-radius: 10rem;
  width: 1rem;
  position: relative;
  z-index: 0;
  background-color: ${(props) => props.theme.colors.blackLight};
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.primary};
    z-index: 1;
    transition: transform 0.2s ease-in-out;

    transform-origin: center top;

    transform: ${(props) =>
      `scaleY(calc((${props.step}/3) + ${props.step !== 3 ? "0.05" : "0"}))`};
  }

  ${(props) => props.theme.responsive.width1000} {
    width: 100%;
    height: 1rem;

    &::after {
      transform-origin: left center;
      transform: ${(props) =>
        `scaleX(calc((${props.step}/3) + ${props.step !== 3 ? "0.05" : "0"}))`};
    }
  }
`;

const StagesGroup = styled.div`
  grid-area: st;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  ${(props) => props.theme.responsive.width1000} {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

interface ProgressProps {
  progressed: boolean;
  active: boolean;
}

const StageName = styled.div<ProgressProps>`
  /* align-self: end; */
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align: left;
  color: ${(props) =>
    props.progressed
      ? props.theme.colors.primary
      : props.theme.colors.blackLight};

  ${(props) => props.theme.responsive.width700} {
    visibility: ${(props) => (props.active ? "visible" : "hidden")};
  }
`;

export { MainContainer, StatusBar, ProgressBar, StagesGroup, StageName };
