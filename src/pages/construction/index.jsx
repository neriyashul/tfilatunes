import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import styles from "./style";
import Head from "../../components/head";

export default function PageUnderConstruction() {
    return (
        <Box sx={styles.container}>
            <Head
                title="העמוד בבנייה"
                description="מאגר שירים ומנגינות לקטעי תפילה, קבלת שבת מוזיקלית והלל מוזיקלי. המאגר כולל שירים ומנגינות מכל הזמנים, כמו: קרליבך, שירים חסידיים וארץ ישראליים"
                canonical={false}
            />
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
