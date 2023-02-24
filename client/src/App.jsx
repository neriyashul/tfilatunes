import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import AppBarMenu from "./components/appbar";
import NotFound from "./pages/404";
import Playlist from "./pages/playlist";
import YoutubeEmbed from "./components/youtube-embed";
import TunePage from "./pages/tune";

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
                <Route path="/playlist/:key" element={<Playlist />} />
                <Route
                    path="/tune/:id/:subsectionId"
                    element={
                        <>
                            <YoutubeEmbed>
                                <TunePage />
                            </YoutubeEmbed>
                        </>
                    }
                />
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
