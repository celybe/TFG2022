import { ThemeProvider, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="App"></div>;
    </ThemeProvider>
  );
}

export default App;
