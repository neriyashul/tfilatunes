import React from "react";
import { Box, Link as MuiLink, Typography, Paper, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Head from "../../components/head";
import GitHubButton from "react-github-btn";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";
import StarIcon from "@mui/icons-material/Star";

const email = "support@tfilatunes.com";
const GITHUB_URL = "https://github.com/neriyashul/tfilatunes";

const sectionSx = {
    display: "flex",
    alignItems: "flex-start",
    gap: 2,
    p: 2.5,
    borderRadius: 2,
    bgcolor: "action.hover",
    border: "1px solid",
    borderColor: "divider",
};

const iconSx = {
    color: "primary.main",
    fontSize: 32,
    flexShrink: 0,
};

export default function Contribute() {
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
                title="איך אפשר לעזור"
                description="עזרו לנו ברעיונות ובפיתוח האתר - אתר מנגינות לתפילה מכיל אוסף שירים ומנגינות לקטעי תפילה, קבלות שבת והלל מוזיקליים"
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
                    איך אפשר לעזור?
                </Typography>
                <Stack spacing={2}>
                    <Box sx={sectionSx}>
                        <MusicNoteIcon sx={iconSx} />
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "1.05rem",
                                    color: "text.primary",
                                    lineHeight: 1.6,
                                }}
                            >
                                יש לך רעיון למנגינה שלא מופיעה באתר?{" "}
                                <MuiLink
                                    component={Link}
                                    to="/add-tune"
                                    sx={{
                                        color: "primary.main",
                                        fontWeight: 600,
                                    }}
                                >
                                    שלחו אלינו אימייל
                                </MuiLink>{" "}
                                עם הפרטים.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={sectionSx}>
                        <EmailIcon sx={iconSx} />
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "1.05rem",
                                    color: "text.primary",
                                    lineHeight: 1.6,
                                    mb: 1,
                                }}
                            >
                                יש לך שאלה, רעיון או בקשה? פנו אלינו:
                            </Typography>
                            <MuiLink
                                href={`mailto:${email}`}
                                sx={{
                                    fontSize: "1.1rem",
                                    fontWeight: 600,
                                    color: "primary.main",
                                }}
                            >
                                {email}
                            </MuiLink>
                        </Box>
                    </Box>

                    <Box sx={sectionSx}>
                        <CodeIcon sx={iconSx} />
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "1.05rem",
                                    color: "text.primary",
                                    lineHeight: 1.6,
                                }}
                            >
                                רוצים להשתתף בפיתוח או בעיצוב? האתר קוד פתוח{" "}
                                <MuiLink
                                    href={GITHUB_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: "primary.main",
                                        fontWeight: 600,
                                    }}
                                >
                                    בגיטהאב
                                </MuiLink>
                                .
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={sectionSx}>
                        <StarIcon sx={iconSx} />
                        <Box sx={{ width: "100%" }}>
                            <Typography
                                sx={{
                                    fontSize: "1.05rem",
                                    color: "text.primary",
                                    lineHeight: 1.6,
                                    mb: 1.5,
                                }}
                            >
                                אהבתם את האתר? תנו לנו כוכב:
                            </Typography>
                            <GitHubButton
                                href={GITHUB_URL}
                                data-icon="octicon-star"
                                data-size="large"
                                aria-label="Star neriyashul/tfilatunes on GitHub"
                            >
                                Star
                            </GitHubButton>
                        </Box>
                    </Box>
                </Stack>
            </Paper>
        </Box>
    );
}
