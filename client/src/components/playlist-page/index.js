import React from "react";
import PlaylistPageMobile from "./PlaylistPageMobile";
import PlaylistPageDesktop from "./PlaylistPageDesktop";
import { useMediaQuery, useTheme } from "@mui/material";

export default function TunePage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    if (isMobile) {
        return <PlaylistPageMobile />;
    } else {
        return <PlaylistPageDesktop />;
    }
}
