import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./utils/theme";
import { cache } from "./utils/cache";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <QueryClientProvider client={new QueryClient()}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </QueryClientProvider>
            </ThemeProvider>
        </CacheProvider>
    </React.StrictMode>
);
