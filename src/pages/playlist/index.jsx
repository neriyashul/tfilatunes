import React from "react";
import PlaylistPageDesktop from "./PlaylistDesktop";
import { useScreenSize } from "../../hooks/screen";
import PlaylistPageMobile from "./PlaylistMobile";
import { useSearchParams } from "react-router-dom";
import NotFound from "../404";
import { useTfila } from "../../hooks/tfila";

export default function Playlist({ setHeader, setOnMenuClick }) {
    const [searchParams] = useSearchParams();
    const key = searchParams.get("text");
    const { isMobile } = useScreenSize();
    const tfila = useTfila(key);

    if (!tfila) {
        return <NotFound />;
    }

    if (isMobile) {
        return (
            <PlaylistPageMobile
                tfila={tfila}
                setHeader={setHeader}
                setOnMenuClick={setOnMenuClick}
            />
        );
    } else {
        return <PlaylistPageDesktop tfila={tfila} />;
    }
}
