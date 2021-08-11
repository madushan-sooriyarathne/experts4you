import { ReactNodeArray } from "react";
import { Grid } from "./styles";

interface Props {
  children: ReactNodeArray;
  columns?: number;
  rows?: number;
  columnSize?: string;
  rowSize?: string;
  gap?: string;
}

const GridLayout: React.FC<Props> = ({
  gap = "5rem",
  columns = 3,
  rows = 1,
  columnSize = "1fr",
  rowSize = "auto",
  children,
}: Props): JSX.Element => {
  return (
    <Grid
      columns={columns}
      rows={rows}
      columnSize={columnSize}
      rowSize={rowSize}
      gap={gap}
    >
      {children}
    </Grid>
  );
};

export default GridLayout;
