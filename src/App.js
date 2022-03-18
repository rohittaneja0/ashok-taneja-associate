import { createTheme, ThemeProvider } from "@mui/material";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import ObamacareForm from "./domain/ObamacareForm";
import Services from "./domain/Services";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#00b0ff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ResponsiveAppBar />

        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/obamacareForm" element={<ObamacareForm />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
