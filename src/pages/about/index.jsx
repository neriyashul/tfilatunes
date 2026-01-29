import React from "react";
import { Box, Typography, Paper, List, ListItem } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Head from "../../components/head";

export default function About() {
    return (
        <Box
            sx={{
                minHeight: "70vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 2,
                py: 4,
            }}
        >
            <Head
                title="אודות"
                description="אודות מנגינות לתפילה - אתר שיתופי לשירים ומנגינות לקטעי תפילה"
            />
            <Paper
                elevation={6}
                sx={{
                    maxWidth: 560,
                    width: "100%",
                    p: 4,
                    borderRadius: 3,
                    border: "2px solid",
                    borderColor: "primary.main",
                    background:
                        "linear-gradient(145deg, rgba(40,40,40,0.95) 0%, rgba(25,25,25,0.98) 100%)",
                }}
            >
                <InfoOutlinedIcon
                    sx={{
                        display: "block",
                        mx: "auto",
                        fontSize: 48,
                        color: "primary.main",
                        mb: 2,
                        opacity: 0.9,
                    }}
                />
                <Typography
                    component="h1"
                    sx={{
                        fontSize: "1.75rem",
                        fontWeight: 700,
                        textAlign: "center",
                        mb: 3,
                        color: "text.primary",
                    }}
                >
                    מי אנחנו?
                </Typography>
                <Typography
                    sx={{
                        fontSize: "1.1rem",
                        color: "text.secondary",
                        lineHeight: 1.85,
                        mb: 2,
                    }}
                >
                    בשנים האחרונות יותר ויותר אנשים מחפשים דרכים לעשות את התפילה
                    משמעותית ומרגשת יותר – בין אם במניינים מוזיקליים, קבלות שבת,
                    תפילות בבית, או במהלך השבוע.
                </Typography>
                <Typography
                    sx={{
                        fontSize: "1.1rem",
                        color: "text.secondary",
                        lineHeight: 1.85,
                        mb: 1.5,
                    }}
                >
                    האתר הזה נועד לעזור לך למצוא שירים ומנגינות יפות לכל חלקי
                    התפילה:
                </Typography>
                <List dense sx={{ py: 0, listStyle: "disc", pr: 3 }} component="ul">
                    <ListItem sx={{ display: "list-item", listStyle: "disc", pr: 2 }}>
                        <Typography component="span" sx={{ fontSize: "1.05rem", color: "text.secondary" }}>
                            אם את מתפללת בבית ורוצה להתפלל בצורה מרגשת
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", listStyle: "disc", pr: 2 }}>
                        <Typography component="span" sx={{ fontSize: "1.05rem", color: "text.secondary" }}>
                            אם אתה מנהל מניין ומחפש לגוון את השירים
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", listStyle: "disc", pr: 2 }}>
                        <Typography component="span" sx={{ fontSize: "1.05rem", color: "text.secondary" }}>
                            אם אתם רוצים פשוט להכיר מנגינות חדשות
                        </Typography>
                    </ListItem>
                </List>
                <Typography
                    sx={{
                        fontSize: "1.1rem",
                        color: "text.secondary",
                        lineHeight: 1.85,
                        my: 2,
                    }}
                >
                    כל קטע תפילה מציג רשימה של שירים מתאימים עם קישורים ישירים,
                    כך שתוכלו למצוא בקלות את מה שמתאים לכם.
                </Typography>
                <Typography
                    sx={{
                        fontSize: "1.1rem",
                        color: "text.secondary",
                            lineHeight: 1.85,
                        fontWeight: 500,
                    }}
                >
                    האתר חינמי לחלוטין ונבנה לשם שמיים.
                </Typography>
            </Paper>
        </Box>
    );
}
