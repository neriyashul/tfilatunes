
import { useParams } from "react-router-dom";
import useTextPlaylist from "../../hooks/text-playlist";
import Text from "../Text";
import NotFound from "../NotFound";
import Playlist from "../playlist";
import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function PlaylistPageMobile() {
    const { id } = useParams();
    const { isLoading, error, name, next, prev, sections } =
        useTextPlaylist(id);

    if (isLoading) {
        return (
            <Typography component="div" textAlign="center">
                <Box
                    justifyContent="flex-end"
                    sx={{ fontStyle: "oblique", fontSize: 16, m: 1 }}
                >
                    טוען מידע...
                </Box>
            </Typography>
        );
    } else if (error) {
        return <NotFound />;
    } else {
        return (
            <div>
                <Text id={id} sx={{ paddingBottom: "50vh", my: 1, mx: 3, fontSize: "1.4rem"}}/>
                <Playlist id={id} height="50vh"/>
            </div>
        );
    }
}
