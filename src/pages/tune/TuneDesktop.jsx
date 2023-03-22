import React, { useLayoutEffect } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { desktopStyles as styles, ratingProps } from "./style";
import LongRating from "../../components/rating/LongRating";
import SelectionList from "../../components/select/list";
import { parseText } from "../../utils/styles";

export default function TuneDesktop({
    player,
    tune,
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
                <Typography
                    component="h1"
                    sx={styles.header}
                >{`${subsection?.name} - ${tune.name}`}</Typography>
                <Typography sx={styles.text}>
                    {parseText(subsection?.text)}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Box sx={styles.sideContainer}>
                    {tune.rate && (
                        <>
                            <Typography component="h4" sx={styles.ratingHeader}>
                                דירוג:
                            </Typography>
                            <LongRating
                                rate={Number(tune.rate)}
                                {...ratingProps.desktop}
                            />
                            <Divider role="presentation" sx={styles.divider} />
                        </>
                    )}
                    <Typography component="h4" sx={styles.performanceHeader}>
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
