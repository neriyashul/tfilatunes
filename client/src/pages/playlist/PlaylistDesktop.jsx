import React from "react";
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    MenuItem,
    Toolbar,
    Typography,
    useTheme,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import North from "@mui/icons-material/North";
import South from "@mui/icons-material/South";
import useText from "../../hooks/text";
import { sideDrawerProps, desktopStyles as styles } from "./style";
import usePlaylist from "../../hooks/playlist";
import NotFound from "../404";
import MenuSelect from "../../components/select/MenuSelect";
import TuneList from "./TuneList";

export default function PlaylistDesktop() {
    const { key } = useParams();
    const { isLoading, text, error } = useText(key);
    const { isLoading: isTunesLoading, tunes, tunesError } = usePlaylist(key);

    const navigate = useNavigate();
    const theme = useTheme();

    if (isLoading || isTunesLoading) {
        return <p>טוען מידע...</p>;
    } else if (error) {
        return <NotFound />;
    }

    return (
        <Box component="main" sx={styles.main}>
            <Box sx={styles.textContainer}>
                <AppBar sx={styles.textAppBar}>
                    <Toolbar>
                        <IconButton
                            sx={styles.iconButton}
                            onClick={() => alert("down")}
                        >
                            <South />
                        </IconButton>
                        <IconButton
                            sx={styles.iconButton}
                            onClick={() => alert("up")}
                        >
                            <North />
                        </IconButton>
                        <Typography sx={styles.textHeader}>
                            מזמור צ&quot;ה
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Typography sx={styles.text}>
                    {isLoading ? "טוען..." : text}
                </Typography>
            </Box>
            <Drawer {...sideDrawerProps}>
                <AppBar sx={styles.listAppBar}>
                    <Toolbar>
                        <MenuSelect
                            value={1}
                            onChange={(event) => alert(event.target.value)}
                            // onChange={(event) => setParagraph(event.target.value)}
                            fontSize="1.2rem"
                        >
                            <MenuItem value={1}>לכו נרננה</MenuItem>
                            <MenuItem value={2}>ארבעים שנה</MenuItem>
                        </MenuSelect>
                    </Toolbar>
                </AppBar>
                <Toolbar />

                <Box
                    sx={styles.scrollbar}
                    dir="ltr" // Make sure the scroll bar is on the right side.
                >
                    <Box dir={theme.direction} /** reset direction **/>
                        <Box sx={styles.listContainer}>
                            <List>
                                <TuneList
                                    tunes={tunes}
                                    onClickHandle={(tune) =>
                                        navigate(`/tune/${tune.name}`)
                                    }
                                />
                            </List>
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    );
}
