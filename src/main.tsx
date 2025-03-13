import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.tsx";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { TaskProvider } from "./contexts/task-provider.tsx";

const theme = createTheme({
  palette: {
    background: {
      default: "#414141",
      paper: "#929292"
    },
    primary: {
      main: "#FFFFFF",
      light: "#2196F3",
      contrastText: "#BC0000"
    }
  }
});

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <TaskProvider>
        <App />
      </TaskProvider>
    
    </ThemeProvider>
  </StrictMode>
);
