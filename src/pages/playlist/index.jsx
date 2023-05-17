import React from "react";
import PlaylistPageDesktop from "./PlaylistDesktop";
import { useScreenSize } from "../../hooks/screen";
import PlaylistPageMobile from "./PlaylistMobile";
import { useSearchParams } from "react-router-dom";
import NotFound from "../404";
import { useTfila } from "../../hooks/tfila";
import Head from "../../components/head";

export default function Playlist({ setHeader, setOnMenuClick }) {
    const [searchParams] = useSearchParams();
    const key = searchParams.get("text");
    const { isMobile } = useScreenSize();
    const tfila = useTfila(key);

    if (!tfila) {
        return <NotFound />;
    }

    let playlist;
    if (isMobile) {
        playlist = (
            <PlaylistPageMobile
                tfila={tfila}
                setHeader={setHeader}
                setOnMenuClick={setOnMenuClick}
            />
        );
    } else {
        playlist = <PlaylistPageDesktop tfila={tfila} />;
    }

    const sectionNames = tfila.sections.map((s) => s.name).join(", ");
    return (
        <>
            <Head
                title={`שירים ומנגינות ל${tfila.name}`}
                description={`רשימת לחנים, שירים ומנגינות ל${tfila.name}. בפרט, ב-${sectionNames}`}
            />
            {playlist}
        </>
    );
}
