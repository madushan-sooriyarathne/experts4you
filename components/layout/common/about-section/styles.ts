import styled from "styled-components";

const AboutContainer = styled.section`
  grid-column: content-start / content-end;
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: minmax(min-content, 40%) minmax(min-content, 1fr);
  grid-template-rows: min-content;
  grid-template-areas: "he de";
  gap: 10rem;
  align-items: start;
  justify-items: start;

  ${(props) => props.theme.responsive.width1100} {
    gap: 5rem;
  }

  ${(props) => props.theme.responsive.width900} {
    grid-template-columns: minmax(min-content, 1fr);
    grid-auto-rows: min-content;
    grid-template-areas:
      "he"
      "de";
  }
`;

const HeadingGroup = styled.div`
  grid-area: he;
  justify-self: end;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  ${(props) => props.theme.responsive.width900} {
    align-items: flex-start;
    justify-self: start;
    & h1,
    h2 {
      text-align: left;
    }
  }
`;

export { AboutContainer, HeadingGroup };
