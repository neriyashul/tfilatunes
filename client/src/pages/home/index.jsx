import React from "react";
import styles, { buttonProps } from "./style";
import { Box, Button, Grid, Typography } from "@mui/material";

export default function Home() {
    return (
        <>
            <Box component="main" sx={styles.main}>
                <Typography sx={styles.heading}>
                    שיתוף מנגינות לקטעי&nbsp;תפילה
                </Typography>

                <Grid container sx={styles.grid}>
                    <Grid item>
                        <Button
                            component="a"
                            href="/playlist/kabbalat-shabbat"
                            {...buttonProps}
                        >
                            קבלת שבת
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button component="a" href="/playlist/hallel" {...buttonProps}>
                            הלל
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
