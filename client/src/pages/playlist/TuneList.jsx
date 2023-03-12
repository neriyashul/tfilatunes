import {
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import ShortRating from "../../components/rating/ShortRating";
import Playable from "../../components/playable";
import { tuneListStyles as styles } from "./style";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading";

export default function TuneList({ tunes, subsection, isLoading }) {
    const [hoveringItem, setHoveringItem] = useState();
    const [clickedTune, setClickedTune] = useState();
    const navigate = useNavigate();

    const onTuneClickHandle = (key, tune) => {
        navigate(`/tune/${tune.id}/${subsection?.id}`);
        setClickedTune((prev) => {
            if (prev?.key === key && prev.status === "playing") {
                return { key: key, status: "stopped" };
            } else {
                return { key: key, status: "playing" };
            }
        });
    };

    if (isLoading) {
        return <Loading />;
    }

    return tunes?.map((tune, key) => {
        let playingStatus;
        if (key === clickedTune?.key) {
            playingStatus = clickedTune?.status;
        }
        return (
            <ListItem
                key={key}
                onMouseEnter={() => setHoveringItem(key)}
                onMouseLeave={() => setHoveringItem("")}
                onClick={() => onTuneClickHandle(key, tune)}
                secondaryAction={
                    <ListItemIcon>
                        <ShortRating rate={tune.subsections[0].rate} />
                    </ListItemIcon>
                }
                disablePadding
            >
                <ListItemButton>
                    <Playable
                        isHovering={hoveringItem === key}
                        playingStatus={playingStatus}
                        sx={styles.playableButton}
                    >
                        <Typography>{key + 1}</Typography>
                    </Playable>
                    <ListItemText
                        primaryTypographyProps={styles.listItemText}
                        primary={tune.name}
                        secondary={tune.composer}
                    />
                </ListItemButton>
            </ListItem>
        );
    });
}
