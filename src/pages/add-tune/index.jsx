import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Head from "../../components/head";

const email = "support@tfilatunes.com";

export default function AddTune() {
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
                title="הוספת מנגינה חדשה"
                description="שלחו אלינו את המנגינות שברצונכם להעלות. כתבו לכתובת support@tfilatunes.com"
            />
            <Paper
                elevation={6}
                sx={{
                    maxWidth: 520,
                    width: "100%",
                    p: 4,
                    textAlign: "center",
                    borderRadius: 3,
                    border: "2px solid",
                    borderColor: "primary.main",
                    background:
                        "linear-gradient(145deg, rgba(40,40,40,0.95) 0%, rgba(25,25,25,0.98) 100%)",
                    direction: "rtl",
                }}
            >
                <MusicNoteIcon
                    sx={{
                        fontSize: 56,
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
                        mb: 2,
                        color: "text.primary",
                    }}
                >
                    רוצים להעלות מנגינה?
                </Typography>
                <Typography
                    sx={{
                        fontSize: "1.1rem",
                        color: "text.secondary",
                        lineHeight: 1.7,
                        mb: 3,
                    }}
                >
                    שלחו אלינו אימייל עם המנגינות שברצונכם להעלות לאתר
                    <br />
                    ונוסיף אותן בהקדם.
                </Typography>
                <Box
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1.5,
                        px: 3,
                        py: 2,
                        borderRadius: 2,
                        bgcolor: "action.hover",
                        border: "1px solid",
                        borderColor: "divider",
                    }}
                >
                    <EmailIcon sx={{ color: "primary.main", fontSize: 28 }} />
                    <Typography
                        component="a"
                        href={`mailto:${email}`}
                        sx={{
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            color: "primary.main",
                            textDecoration: "none",
                            "&:hover": {
                                textDecoration: "underline",
                            },
                        }}
                    >
                        {email}
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        fontSize: "0.95rem",
                        color: "text.secondary",
                        mt: 3,
                        textAlign: "center",
                    }}
                >
                    נשמח לשמוע מכם
                </Typography>
            </Paper>
        </Box>
    );
}
