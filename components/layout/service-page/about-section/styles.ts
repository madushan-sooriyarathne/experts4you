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
`;

const HeadingGroup = styled.div`
  grid-area: he;
  justify-self: end;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;

const ParagraphGroup = styled.div`
  grid-area: de;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;

export { AboutContainer, HeadingGroup, ParagraphGroup };
