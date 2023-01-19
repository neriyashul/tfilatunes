import {
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Backdrop,
    styled,
    ListItemSecondaryAction,
    IconButton,
} from "@mui/material";
import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShortRating from "./Rating";
import PlayableImage from "./PlayableImage";

export default function PlaylistItem({ tune, playingStatus, onClickHandle }) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <ListItem
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => onClickHandle()}
            secondaryAction={
                <IconButton>
                    <MoreHorizIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton>
                <PlayableImage
                    src={tune.image}
                    alt=""
                    isHovering={isHovering}
                    playingStatus={playingStatus}
                    sx={{ marginRight: 2, width: 53, maxHeight: 40 }}
                />
                <ListItemText primary={tune.name} />
                <ListItemText primary={tune.composer} />
                <ListItemIcon sx={{ marginRight: 3 }}>
                    <ShortRating rate={tune.rate} />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    );
}
