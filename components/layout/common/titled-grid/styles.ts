import styled from "styled-components";

const GridContainer = styled.div`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: [content-start] 1fr [content-end];
  grid-template-rows: repeat(3, min-content);
  row-gap: 5rem;
  align-items: start;
  justify-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
`;

export { GridContainer, TitleWrapper };
