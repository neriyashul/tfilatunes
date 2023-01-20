import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import {
    Divider,
    List,
    Menu,
    MenuItem,
    Select,
    Tab,
    Tabs,
} from "@mui/material";
import PlaylistItem from "./PlaylistItem";
import colors from "../utils/colors";
const drawerBleeding = 36;

const Root = styled("div")(({ theme }) => ({
    height: "100%",
    backgroundColor:
        theme.palette.mode === "light"
            ? grey[100]
            : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "light" ? colors.lightGrey : colors.darkGrey,
}));

const StyledHeader = styled(Box)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "light" ? colors.lightGrey : colors.darkGrey,
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor:
        theme.palette.mode === "light" ? grey[300] : colors.background,
    borderRadius: 3,
    position: "absolute",
    top: 8,
    left: "calc(50% - 15px)",
}));

function PlaylistDrawer({
    tunes,
    clickedTune,
    setClickedTune,
    onClickHandle,
    height = "50%",
    ...props
}) {
    const [paragraph, setParagraph] = React.useState(1);

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    ".MuiDrawer-root > .MuiPaper-root": {
                        height: `calc(${height} - ${drawerBleeding}px)`,
                        overflow: "visible",
                    },
                }}
            />
            <Drawer
                variant="permanent"
                anchor="bottom"
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledHeader
                    sx={{
                        position: "absolute",
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: "visible",
                        right: 0,
                        left: 0,
                        px: 1.5,
                    }}
                >
                    <Puller />
                    <Tabs value={0}>
                        <Tab label="לכה דודי" />
                        <Tab label="ארבעים שנה" />
                    </Tabs>
                    {/* <Button onClick={() => setParagraph("2")}>hello</Button> */}
                    {/* <Select
                        id="123"
                        disabled
                    
                        sx={{
                            color: "text.primary",
                            ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        }}
                        value={paragraph}
                        onChange={(event) => setParagraph(event.target.value)}
                    >
                        <MenuItem value={1}>לכו נרננה</MenuItem>
                        <MenuItem value={2}>ארבעים שנה</MenuItem>
                    </Select> */}
                </StyledHeader>
                <StyledBox
                    sx={{
                        height: "100%",
                        overflow: "auto",
                    }}
                >
                    <List>
                        {tunes.map((tune, key) => {
                            if (key === clickedTune?.key) {
                                var playingStatus = clickedTune?.status;
                            }

                            return (
                                <PlaylistItem
                                    key={key}
                                    number={key + 1}
                                    tune={tune}
                                    playingStatus={playingStatus}
                                    onClickHandle={() => {
                                        onClickHandle(setClickedTune, key);
                                    }}
                                />
                            );
                        })}
                    </List>
                </StyledBox>
            </Drawer>
        </Root>
    );
}

export default PlaylistDrawer;
