// import React, { useRef, useState } from "react";
// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import NotFound from "./components/NotFound";
// import Home from "./components/Home";
// import TunePage from "./components/tune-page";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import AppBarMenu from "./components/appbar";
// import rtlPlugin from "stylis-plugin-rtl";
// import { prefixer } from "stylis";
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";
// import Dummy from "./components/Dummy";
// import YoutubeEmbed from "./components/youtube-embed";
// import PlaylistPage from "./components/playlist-page";

import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import AppBarMenu from "./components/appbar";
import NotFound from "./pages/404";
import Playlist from "./pages/playlist";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TuneDesktop from "./pages/tune/TuneDesktop";
import YoutubeEmbed from "./components/youtube-embed";
import TunePage from "./pages/tune";
import { Toolbar } from "@mui/material";
// import YoutubeEmbed from "./components/youtube-embed";
// import TunePageDesktop from "./pages/tune/TunePageDesktop";
// import AppBarMenu from "components/appbar";

export default function App() {
    return (
        <Fragment>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <AppBarMenu />
                            <Home />
                        </>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <>
                            <AppBarMenu />
                            <About />
                        </>
                    }
                />
                <Route path="/playlist/:id" element={<Playlist />} />
                <Route
                    path="/tune/:id"
                    element={
                        <>
                            <YoutubeEmbed>
                                <TunePage />
                            </YoutubeEmbed>
                        </>
                    }
                />
                {/* <Route path="/dummy" element={<Dummy />} /> */}
                <Route
                    path="*"
                    element={
                        <>
                            <AppBarMenu />
                            <NotFound />
                        </>
                    }
                    status={404}
                />
            </Routes>
        </Fragment>
    );
}

// function App() {
//     const [mode, setMode] = useState("dark");
//     const playerRef = useRef();

//     const darkTheme = createTheme({
//         direction: "rtl",
//         palette: {
//             mode: mode,
//         },
//     });

//     const cacheRtl = createCache({
//         key: "muirtl",
//         stylisPlugins: [prefixer, rtlPlugin],
//     });

//     return (
//         <ThemeProvider theme={darkTheme}>
//             <CacheProvider value={cacheRtl}>
//                 <div dir="rtl">
//                     <CssBaseline />
//                     {/* <CssBaseline enableColorScheme /> */}
//                     <AppBarMenu setMode={setMode} />
//                     <Routes>
//                         <Route path="/" element={<Home />} />
//                         <Route
//                             path="/playlist/:key"
//                             element={<PlaylistPage />}
//                         />
//                         <Route
//                             path="/tune/:key"
//                             element={
//                                 <YoutubeEmbed>
//                                     <TunePage />
//                                 </YoutubeEmbed>
//                             }
//                         />
//                         <Route path="/dummy" element={<Dummy />} />
//                         <Route path="*" element={<NotFound />} status={404} />
//                     </Routes>
//                 </div>
//             </CacheProvider>
//         </ThemeProvider>
//     );
// }

// export default App;
