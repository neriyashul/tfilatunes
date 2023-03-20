import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
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
