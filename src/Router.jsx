import React, { Suspense, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

const Playlist = React.lazy(() => import("./pages/playlist"));
const NotFound = React.lazy(() => import("./pages/404"));
const TunePage = React.lazy(() => import("./pages/tune"));
const AddTune = React.lazy(() => import("./pages/add-tune"));
const Contribute = React.lazy(() => import("./pages/contribute"));
const About = React.lazy(() => import("./pages/about"));

const YoutubeEmbed = React.lazy(() => import("./components/youtube-embed"));
const UploadSuccessfull = React.lazy(() =>
    import("./pages/add-tune/UploadSuccessful")
);

import AppBarMenu from "./components/appbar";
import BackBarMenu from "./components/appbar/BackAppBar";

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
                        path="/tunes"
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
                        path="/tunes/:id"
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
                                <AddTune />
                            </Suspense>
                        }
                    />
                    <Route
                        path="contribute"
                        element={
                            <Suspense>
                                <Contribute />
                            </Suspense>
                        }
                    />
                    <Route
                        path="upload-successful"
                        element={
                            <Suspense>
                                <UploadSuccessfull />
                            </Suspense>
                        }
                    />
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
        </BrowserRouter>
    );
}
