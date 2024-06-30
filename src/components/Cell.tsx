import styled from "styled-components";
import { CellComponentProps, CellParams } from "./types";
import { FC } from "react";

const CellComponent = styled.div<{ $item: CellParams }>`
  border: 1px solid #ffffff44;
  color: #00000015;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  font-family: "Montserrat";
  background-color: ${({ $item }) => {
    console.log($item);
    return $item.type ? "#be0404" : "transparent";
  }};
`;

export const Cell: FC<CellComponentProps> = ({ item }) => {
  return <CellComponent $item={item}>{item.id}</CellComponent>;
};
