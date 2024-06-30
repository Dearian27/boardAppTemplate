import { CellParams, CoordinatesProps } from "../components/types";

export const generateBlocks = (
  type: string,
  count: number,
  field: CellParams[],
  replaceOccupied = false
) => {
  const size = Math.sqrt(field.length);
  let freeCells = field.filter((item: CellParams) => item.type === null);

  for (let i = 0; i < count; i++) {
    let xy: CoordinatesProps;
    let cell: CellParams | undefined;

    if (freeCells.length > 0) {
      do {
        xy = getRandomCellsCoordinates(size);
        cell = field.find(
          (item: CellParams) =>
            item.x === xy.x && item.y === xy.y && item.type === null
        );
      } while (!cell);
      freeCells = freeCells.filter((item: CellParams) => item !== cell);
    } else if (replaceOccupied) {
      do {
        xy = getRandomCellsCoordinates(size);
        cell = field.find(
          (item: CellParams) => item.x === xy.x && item.y === xy.y
        );
      } while (!cell || cell.type === type);
    } else {
      break; //? leave cycle when there is no empty cell
    }

    if (cell) {
      cell.type = "wall";
    }
  }

  return field;
};

export const getRandomCellsCoordinates = (
  gridSize: number
): CoordinatesProps => {
  return { x: getRandomValue(gridSize), y: getRandomValue(gridSize) };
};
export const getRandomValue = (maxLength: number) => {
  return Math.floor(Math.random() * maxLength);
};
