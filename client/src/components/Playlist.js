import { Typography, List, Grid, Divider, Box } from "@mui/material";
import usePlaylist from "../hooks/playlist";
import React, { useState } from "react";
import PlaylistItem from "./PlaylistItem";
import PlaylistDrawer from "./PlaylistDrawer";

function onClickHandle(setClickedTune, key) {
    setClickedTune((prev) => {
        if (prev?.key === key && prev.status === "playing") {
            return { key: key, status: "stopped" };
        } else {
            return { key: key, status: "playing" };
        }
    });
}

export default function Playlist(id) {
    const { isLoading, tunes, error } = usePlaylist(id);
    const [clickedTune, setClickedTune] = useState();

    if (error) {
        console.error(error);
    }

    if (isLoading) {
        return <Typography>loading...</Typography>;
    } else {
        return (
            <Box>
                <List>
                    {tunes.map((tune, key) => {
                        if (key === clickedTune?.key) {
                            var playingStatus = clickedTune?.status;
                        }

                        return (
                            <PlaylistItem
                                key={key}
                                tune={tune}
                                playingStatus={playingStatus}
                                onClickHandle={() => {
                                    onClickHandle(setClickedTune, key);
                                }}
                            />
                        );
                    })}
                </List>
                <PlaylistDrawer/>
            </Box>
        );
    }
}
