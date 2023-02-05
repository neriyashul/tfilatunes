import React, { useEffect, useState } from "react";
import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    FormControl,
    IconButton,
    Input,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Skeleton,
    Stack,
    Toolbar,
    Typography,
    styled,
    useTheme,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import LongRating from "../rating/LongRating";
import ListSelector from "../list-selector";
import Text from "../Text";
import useTextPlaylist from "../../hooks/text-playlist";
import colors from "../../utils/colors";
// import { North, South } from "@mui/icons-material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { North, South } from "@mui/icons-material";
import Playlist from "../playlist";

// player.current.hidden = null;
// player.current.width = value+"%";
// player.current.id = id;

const startAt = 24;
const drawerWidth = 100 / 3 + "%";
const rate = 4;

export default function TunePageDesktop({ player }) {
    const { id } = useParams();
    return (
        <Box sx={{ display: "flex" }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    // elevation={0}
                    sx={{
                        bgcolor: "#000000",
                        // bgcolor: "#101010",
                        // bgcolor: "#252525",
                        position: "fixed",
                        top: "0",
                        zIndex: 0,
                    }}
                >
                    <Toolbar />
                    <Toolbar>
                        <Stack direction="row" spacing={0} sx={{ ml: 10 }}>
                            <IconButton sx={{ borderRadius: 2 }} onClick={()=>alert("cl")}>
                                <South />
                                {/* <ExpandMoreIcon /> */}
                            </IconButton>
                            <IconButton sx={{ borderRadius: 2 }}>
                                <North />
                                {/* <ExpandLessIcon /> */}
                            </IconButton>
                            <Typography sx={{ fontSize: "2rem", mb: 1, ml: 1 }}>
                                מזמור צ"ה
                            </Typography>
                        </Stack>
                    </Toolbar>
                </AppBar>

                <Text
                    id={id}
                    sx={{
                        paddingBottom: "50px",
                        mx: 15,
                        my: 14,
                        fontSize: "2rem",
                    }}
                />
            </Box>
            <Drawer
                variant="permanent"
                anchor="right"
                sx={{
                    zIndex: 0,
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        borderWidth: 0,
                        width: drawerWidth,
                        boxSizing: "border-box",
                        backgroundColor:
                            useTheme().palette.mode === "light"
                                ? "#252525"
                                : colors.darkGrey,
                    },
                }}

                // PaperProps={{
                //     sx: {

                //     },

                //     style: {
                //         '&.::-webkit-scrollbar': {
                //             width: '20px'
                //           },
                //           '&.::-webkit-scrollbar-track': {
                //             boxShadow: 'inset 0 0 5px grey',
                //             // webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
                //             borderRadius: "10px"
                //           },
                //           '&.::-webkit-scrollbar-thumb': {
                //             backgroundColor: 'red',
                //             // outline: '1px solid slategrey'

                //             borderRadius: "10px"
                //           }

                //         //   /* Handle on hover */
                //         //   ::-webkit-scrollbar-thumb:hover {
                //         //     background: #b30000;
                //         //   }

                //     }
                // }}
            >
                <Toolbar />

                <AppBar
                    // elevation={0}
                    sx={{
                        // bgcolor: "#282828",
                        bgcolor: "#131313",
                        position: "sticky",
                        top: "0",
                        zIndex: 3,
                    }}
                >
                    <Toolbar>
                        <Select
                            MenuProps={{
                                disableScrollLock: true,
                            }}
                            sx={{
                                borderRadius: 0.2,
                                fontSize: "1.2rem",
                                ml: 3,
                                pl: 1,
                                pr: 1,
                                my: 0.5,
                                color: "text.primary",
                                ".MuiOutlinedInput-notchedOutline": {
                                    border: 0,
                                },
                                "&:hover": {
                                    backgroundColor: "transparent",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                        border: "1px solid transparent",
                                    },
                                "& .MuiSelect-select:focus": {
                                    backgroundColor: "transparent",
                                },
                                "&.MuiInput-underline:before": {
                                    borderBottom: "0px solid ",
                                },
                                /* hover */
                                "&.MuiInput-underline:hover:before": {
                                    borderBottom: "2px solid lightblue",
                                },
                                /* focused */
                                "&.MuiInput-underline:after": {
                                    borderBottom: "2px solid transparent",
                                    border: "1px solid transparent",
                                },
                            }}
                            value={1}
                            // onChange={(event) => setParagraph(event.target.value)}
                            input={
                                <Input
                                    style={{ mx: 10 }}
                                    sx={{
                                        ":before": {
                                            borderBottomColor: "red",
                                        },
                                        // underline when selected
                                        ":after": {
                                            borderBottomColor: "red",
                                        },
                                    }}
                                />
                            }
                        >
                            <MenuItem value={1}>לכו נרננה</MenuItem>
                            <MenuItem value={2}>ארבעים שנה</MenuItem>
                        </Select>
                    </Toolbar>
                    {/* <Divider /> */}
                </AppBar>

                <Box
                    sx={{
                        overflowY: "auto",
                        "::-webkit-scrollbar": {
                            width: "0.8em",
                        },
                        "::-webkit-scrollbar-button": {
                            display: "none",
                        },
                        "::-webkit-scrollbar-thumb": {
                            borderRadius: "10px",
                            backgroundColor: colors.grey,
                            marginBottom: "0px",
                            // backgroundColor: (theme) => theme.palette.mode === "dark" ? colors.grey : colors.lightScrollBar,
                            // backgroundColor: "rgba(0,0,0,.1",
                            // outline: "1px solid slategrey",
                        },
                        // "::-webkit-scrollbar-thumb:hover": {},
                        // "::-webkit-scrollbar-track": {
                            // backgroundColor: "#00aa00",
                            // "-webkit-box-shadow": "inset 0 0 10px 10px green",
                        // },
                        // "::-webkit-scrollbar-track-piece": {},
                        // "::-webkit-scrollbar-corner": {},
                        // "::-webkit-resizer": {},
                    }}
                    dir="ltr"
                >
                    <div dir="rtl">
                        <Box sx={{ overflow: "auto", bgcolor: "#252525" }}>
                            <Playlist
                                id={id}
                                height="50vh"
                            />
                        </Box>
                    </div>
                </Box>
            </Drawer>
        </Box>
    );
}

/* <Playlist id={id} height="50vh" /> */
