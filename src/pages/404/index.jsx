import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styles from "./style";

export default function NotFound() {
    return (
        <Box sx={styles.container}>
            <Typography component="h1" sx={styles.header}>
                404 - דף לא נמצא
            </Typography>
        </Box>
    );
}
