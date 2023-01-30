import * as React from "react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import {
    Input,
    List,
    MenuItem,
    Select,
} from "@mui/material";
import PlaylistItem from "./PlaylistItem";
import colors from "../utils/colors";
const drawerBleeding = 36;

// const Root = styled("div")(({ theme }) => ({
//     height: "100%",
//     backgroundColor:
//         theme.palette.mode === "light"
//             ? grey[100]
//             : theme.palette.background.default,
// }));

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
        <Box
            sx={{
                position: "fixed",
                bottom: 0,
                right: 0,
                width: "100%",
                height: { height },
            }}
        >
            <StyledHeader
                sx={{
                    top: -drawerBleeding,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    visibility: "visible",
                    left: 0,
                    px: 1.5,
                }}
            >
                <Puller />
                <Select
                    MenuProps={{
                        disableScrollLock: true,
                    }}
                    sx={{
                        minHeight: 40,
                        borderRadius: 0.2,
                        ml: 3,
                        pl: 1,
                        pr: 1,
                        color: "text.primary",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        "&:hover": { backgroundColor: "transparent" },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid transparent",
                        },
                        "& .MuiSelect-select:focus": {
                            backgroundColor: "transparent",
                        },
                        "&.MuiInput-underline:before": {
                            borderBottom: "2px solid ",
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
                    value={paragraph}
                    onChange={(event) => setParagraph(event.target.value)}
                    input={
                        <Input
                            style={{ mx: 10 }}
                            sx={{
                                ":before": { borderBottomColor: "red" },
                                // underline when selected
                                ":after": { borderBottomColor: "red" },
                            }}
                        />
                    }
                >
                    <MenuItem value={1}>לכו נרננה</MenuItem>
                    <MenuItem value={2}>ארבעים שנה</MenuItem>
                </Select>
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
        </Box>
    );
}

export default PlaylistDrawer;
