import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styles from "./style";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
    return (
        <Box sx={styles.container}>
            <Helmet>
                <title>דף לא נמצא</title>
                <meta
                    name="description"
                    content="מאגר שירים ומנגינות לקטעי תפילה, קבלת שבת מוזיקלית והלל מוזיקלי. המאגר כולל שירים ומנגינות מכל הזמנים, כמו: קרליבך, שירים חסידיים וארץ ישראליים"
                />
            </Helmet>
            <Typography component="h1" sx={styles.header}>
                404 - דף לא נמצא
            </Typography>
        </Box>
    );
}
