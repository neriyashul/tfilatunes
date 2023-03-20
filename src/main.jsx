import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { theme } from "./utils/theme";
import { cache } from "./utils/cache";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <QueryClientProvider client={new QueryClient()}>
                    <Router />
                </QueryClientProvider>
            </ThemeProvider>
        </CacheProvider>
    </React.StrictMode>
);
