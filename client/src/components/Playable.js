import { Backdrop, Box, styled } from "@mui/material";
import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Overlap from "./Overlap";

const iconSx = {
    color: "white",
    zIndex: 2,
};

const childNewStyle = {
    height: "inherit",
    width: "inherit",
    maxHeight: "inherit",
    maxWidth: "inherit",
    zIndex: 1,
};

export default function Playable({
    playingStatus,
    isHovering,
    isOverride = true,
    ...props
}) {
    let icon;

    if (playingStatus === "playing") {
        icon = <PauseIcon variant="contained" sx={iconSx} />;
    } else if (isHovering || playingStatus === "stopped") {
        icon = <PlayArrowIcon variant="contained" sx={{ ...iconSx }} />;
    }

    const children = React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
            if (!isOverride) {
                if (isHovering || playingStatus != null) {
                    childNewStyle.filter = "brightness(82%)";
                } else {
                    childNewStyle.filter = "brightness(100%)";
                }
            }
            const style = { ...childNewStyle, ...child.props.style };
            return React.cloneElement(child, { style: style });
        }
    });

    return (
        <div>
            <Overlap {...props}>
                {icon && isOverride ? null : children}
                {icon}
            </Overlap>
        </div>
    );
}
