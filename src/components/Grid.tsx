import { FC } from "react";
import styled from "styled-components";
import { CellParams, GridProps } from "./types";
import { Cell } from "./Cell";
import { generateBlocks } from "../scripts/generateWalls";

const GridContainer = styled.div<{ $boardSize?: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props?.$boardSize}, 1fr);
  grid-template-rows: repeat(${(props) => props?.$boardSize}, 1fr);
  /* background: #ff7272; */
  background: #fff8f8;
  border: 3px solid black;
  position: relative;
`;

export const Grid: FC<GridProps> = ({ grid, ...props }) => {
  const { boardSize } = grid;

  let cells: CellParams[] = Array.from(
    { length: boardSize * boardSize },
    (_, index) => ({
      id: index,
      x: index % boardSize,
      y: Math.floor(index / boardSize),
      type: null,
    })
  );
  cells = generateBlocks("walls", 10, cells);
  console.log(cells);
  return (
    <GridContainer $boardSize={boardSize} {...props}>
      {cells.map((item, index) => (
        <Cell key={index} item={item} />
      ))}
    </GridContainer>
  );
};
