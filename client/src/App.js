import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TextPlaylist from "./components/TextPlaylist";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Tune from "./components/TunePage"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBarMenu from "./components/appbar";
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

function App() {
    const [mode, setMode] = useState("dark");
    const darkTheme = createTheme({
        direction: "rtl",
        palette: {
            mode: mode,
        },
    });

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
      });
      

    return (
        <ThemeProvider theme={darkTheme}>
            <CacheProvider value={cacheRtl}>
                <div dir="rtl" sx={{ textAlign: "right" }}>
                    <CssBaseline />
                    <AppBarMenu setMode={setMode} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/playlist/:key"
                            element={<TextPlaylist />}
                        />
                        <Route
                            path="/tune/:key"
                            element={<Tune />}
                        />
                        <Route path="*" element={<NotFound />} status={404} />
                    </Routes>
                </div>
            </CacheProvider>
        </ThemeProvider>
    );
}

export default App;
