import { createTheme } from "@mui/material/styles";

let theme = createTheme({
    direction: "rtl",
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    overflowY: "scroll",
                },
            },
        },
    },

    palette: {
        mode: "dark",
        background: {
            default: "#121212",
            paper: "#1c1c1c",
        },

        primary: {
            // main: "#2a96b5",
            // main: "#2a7792",
            // main: "#259cc6",
            main: "#196d8a",
            // main: "#2b6da3",
        },
        secondary: {
            main: "#ffeb3b",
        },
        info: {
            main: "#202020",
        },
    },
});

theme = createTheme(theme, {
    typography: {
        h1: {
            [theme.breakpoints.between("xs", "md")]: {
                fontSize: "2rem",
            },
            [theme.breakpoints.up("md")]: {
                fontSize: "2.5rem",
            },
        },
    },
})

export { theme };
