import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TextPlaylist from "./components/TextPlaylist";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Button } from "@mui/material";

function App() {
    const [mode, setMode] = useState("dark");
    const darkTheme = createTheme({
        palette: {
            mode: mode,
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Button
                variant="contained"
                sx={{ m: 1, bottom: 0, position: "absolute" }}
                onClick={() =>
                    setMode((state) => (state === "dark" ? "light" : "dark"))
                }
            >
                mode
            </Button>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/playlist/:key" element={<TextPlaylist />} />
                <Route path="*" element={<NotFound />} status={404} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
