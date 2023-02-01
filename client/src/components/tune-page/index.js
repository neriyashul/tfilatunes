import React from "react";
import TunePageMobile from "./TunePageMobile"
import TunePageDesktop from "./TunePageDesktop"
import { useMediaQuery, useTheme } from "@mui/material";

export default function TunePage({player }) {
    const id = "lBfa7fGPpxQ";
    const startAt = 24;
    const rate = 4;
    

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    if (isMobile) {
        return <TunePageMobile player={player} rate={rate} />;
    } else {
        return <TunePageDesktop player={player} rate={rate} />;
    }
    // player.id = id;
    // player.startAt = startAt;

}
