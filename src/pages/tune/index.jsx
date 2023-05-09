import React, { useLayoutEffect, useState } from "react";
import TuneMobile from "./TuneMobile";
import TuneDesktop from "./TuneDesktop";
import { useScreenSize } from "../../hooks/screen";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useTune } from "../../hooks/tunes";
import { useSection } from "../../hooks/tfila";
import NotFound from "../404";
import Loading from "../../components/loading";
import { unpack } from "../../utils/tune";
import { Helmet } from "react-helmet-async";

function formatTitle(tune, subsection) {
    let strBuilder = [subsection.name];

    if (subsection.name !== tune.name) {
        strBuilder.push(` במנגינה של '${tune.name}'`);
    }

    if (tune.composer) {
        strBuilder.push(`- ${tune.composer}`);
    } else {
        strBuilder.push(`בביצוע של ${tune.performer}`);
    }

    return strBuilder.join(" ");
}

function formatDescription(tune, subsection) {
    return (
        formatTitle(tune, subsection) +
        `. 'מנגינות לתפילה' הוא אתר שיתופי ללחנים ושירים עבור קטעי התפילה השונים`
    );
}

export default function TunePage({ player, setHeader, setOnMenuClick }) {
    const param = useParams();
    const { state } = useLocation();
    const id = Number(param.id);

    const [searchParams] = useSearchParams();
    const subsectionId = Number(searchParams.get("subId"));

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

    const idx = tune?.performances.length - 1 || 0;
    const performanceIndexState = useState(idx);
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
        window.scrollTo({ top: 0 });
    }, []);

    if (isLoading) {
        return <Loading />;
    } else if (error || !tune) {
        return <NotFound />;
    }

    const performanceLabels = tune.performances.map((p) => p.label);

    let tuneElem;
    if (isMobile) {
        tuneElem = (
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
        tuneElem = (
            <TuneDesktop
                player={player}
                tune={tune}
                subsection={subsection}
                performanceLabels={performanceLabels}
                performanceIndexState={performanceIndexState}
            />
        );
    }

    return (
        <>
            <Helmet>
                <title>{formatTitle(tune, subsection)}</title>
                <meta
                    name="description"
                    content={formatDescription(tune, subsection)}
                />
            </Helmet>
            {tuneElem}
        </>
    );
}
