import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TextPlaylist from "./components/TextPlaylist";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playlist/:key" element={<TextPlaylist />} />
            <Route path="*" element={<NotFound />} status={404} />
        </Routes>
    );
}

export default App;
