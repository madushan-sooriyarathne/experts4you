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
`;

export { Grid };
