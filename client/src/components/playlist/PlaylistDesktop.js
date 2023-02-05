import { Box, List, Typography, styled } from "@mui/material";
import usePlaylist from "../../hooks/playlist";
import React, { useState } from "react";
import PlaylistItem from "../PlaylistItem";
import colors from "../../utils/colors"
import { useNavigate } from "react-router-dom";

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "light" ? colors.lightGrey : colors.darkGrey,
}));

export default function Playlist({ id, height, ...props }) {
    const { isLoading, tunes, error } = usePlaylist(id);
    const [clickedTune, setClickedTune] = useState();
    const navigate = useNavigate()
    
    if (error) {
        console.error(error);
    }


    function onClickHandle(setClickedTune, key, tune) {
        navigate(`/tune/${tune.name}`)
        setClickedTune((prev) => {
            if (prev?.key === key && prev.status === "playing") {
                return { key: key, status: "stopped" };
            } else {
                return { key: key, status: "playing" };
            }
        });
    }


    if (isLoading) {
        return <Typography>loading...</Typography>;
    } else {
        return (
            <StyledBox
                sx={{
                    height: "100%",
                    overflow: "auto",
                }}
                {...props}
            >
                <List>
                    {tunes.map((tune, key) => {
                        if (key === clickedTune?.key) {
                            var playingStatus = clickedTune?.status;
                        }

                        return (
                            <PlaylistItem
                                key={key}
                                number={key + 1}
                                tune={tune}
                                playingStatus={playingStatus}
                                onClickHandle={() => {
                                    onClickHandle(setClickedTune, key, tune);
                                }}
                            />
                        );
                    })}
                </List>
            </StyledBox>
        );
    }
}
