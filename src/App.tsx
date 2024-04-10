import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { mainTheme } from "./utils/theme";
import { useEffect } from "react";
import MainPage from "./pages/MainPage";
import { AppContext } from "./utils/AppContext";
import Projects from "./data/Projects";
function App() {
  useEffect(() => {
    document.title = "My portfolio";
  }, []);
  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <AppContext.Provider value={Projects.ProjectArray}>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
