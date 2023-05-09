import React from "react";
import styles, { buttonProps } from "./style";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MainBackground from "../../components/background";
import UpdateBoard from "../../components/update-board";
import { Helmet } from "react-helmet-async";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>מנגינות לתפילה</title>
                <meta
                    name="description"
                    content="מאגר שירים ומנגינות לקטעי התפילה השונים. כולל קבלת שבת מוזיקלית והלל מוזיקלי. רוצה לחנים ללכה דודי? עולה חזן בתפילת החג הקרובה? זה בדיוק המקום בשבילך"
                />
            </Helmet>

            <MainBackground sx={styles.background} />
            <UpdateBoard />
            <Box component="main" sx={styles.main}>
                <Typography component="h1" sx={styles.heading}>
                    <b>מאגר&nbsp;מנגינות שיתופי&nbsp;לתפילות</b>
                </Typography>

                <Grid container sx={styles.grid}>
                    <Grid item>
                        <Button
                            component={Link}
                            to="/tunes?text=kabbalat-shabbat"
                            {...buttonProps}
                        >
                            קבלת שבת
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            component={Link}
                            to="/tunes?text=hallel"
                            {...buttonProps}
                        >
                            הלל
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            component={Link}
                            to="/collection/yom-haatzmaut"
                            {...buttonProps}
                        >
                            יום&nbsp;העצמאות
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            component={Link}
                            to="/collection/yom-yerushalayim"
                            {...buttonProps}
                        >
                            יום&nbsp;ירושלים
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
