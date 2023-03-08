import React, { useEffect, useLayoutEffect, useState } from "react";
import TuneMobile from "./TuneMobile";
import TuneDesktop from "./TuneDesktop";
import { useScreenSize } from "../../hooks/screen";
import { useParams } from "react-router-dom";
import { useTune } from "../../hooks/tunes";
import { useSection } from "../../hooks/tefila";
import NotFound from "../404";
import Loading from "../../components/loading";

export default function TunePage({ player, setHeader, setOnMenuClick }) {
    const param = useParams();
    const id = Number(param.id);
    const subsectionId = Number(param.subsectionId);
    const { isMobile } = useScreenSize();

    const { isLoading, tune, error } = useTune(id, subsectionId);
    const subsection = useSection(subsectionId);
    const performanceIndexState = useState(0);

    if (isLoading) {
        return <Loading />;
    } else if (error || !tune) {
        return <NotFound />;
    }

    const [performanceIndex] = performanceIndexState;
    const performance = tune?.performances[performanceIndex];

    const rate = Number(tune?.rate);
    const videoId = performance?.videoId;
    const startAt = performance?.startAt;

    useLayoutEffect(() => {
        if (videoId) {
            player.setId(videoId);
            player.setStartAt(startAt);
        }
    }, [videoId, startAt]);

    const performanceLabels = tune?.performances.map((p) => p.label);

    if (isMobile) {
        return (
            <TuneMobile
                player={player}
                rate={rate}
                subsection={subsection}
                performanceLabels={performanceLabels}
                performanceIndexState={performanceIndexState}
                setHeader={setHeader}
                setOnMenuClick={setOnMenuClick}
            />
        );
    } else {
        return (
            <TuneDesktop
                player={player}
                rate={rate}
                subsection={subsection}
                performanceLabels={performanceLabels}
                performanceIndexState={performanceIndexState}
            />
        );
    }
}
