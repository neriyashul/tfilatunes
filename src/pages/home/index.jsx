import React from "react";
import styles, { buttonProps } from "./style";
import { Box, Typography } from "@mui/material";
import MainBackground from "../../components/background";
import TfilotsButtons from "./tfilots-buttons";
import tfilot from "../../db/data/tefilot.json";

export default function Home() {
    return (
        <>
            <MainBackground sx={styles.background} />
            <Box component="main" sx={styles.main}>
                <Typography component="h1" sx={styles.heading}>
                    <b>מאגר&nbsp;מנגינות שיתופי&nbsp;לתפילות</b>
                </Typography>

                <TfilotsButtons tfilot={tfilot} />
            </Box>
        </>
    );
}
