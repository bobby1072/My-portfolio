import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { mainTheme } from "./utils/theme";
import { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import MainPage from "./pages/MainPage";
import { AppContext } from "./utils/AppContext";
import Projects from "./data/Projects";
const queryClient = new QueryClient();
function App() {
  useEffect(() => {
    document.title = "My portfolio";
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <AppContext.Provider value={Projects.ProjectArray}>
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </AppContext.Provider>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
