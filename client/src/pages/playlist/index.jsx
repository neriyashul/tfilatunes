import React, { useState } from "react";
import PlaylistPageDesktop from "./PlaylistDesktop";
import { useScreenSize } from "../../hooks/screen";
import AppBarMenu from "../../components/appbar";
import PlaylistPageMobile from "./PlaylistMobile";
import { useParams } from "react-router-dom";
import NotFound from "../404";
import { useTefila } from "../../hooks/tefila";

export default function Playlist() {
    const { key } = useParams();
    const { isMobile } = useScreenSize();
    const tefila = useTefila(key);

    if (tefila?.isLoading) {
        return <p>טוען מידע...</p>;
    } else if (tefila?.error) {
        return <NotFound />;
    }

    if (isMobile) {
        return <PlaylistPageMobile tefila={tefila} />;
    } else {
        return (
            <>
                <AppBarMenu />
                <PlaylistPageDesktop tefila={tefila} />
            </>
        );
    }
}
