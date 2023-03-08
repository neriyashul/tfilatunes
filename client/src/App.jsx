import React, { Suspense, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

import About from "./pages/about";
import Playlist from "./pages/playlist";
import NotFound from "./pages/404";
import TunePage from "./pages/tune";

import YoutubeEmbed from "./components/youtube-embed";
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
                        <Playlist
                            setHeader={setHeader}
                            setOnMenuClick={setOnMenuClick}
                        />
                    }
                />
                <Route
                    path="/tune/:id/:subsectionId"
                    element={
                        <YoutubeEmbed>
                            <TunePage
                                setHeader={setHeader}
                                setOnMenuClick={setOnMenuClick}
                            />
                        </YoutubeEmbed>
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
                <Route path="about" element={<About />} />

                <Route path="*" element={<NotFound />} status={404} />
            </Route>
        </Routes>
    );
}
