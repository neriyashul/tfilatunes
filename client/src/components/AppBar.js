import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function AppBarMenu({ setMode }) {
    return (
        <Box>
            <AppBar
                position="fixed"
                color="primary"
                sx={{ top: 0, bottom: "auto" }}
            >
                <Toolbar>
                    <Button color="inherit" aria-label="open drawer">
                        start
                    </Button>
                    <Button
                        variant="contained"
                        onClick={
                            () => setMode((state) =>
                                state === "dark" ? "light" : "dark"
                            )
                        }
                    >
                        mode
                    </Button>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}
