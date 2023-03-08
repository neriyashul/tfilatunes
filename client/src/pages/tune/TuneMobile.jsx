import { useLayoutEffect, useRef } from "react";
import { Box, Divider, Typography } from "@mui/material";

import LongRating from "../../components/rating/LongRating";
import SelectionList from "../../components/select/list";
import { ratingProps, mobileStyles as styles } from "./style";

export default function TuneMobile({
    player,
    rate,
    subsection,
    performanceLabels,
    performanceIndexState,
    setHeader,
    // setOnMenuClick,
}) {
    const ref = useRef();
    useLayoutEffect(
        () =>
            player.setProps({
                style: { ...styles.player, top: ref.current.offsetTop },
            }),
        []
    );

    const [performIndex] = performanceIndexState;

    // useEffect(() => {
    //     setOnMenuClick(() => (e) => setAnchorEl(e.currentTarget));
    // }, []);

    useLayoutEffect(() => setHeader(subsection?.name), [subsection]);

    return (
        <div>
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
