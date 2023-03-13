import React, { useLayoutEffect, useState } from "react";
import TuneMobile from "./TuneMobile";
import TuneDesktop from "./TuneDesktop";
import { useScreenSize } from "../../hooks/screen";
import { useLocation, useParams } from "react-router-dom";
import { useTune } from "../../hooks/tunes";
import { useSection } from "../../hooks/tefila";
import NotFound from "../404";
import Loading from "../../components/loading";
import { unpack } from "../../utils/tune";

export default function TunePage({ player, setHeader, setOnMenuClick }) {
    const param = useParams();
    const { state } = useLocation();

    const id = Number(param.id);
    const subsectionId = Number(param.subsectionId);

    let isLoading = false;
    let error;
    let tune = unpack(state?.tune);
    let subsection = state?.subsection;

    if (!tune) {
        const data = useTune(id, subsectionId);
        isLoading = data.isLoading;
        error = data.error;
        tune = data.tune;
    }

    if (!subsection) {
        subsection = useSection(subsectionId);
    }

    const { isMobile } = useScreenSize();
    const performanceIndexState = useState(0);
    const [performanceIndex] = performanceIndexState;

    useLayoutEffect(() => {
        if (tune?.performances && tune?.performances.length > 0) {
            const performance = tune.performances[performanceIndex];
            const videoId = performance.videoId;
            const startAt = performance.startAt;
            if (videoId) {
                player.setId(videoId);
                player.setStartAt(startAt);
            }
        }
    }, [tune, performanceIndex]);

    useLayoutEffect(() => {
        window.scrollTo({ top: 0});
    }, [])

    if (isLoading) {
        return <Loading />;
    } else if (error || !tune) {
        return <NotFound />;
    }

    const performanceLabels = tune.performances.map((p) => p.label);

    if (isMobile) {
        return (
            <TuneMobile
                player={player}
                tune={tune}
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
                tune={tune}
                subsection={subsection}
                performanceLabels={performanceLabels}
                performanceIndexState={performanceIndexState}
            />
        );
    }
}
