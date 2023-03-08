import React, { useEffect, useLayoutEffect } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { desktopStyles as styles, ratingProps } from "./style";
import LongRating from "../../components/rating/LongRating";
import SelectionList from "../../components/select/list";

export default function TuneDesktop({
    player,
    rate,
    subsection,
    performanceLabels,
    performanceIndexState,
}) {
    useLayoutEffect(() => player.setProps({ style: styles.player }), []);

    return (
        <Grid container>
            <Grid item xs={8}>
                <Box sx={styles.playerLocation}>
                    <Box sx={player.styles.aspectRatio} />
                </Box>
                <Typography sx={styles.header}>{subsection?.name}</Typography>
                <Typography sx={styles.text}>{subsection?.text}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Box sx={styles.sideContainer}>
                    {rate && (
                        <>
                            <Typography sx={styles.ratingHeader}>
                                דירוג:
                            </Typography>
                            <LongRating rate={rate} {...ratingProps.desktop} />
                            <Divider role="presentation" sx={styles.divider} />
                        </>
                    )}
                    <Typography sx={styles.performanceHeader}>
                        ביצועים:
                    </Typography>
                    <SelectionList
                        indexState={performanceIndexState}
                        labels={performanceLabels}
                    />
                </Box>
            </Grid>
        </Grid>
    );
}
