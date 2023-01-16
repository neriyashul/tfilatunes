import { useParams } from "react-router-dom";
import useTextPlaylist from "../hooks/text-playlist";
import Text from "./Text";
import NotFound from "./NotFound";
import Playlist from "./Playlist";
import React from "react";

export default function TextPlaylist() {
    const { id } = useParams();
    const { isLoading, error, name, next, prev, sections } =
        useTextPlaylist(id);

    if (isLoading) {
        return (
            <div>
                <b>טוען...</b>
            </div>
        );
    } else if (error) {
        return <NotFound />;
    } else {
        return (
            <div>
                <div>
                    <button>{'<'} {prev}</button>
                    <button>שם = {name}</button>
                    <button>sections = {sections}</button>
                    <button>{'>'} {next}</button>
                </div>

                <Text id={id} />
                <Playlist id={id} />
            </div>
        );
    }
}
