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
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShortRating from "./Rating";
import Overlap from "./Overlap";

const FullSizeImage = styled("img")({
    width: "100%",
    height: "100%",
});

export default function PlaylistItem({ tune, num, status }) {
    return (
        <ListItem
            key={num}
            secondaryAction={
                <IconButton edge="end">
                    <MoreHorizIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton>
                <Overlap width={53} height={40}>
                    <FullSizeImage src={tune.image} alt=""></FullSizeImage>
                    <Backdrop
                        open={true}
                        sx={{
                            width: "100%",
                            height: "100%",
                            color: "#fff",
                            visibility: "visible",
                        }}
                    />
                    <PlayArrowIcon
                        variant="contained"
                        sx={{ color: "white" }}
                    />
                    <PauseIcon
                        variant="contained"
                        style={{ display: "none", color: "white" }}
                    />
                </Overlap>
                <ListItemText primary={tune.name} />
                <ListItemText primary={tune.composer} />
                <ListItemIcon>
                    <ShortRating rate={tune.rate} />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    );
}
