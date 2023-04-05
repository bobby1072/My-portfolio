import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { mainTheme } from "./utils/theme";
import { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import MainPage from "./pages/MainPage";
const queryClient = new QueryClient();
function App() {
  useEffect(() => {
    document.title = "Portfolio";
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
