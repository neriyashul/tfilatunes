import React, { useEffect, useState } from "react";
import TuneMobile from "./TuneMobile";
import TuneDesktop from "./TuneDesktop";
import AppBarMenu from "../../components/appbar";
import { useScreenSize } from "../../hooks/screen";
import { useParams } from "react-router-dom";
import { useTune } from "../../hooks/tunes";
import { useSubsection } from "../../hooks/tefila";
import NotFound from "../404";

export default function TunePage({ player }) {
    const { id, subsectionId } = useParams();
    const { isMobile } = useScreenSize();

    const { isLoading, tune, error } = useTune(id);
    const subsection = useSubsection(subsectionId);

    const performanceIndexState = useState(0);
    const [performanceIndex] = performanceIndexState;
    const performance = tune?.performances[performanceIndex];

    const rate = Number(tune?.rate);
    const videoId = performance?.videoId;
    const startAt = performance?.startAt;

    useEffect(() => {
        if (videoId) {
            player.setId(videoId);
            player.setStartAt(startAt);
        }
    }, [videoId, startAt]);

    if (isLoading) {
        return <p>טוען מידע...</p>;
    } else if (error) {
        return <NotFound />;
    }

    const performanceLabels = tune?.performances.map((p) => p.label);

    if (isMobile) {
        return (
            <>
                <TuneMobile
                    player={player}
                    rate={rate}
                    subsection={subsection}
                    performanceLabels={performanceLabels}
                    performanceIndexState={performanceIndexState}
                />
            </>
        );
    } else {
        return (
            <>
                <AppBarMenu />
                <TuneDesktop
                    player={player}
                    rate={rate}
                    subsection={subsection}
                    performanceLabels={performanceLabels}
                    performanceIndexState={performanceIndexState}
                />
            </>
        );
    }
}
