import React from "react";
import PlaylistPageDesktop from "./PlaylistDesktop";
import { useScreenSize } from "../../hooks/screen";
import PlaylistPageMobile from "./PlaylistMobile";
import { useParams } from "react-router-dom";
import NotFound from "../404";
import { useTfila } from "../../hooks/tfila";
import Loading from "../../components/loading";

export default function Playlist({ setHeader, setOnMenuClick }) {
    const { key } = useParams();
    const { isMobile } = useScreenSize();
    const tfila = useTfila(key);

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
