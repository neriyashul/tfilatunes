import { Typography } from "@mui/material";
import usePlaylist from "../../hooks/playlist";
import React, { useState } from "react";
import PlaylistDrawer from "../PlaylistDrawer";

function onClickHandle(setClickedTune, key) {
    setClickedTune((prev) => {
        if (prev?.key === key && prev.status === "playing") {
            return { key: key, status: "stopped" };
        } else {
            return { key: key, status: "playing" };
        }
    });
}

export default function Playlist({id, height}) {
    const { isLoading, tunes, error } = usePlaylist(id);
    const [clickedTune, setClickedTune] = useState();

    if (error) {
        console.error(error);
    }

    if (isLoading) {
        return <Typography>loading...</Typography>;
    } else {
        return (
            <PlaylistDrawer
                tunes={tunes}
                clickedTune={clickedTune}
                setClickedTune={setClickedTune}
                onClickHandle={onClickHandle}
                height={height}
            />
        );
    }
}
