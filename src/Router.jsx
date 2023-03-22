import React, { Suspense, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

const About = React.lazy(() => import("./pages/about"));
const Playlist = React.lazy(() => import("./pages/playlist"));
const NotFound = React.lazy(() => import("./pages/404"));
const TunePage = React.lazy(() => import("./pages/tune"));
const YoutubeEmbed = React.lazy(() => import("./components/youtube-embed"));

import AppBarMenu from "./components/appbar";
import BackBarMenu from "./components/appbar/BackAppBar";
import PageUnderConstruction from "./pages/construction";

export default function Router() {
    const [header, setHeader] = useState();
    const [onMenuClick, setOnMenuClick] = useState();
    return (
        <BrowserRouter>
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
                        path="add-tune"
                        element={
                            <Suspense>
                                <PageUnderConstruction />
                            </Suspense>
                        }
                    />
                    <Route
                        path="contribute"
                        element={
                            <Suspense>
                                <PageUnderConstruction />
                            </Suspense>
                        }
                    />
                    <Route
                        path="about"
                        element={
                            <Suspense>
                                <PageUnderConstruction />
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
        </BrowserRouter>
    );
}
