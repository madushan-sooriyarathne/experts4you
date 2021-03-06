import styled from "styled-components";

interface GridProps {
  columns: number;
  rows: number;
  columnSize: string;
  rowSize: string;
  gap: string;
}

const Grid = styled.section<GridProps>`
  grid-column: content-start / content-end;

  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(${props.columns}, minmax(min-content, ${props.columnSize}))`};
  grid-template-rows: ${(props) =>
    `repeat(${props.rows}, minmax(min-content, ${props.rowSize}))`};
  grid-auto-rows: ${(props) => `minmax(min-content, ${props.rowSize})`};
  gap: ${(props) => props.gap};
  align-items: start;
  justify-items: center;

  ${(props) => props.theme.responsive.width1200} {
    grid-template-columns: ${(props) =>
      `repeat(2, minmax(min-content, ${props.columnSize}))`};
    grid-template-rows: ${(props) =>
      `repeat(${props.rows}, minmax(min-content, ${props.rowSize}))`};
    grid-auto-rows: ${(props) => `minmax(min-content, ${props.rowSize})`};
  }

  ${(props) => props.theme.responsive.width800} {
    grid-template-columns: minmax(min-content, 1fr);
  }
`;

export { Grid };
