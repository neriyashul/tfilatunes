import React from "react";
import { Box, Link as MuiLink, Typography } from "@mui/material";
import { styles } from "./style";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Contribute() {
    return (
        <Box sx={styles.container}>
            <Helmet>
                <title>איך אפשר לעזור?</title>
                <meta
                    name="description"
                    content="עזרו לנו ברעיונות ובפיתוח האתר - אתר מנגינות לתפילה מכיל אוסף שירים ומנגינות לקטעי תפילה, קבלות שבת והלל מוזיקליים"
                />
            </Helmet>
            <Typography variant="h4" component="h1" sx={styles.header}>
                איך אפשר לעזור?
            </Typography>
            <ul>
                <Box component="li" sx={styles.listItem}>
                    יש לך רעיון למנגינה שלא מופיעה באתר? ניתן להוסיף אותה&nbsp;
                    <MuiLink component={Link} to="/add-tune">
                        כאן
                    </MuiLink>
                </Box>
                <Box component="li" sx={styles.listItem}>
                    {
                        "יש לך שאלה, רעיון או בקשה? מוזמן/ת לפנות אלינו דרך המייל: "
                    }
                    <MuiLink href="mailto: support@tfilatunes.com">
                        support@tfilatunes.com
                    </MuiLink>
                </Box>
                <Box component="li" sx={styles.listItem}>
                    רוצה להשתתף בפיתוח האתר או בעיצוב שלו? האתר הוא עם קוד פתוח
                    ונמצא&nbsp; ב
                    <MuiLink href="https://github.com/neriyashul/tfilatunes">
                        גיטהאב
                    </MuiLink>
                </Box>
            </ul>
        </Box>
    );
}
