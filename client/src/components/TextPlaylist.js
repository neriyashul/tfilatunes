import { useParams } from "react-router-dom";
import useTextPlaylist from "../hooks/text-playlist";
import Text from "./Text";
import NotFound from "./NotFound";
import Playlist from "./Playlist";
import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function TextPlaylist() {
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
                <div>
                    <Button>
                        {"<"} {prev}
                    </Button>
                    <Button>שם = {name}</Button>
                    <Button>sections = {sections}</Button>
                    <Button>
                        {">"} {next}
                    </Button>
                </div>

                <Text id={id} sx={{ paddingBottom: "50vh", mb: 2}}/>
                <Playlist id={id} height="50vh"/>
            </div>
        );
    }
}
