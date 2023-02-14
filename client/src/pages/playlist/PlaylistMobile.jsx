import { useNavigate, useParams } from "react-router-dom";
// import useTextPlaylist from "../../hooks/text-playlist";
import NotFound from "../404";
// import Playlist from "../playlist";
import React from "react";
import { Box, MenuItem, Typography } from "@mui/material";
import useText from "../../hooks/text";
import usePlaylist from "../../hooks/playlist";
import AppBarMenu from "../../components/appbar";
import { mobileStyles as styles } from "./style";
import MenuSelect from "../../components/select/MenuSelect";
import TuneList from "./TuneList";

export default function PlaylistPageMobile() {
    const { key } = useParams();
    const { isLoading, text, error } = useText(key);

    const { isLoading: isTunesLoading, tunes, tunesError } = usePlaylist(key);
    const navigate = useNavigate();

    if (isLoading) {
        return <p>טוען מידע...</p>;
    } else if (error) {
        return <NotFound />;
    } else {
        return (
            <>
                <AppBarMenu />
                <Box>
                    <Typography sx={styles.text}>{text}</Typography>
                    {/* <Playlist id={id} height="50vh"/> */}
                    <Box sx={styles.bottomContainer}>
                        <Box sx={styles.paragraphBar}>
                            <Box sx={styles.ellipse} />
                            <MenuSelect
                                // type="underline"
                                value={1}
                                // onChange={(event) =>
                                //     setParagraph(event.target.value)
                                // }
                            >
                                <MenuItem value={1}>לכו נרננה</MenuItem>
                                <MenuItem value={2}>ארבעים שנה</MenuItem>
                            </MenuSelect>
                        </Box>
                        <Box sx={styles.tunesContainer}>
                            <TuneList
                                tunes={tunes}
                                onClickHandle={(tune) =>
                                    navigate(`/tune/${tune.name}`)
                                }
                            />
                        </Box>
                    </Box>
                </Box>
            </>
        );
    }
}
