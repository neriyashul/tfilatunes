import {
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import ShortRating from "./rating/ShortRating";
import Playable from "./PlayablelIcon";

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
