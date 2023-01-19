import { Backdrop, Box, styled } from "@mui/material";
import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Overlap from "./Overlap";

const FullSizeImage = styled("img")({
    height: "inherit",
    width: "inherit",
    maxHeight: "inherit",
    maxWidth: "inherit",
    zIndex: 1,
});

const iconSx = {
    color: "white",
    zIndex: 2,
};

export default function PlayableImage({
    src,
    alt,
    playingStatus,
    isHovering,
    ...props
}) {
    let icon;

    if (playingStatus === "playing") {
        icon = <PauseIcon variant="contained" sx={iconSx} />;
    } else if (isHovering || playingStatus === "stopped") {
        icon = (
            <PlayArrowIcon
                variant="contained"
                sx={{ ...iconSx }}
            />
        );
    }

    return (
        <div>
            <Overlap {...props}>
                <FullSizeImage
                    component="img"
                    src={src}
                    alt={alt}
                    sx={{
                        filter:
                            isHovering || playingStatus != null
                                ? "brightness(82%)"
                                : "brightness(100%)",
                    }}
                />
                {icon}
            </Overlap>
        </div>
    );
}
