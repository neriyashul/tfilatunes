import { Box, Button, IconButton, Skeleton, styled } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import React, { useEffect, useReducer, useState } from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import ReactPlayer from "react-player/youtube";
import { width } from "@mui/system";

export default function YoutubeEmbed(initialProps) {
    // const StyledTooltip = styled(({ className, ...props }) => (
    //     <Tooltip {...props} classes={{ popper: className }} />
    // ))(({ theme }) => ({
    //     [`& .${tooltipClasses.tooltip}`]: {
    //         backgroundColor: "#000000ba",
    //         boxShadow: theme.shadows[1],
    //         fontSize: 12,
    //     },
    // }));

    const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "black" : "#EBEBEB",
        position: "absolute",
        top: 0,
        right: 0,
    }));

    const [id, setId] = React.useState();
    const [startAt, setStartAt] = React.useState(0);
    const [props, setProps] = React.useState({ ...initialProps });
    const [children, setChildren] = React.useState();
    const [isReady, setIsReady] = React.useState(false);

    useEffect(() => {
        const newChildern = React.Children.map(
            initialProps.children,
            (child) => {
                const player = {
                    setId,
                    setStartAt,
                    setProps,
                };
                return React.cloneElement(child, { player });
            }
        );
        setChildren(newChildern);
    }, [initialProps]);

    return (
        <div>
            <Box position="relative" margin="auto" {...props}>
                <div
                    style={{
                        paddingTop: "56.25%", // Percentage ratio for 16:9
                        position: "relative",
                    }}
                >
                    {!isReady && (
                        <StyledSkeleton
                            variant="rectangular"
                            width="100%"
                            height="100%"
                        />
                    )}
                    <ReactPlayer
                        url={`https://www.youtube.com/embed/${id}?modestbranding=1`}
                        width="100%"
                        height="100%"
                        style={{
                            position: "absolute",
                            top: "0",
                            right: "0",
                        }}
                        onReady={() => setIsReady(true)}
                        config={{
                            youtube: {
                                playerVars: {
                                    controls: 1,
                                    color: "white",
                                    start: startAt,
                                    showinfo: 0,
                                    rel: 0,
                                },
                            },
                        }}
                    />
                </div>
                {/* <IconButton
                    disableRipple
                    disableFocusRipple
                    sx={{
                        // visibility: isLoaded ? "visible" : "hidden",
                        position: "absolute",
                        bottom: 0,
                        left: {xs: "133px", md: "195px"},
                        opacity: 0.9,
                        "&:hover": {
                            backgroundColor: "transparent",
                            opacity: 1,
                        },
                    }}
                    >
                    <StyledTooltip title="הפעלה מחדש" placement="top">
                    <ReplayIcon  sx={{ fontSize: {xs: 21, md: 24}}}/>
                    </StyledTooltip>
                </IconButton> */}
            </Box>
            {children}
        </div>
    );
}
