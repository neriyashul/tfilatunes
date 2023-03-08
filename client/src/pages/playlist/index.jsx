import React from "react";
import PlaylistPageDesktop from "./PlaylistDesktop";
import { useScreenSize } from "../../hooks/screen";
import AppBarMenu from "../../components/appbar";
import PlaylistPageMobile from "./PlaylistMobile";
import { useParams } from "react-router-dom";
import NotFound from "../404";
import { useTefila } from "../../hooks/tefila";
import Loading from "../../components/loading";

export default function Playlist({ setHeader, setOnMenuClick }) {
    const { key } = useParams();
    const { isMobile } = useScreenSize();
    const tefila = useTefila(key);

    if (tefila?.isLoading) {
        return <Loading />;
    } else if (tefila?.error) {
        return <NotFound />;
    }

    if (isMobile) {
        return (
            <PlaylistPageMobile
                tefila={tefila}
                setHeader={setHeader}
                setOnMenuClick={setOnMenuClick}
            />
        );
    } else {
        return <PlaylistPageDesktop tefila={tefila} />;
    }
}
