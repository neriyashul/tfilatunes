import React, { Suspense, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

const About = React.lazy(() => import("./pages/about"));
const Playlist = React.lazy(() => import("./pages/playlist"));
const NotFound = React.lazy(() => import("./pages/404"));
const TunePage = React.lazy(() => import("./pages/tune"));
const YoutubeEmbed = React.lazy(() => import("./components/youtube-embed"));

import AppBarMenu from "./components/appbar";
import BackBarMenu from "./components/appbar/BackAppBar";

export default function App() {
    const [header, setHeader] = useState();
    const [onMenuClick, setOnMenuClick] = useState();

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <BackBarMenu
                            header={header}
                            onMenuClick={onMenuClick}
                        />
                        <Outlet />
                    </>
                }
            >
                <Route
                    path="/playlist/:key"
                    element={
                        <Suspense>
                            <Playlist
                                setHeader={setHeader}
                                setOnMenuClick={setOnMenuClick}
                            />
                        </Suspense>
                    }
                />
                <Route
                    path="/tune/:id/:subsectionId"
                    element={
                        <Suspense>
                            <YoutubeEmbed>
                                <TunePage
                                    setHeader={setHeader}
                                    setOnMenuClick={setOnMenuClick}
                                />
                            </YoutubeEmbed>
                        </Suspense>
                    }
                />
            </Route>
            <Route
                path="/"
                element={
                    <>
                        <AppBarMenu />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Home />} />
                <Route
                    path="about"
                    element={
                        <Suspense>
                            <About />
                        </Suspense>
                    }
                />

                <Route
                    path="*"
                    element={
                        <Suspense>
                            <NotFound />
                        </Suspense>
                    }
                    status={404}
                />
            </Route>
        </Routes>
    );
}
