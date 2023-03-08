import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { mobileStyles as styles } from "./style";
import TuneList from "./TuneList";
import { useFirstVisible } from "../../hooks/screen";
import { useTunes } from "../../hooks/tunes";
import { usePrevious } from "../../hooks/state";
import { Sections, SectionsMenu, SubsectionsMenu } from "./Sections";

export default function PlaylistPageMobile({
    tefila,
    setHeader,
    setOnMenuClick,
}) {

    const sectionRefs = useRef([]);
    const sectionsArea = useRef();
    const [sectionIndex, setSection] = useFirstVisible(
        sectionRefs,
        sectionsArea,
        styles.rootMarginTop
    );
    const prevSectionIndex = usePrevious(sectionIndex) || 0;
    const section = tefila.sections[sectionIndex];

    const anchorState = React.useState(null);
    const [, setAnchorEl] = anchorState;

    const subsectionState = useState(0);
    const [subsectionIndex, setSubsectionIndex] = subsectionState;

    if (prevSectionIndex != sectionIndex && subsectionIndex != 0) {
        setSubsectionIndex(0);
    }
    const subsection = section.subsections[subsectionIndex];

    const tunes = useTunes(subsection?.id);

    useEffect(() => {
        setOnMenuClick(() => (e) => setAnchorEl(e.currentTarget));
    }, []);

    useLayoutEffect(() => setHeader(section.name), [section]);

    return (
        <>
            <SectionsMenu
                tefila={tefila}
                anchorState={anchorState}
                setSection={setSection}
                sx={styles.sectionsMenu}
            />
            <Box>
                <Box sx={styles.sectionsArea} ref={sectionsArea} />
                <Sections
                    tefila={tefila}
                    sectionRefs={sectionRefs}
                    onClick={(index) => setSection(index)}
                    sx={styles.sections}
                />
                <Box sx={styles.bottomContainer}>
                    <Box sx={styles.subsectionBar}>
                        <Box sx={styles.ellipse} />
                        <SubsectionsMenu
                            section={section}
                            state={subsectionState}
                            type="underline"
                        />
                    </Box>
                    <Box sx={styles.tunesContainer}>
                        <TuneList tunes={tunes.tunes} subsection={subsection} />
                    </Box>
                </Box>
            </Box>
        </>
    );
}
