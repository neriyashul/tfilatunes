import React, { useEffect } from "react";
import TuneMobile from "./TuneMobile";
import TuneDesktop from "./TuneDesktop";
import AppBarMenu from "../../components/appbar";
import useScreenSize from "../../hooks/screensize";

export default function TunePage({ player }) {
    const rate = 4;
    const videoId = "lBfa7fGPpxQ";
    const startAt = 24;

    useEffect(() => {
        player.setId(videoId);
        player.setStartAt(startAt);
    });

    const { isMobile } = useScreenSize();
    if (isMobile) {
        return (
            <>
                <TuneMobile player={player} rate={rate} />;
            </>
        );
    } else {
        return (
            <>
                <AppBarMenu />
                <TuneDesktop player={player} rate={rate} />
            </>
        );
    }
}
