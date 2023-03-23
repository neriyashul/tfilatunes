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
            main: "#196d8a",
        },
        secondary: {
            main: "#ffeb3b",
        },
        info: {
            main: "#202020",
        },
    },
});

export { theme };
