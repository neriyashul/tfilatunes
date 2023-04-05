import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./style";

export default function About() {
    return (
        <Box sx={styles.container}>
            <Typography
                variant="h4"
                component="h1"
                sx={styles.header}
            >
                מי אנחנו?
            </Typography>
            <Typography sx={styles.text}>
                בשנים האחרונות, מתקיימים יותר ויותר מנייני קרליבך, תפילות
                הלל מוזיקאליות ובכללי מכניסים הרבה יותר שירים ומנגינות לתוך התפילה.
                <br />
                הרעיון של האתר הוא לשמש מקום שמרכז את אותם השירים והמנגינות
                שמתאימים לקטעי התפילה ולהציג אותם בצורה קלה ופשוטה.
                <br />
                האתר חינמי ונבנה לשם שמיים.<br/>
                בנוסף, האתר הוא שיתופי כך שכולם יכולים להוסיף מנגינות חדשות (או
                ישנות 😉)
            </Typography>
        </Box>
    );
}
