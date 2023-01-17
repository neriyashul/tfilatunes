import {
    Typography,
    ListItemAvatar,
    Avatar,
    ListItemText,
    ListItem,
    List,
    ListItemButton,
    Checkbox,
    Button,
    ListItemIcon,
    Box,
} from "@mui/material";
import usePlaylist from "../hooks/playlist";
import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import LongMenu from "./TuneMenu";
import PlaylistItem from "./PlaylistItem";

export default function Playlist(id) {

    const { isLoading, tunes, error } = usePlaylist(id);

    if (error) {
        console.error(error);
    }

    if (isLoading) {
        return <Typography>loading...</Typography>;
    } else {
        return (
            <List>
                {tunes.map((tune, num) => (
                    <PlaylistItem tune={tune} number={num} />
                ))}
            </List>
        );
    }
}
