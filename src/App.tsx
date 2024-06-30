import styled, { css } from "styled-components";
import { Grid } from "./components/Grid";

// const GridContainer = styled.button<{ $primary?: boolean }>`
//   ${(props) =>
//     props.$primary &&
//     css`
//       background: "#BF4F74";
//       color: white;
//     `};
// `;

function App() {
  return (
    <div className="container">
      <Grid grid={{ boardSize: 8, cellSize: 50 }} />
    </div>
  );
}

export default App;
