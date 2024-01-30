import "./App.css";
import { ThemeProvider } from "styled-components";
import StyledPractice from "./StyledComponent/Header";
import { theme } from "./theme";
import Cards from "./StyledComponent/Cards";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledPractice />
        <Cards />
      </ThemeProvider>
    </>
  );
}

export default App;
