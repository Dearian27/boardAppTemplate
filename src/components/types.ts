import { ComponentPropsWithoutRef } from "react";

export interface GridProps extends ComponentPropsWithoutRef<"div"> {
  grid: {
    cellSize: number;
    boardSize: number;
  };
}
export type BlockType = null | "wall";

export type CellParams = {
  id: number;
  x: number;
  y: number;
  type: BlockType;
};

export interface CellComponentProps extends ComponentPropsWithoutRef<"div"> {
  item: CellParams;
}

export type CoordinatesProps = {
  x: number;
  y: number;
};
