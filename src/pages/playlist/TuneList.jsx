import {
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Typography,
    List,
    Box,
} from "@mui/material";
import React, { useState } from "react";
import ShortRating from "../../components/rating/ShortRating";
import Playable from "../../components/playable";
import { tuneListStyles as styles } from "./style";
import { Link } from "react-router-dom";
import Loading from "../../components/loading";

export default function TuneList({ tunes, subsection, isLoading }) {
    const [hoveringItem, setHoveringItem] = useState();

    if (tunes && tunes.length > 1) {
        tunes.sort((a, b) => {
            let rateA = parseInt(a.subsections[0]?.rate)
            let rateB = parseInt(b.subsections[0]?.rate)
            if (!isNaN(rateA) && !isNaN(rateB)) {
                return rateB - rateA
            } else if (isNaN(rateA)) {
                return 1
            } else {
                return -1
            }
        })
    }

    if (isLoading) {
        return <Loading />;
    }

    const listItems = tunes?.map((tune, key) => {
        return (
            <ListItem
                key={key}
                onMouseEnter={() => setHoveringItem(key)}
                onMouseLeave={() => setHoveringItem("")}
                secondaryAction={
                    <ListItemIcon>
                        <ShortRating rate={tune.subsections[0].rate} />
                    </ListItemIcon>
                }
                disablePadding
            >
                <ListItemButton
                    component={Link}
                    to={`/tunes/${tune.id}?subId=${subsection?.id}`}
                    state={{ tune, subsection }}
                    sx={{ pt: 0.3 }}
                >
                    <Playable
                        isHovering={hoveringItem === key}
                        sx={styles.playableButton}
                    >
                        <Typography>{key + 1}</Typography>
                    </Playable>
                    <ListItemText
                        primaryTypographyProps={styles.listItemText}
                        primary={tune.name}
                        secondary={tune.composer || tune.performer}
                    />
                </ListItemButton>
            </ListItem>
        );
    });

    return (
        <Box component="nav">
            <List>{listItems}</List>
        </Box>
    );
}
