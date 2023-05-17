import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styles from "./style";
import Head from "../../components/head";

export default function NotFound() {
    return (
        <Box sx={styles.container}>
            <Head
                title="דף לא נמצא"
                description="מאגר שירים ומנגינות לקטעי תפילה, קבלת שבת מוזיקלית והלל מוזיקלי. המאגר כולל שירים ומנגינות מכל הזמנים, כמו: קרליבך, שירים חסידיים וארץ ישראליים"
                canonical={false}
            />
            <Typography component="h1" sx={styles.header}>
                404 - דף לא נמצא
            </Typography>
        </Box>
    );
}
