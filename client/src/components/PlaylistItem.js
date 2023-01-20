import {
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    IconButton,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShortRating from "./Rating";
import Playable from "./Playable";

export default function PlaylistItem({ number, tune, playingStatus, onClickHandle }) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <ListItem
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => onClickHandle()}
            secondaryAction={
                <ListItemIcon>
                    <ShortRating rate={tune.rate} />
                </ListItemIcon>
            }
            disablePadding
        >
            <ListItemButton>
                <Playable
                    isHovering={isHovering}
                    playingStatus={playingStatus}
                    sx={{ paddingRight: 25, paddingLeft: 25, textAlign: "center" }}
                >
                    <Typography>{number}</Typography>
                </Playable>
                <ListItemText
                    primaryTypographyProps={{
                        fontSize: "medium",
                    }}
                    primary={tune.name}
                    secondary={tune.composer}
                />
            </ListItemButton>
        </ListItem>
    );
}
