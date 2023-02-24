import { useEffect, useRef } from "react";
import {
    AppBar,
    Box,
    Divider,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import LongRating from "../../components/rating/LongRating";
import SelectionList from "../../components/select/list";
import { ratingProps, mobileStyles as styles } from "./style";
import { useNavigate } from "react-router-dom";

export default function TuneMobile({
    player,
    rate,
    subsection,
    performanceLabels,
    performanceIndexState,
}) {
    const ref = useRef();
    useEffect(() => player.setProps({ 
        style: {...styles.player, top: ref.current.offsetTop }
    }), []);

    const navigate = useNavigate();
    const [performIndex] = performanceIndexState;

    return (
        <div>
            <AppBar sx={styles.appbar}>
                <Toolbar>
                    <Box sx={styles.gap} />
                    <IconButton onClick={() => navigate(-1)}>
                        <ArrowBackIosIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Box ref={ref}>
                <Box sx={player.styles.aspectRatio} />
            </Box>
            <Typography sx={styles.videoName}>
                {performanceLabels[performIndex]}
            </Typography>
            <Divider role="presentation" sx={styles.divider} />
            <Typography sx={styles.ratingHeader}>דירוג:</Typography>
            <LongRating rate={rate} {...ratingProps.mobile} />
            <Divider role="presentation" sx={styles.divider} />
            <Typography sx={styles.performanceHeader}>ביצועים:</Typography>
            <SelectionList
                indexState={performanceIndexState}
                labels={performanceLabels}
            />
            <Divider role="presentation" sx={styles.divider} />
            <Typography sx={styles.textHeader}>{subsection?.name}</Typography>
            <Typography sx={styles.text}>{subsection?.text}</Typography>
        </div>
    );
}
