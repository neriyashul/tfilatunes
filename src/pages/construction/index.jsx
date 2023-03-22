import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import styles from "./style";

export default function PageUnderConstruction() {
    return (
        <Box sx={styles.container}>
            <Stack sx={styles.stack}>
                <Box
                    component="img"
                    src="/construction.png"
                    alt="constrction"
                    sx={styles.image}
                />
                <Typography component="h1" sx={styles.header1}>
                    העמוד&nbsp;בבנייה
                </Typography>
                <Typography component="h2" variant="h5" sx={styles.header2}>
                    יפתח&nbsp;בע&quot;ה&nbsp;בקרוב...
                </Typography>
            </Stack>
        </Box>
    );
}
