import { Box, Button, Paper, Stack, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AppBarMenu from "./appbar";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <Paper
                sx={{
                    top: 0,
                    position: "fixed",
                    width: "100%",
                    height: "100vh",
                    backgroundImage: {xs: `url(${process.env.PUBLIC_URL}/assets/images/main-mobile.svg)`, md: `url(${process.env.PUBLIC_URL}/assets/images/main-desktop.svg)`},
                }}
            />

            <Typography
                header
                sx={{ position: "relative", fontSize: {xs: "2rem", md: "2.5rem"}, width: "80%", left: "10%", textAlign: "center", marginTop: "13vh" }}
            >
                שיתוף מנגינות לקטעי תפילה
            </Typography>

            <Box
                sx={{
                    height: "51vh",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: { xs: "end", md: "center" },
                    alignItems: { xs: "center", md: "end" },
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        width: "300px",
                        height: "70px",
                        backgroundColor: "#2a7792",
                        color: "text.primary",
                        fontSize: "1.5rem",
                        mx: 12,
                        my: 3,
                    }}
                    // sx={{ width: "300px", backgroundColor: "#259CC6", color: "text.primary", fontSize: "1.5rem" }}
                    onClick={() => navigate(`/playlist/kabballat_shabbat.8`)}
                >
                    פלייליסט
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        width: "300px",
                        height: "70px",
                        backgroundColor: "#2a7792",
                        color: "text.primary",
                        fontSize: "1.5rem",
                        mx: 12,
                        my: 3,
                    }}
                    // sx={{ width: "300px", backgroundColor: "#259CC6", color: "text.primary", fontSize: "1.5rem" }}
                    onClick={() => navigate(`/tune/123`)}
                >
                    לכה דודי - דוד מלך
                </Button>
            </Box>
        </div>
    );
}
