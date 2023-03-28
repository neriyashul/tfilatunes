import { Box, Button, Stack, SvgIcon, Typography } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { uploadSuccessfulStyles as styles } from "./style";
import { Link } from "react-router-dom";
export default function UploadSuccessful() {
    return (
        <Box sx={styles.container}>
            <Stack sx={{ alignItems: "center" }}>
                <SvgIcon
                    component={CheckCircleIcon}
                    color="success"
                    sx={styles.icon}
                />
                <Typography component="h1" sx={styles.header1}>
                    המנגינה עלתה בהצלחה
                </Typography>
                <Typography component="h2" sx={styles.header2}>
                    המנגינה תהיה זמינה בעוד מספר ימים. תודה&nbsp;על&nbsp;עזרתך!
                </Typography>
                <Button component={Link} to="/" sx={{mt: 3}}  variant="outlined">אישור</Button>
            </Stack>
        </Box>
    );
}
