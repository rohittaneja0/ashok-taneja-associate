import { createTheme, ThemeProvider } from "@mui/material";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
    </ThemeProvider>
  );
}

export default App;
