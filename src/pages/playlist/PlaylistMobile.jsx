import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Box } from "@mui/material";
import { mobileStyles as styles } from "./style";
import TuneList from "./TuneList";
import { useTunes } from "../../hooks/tunes";
import { Sections, SectionsMenu, SubsectionsMenu } from "./Sections";
import { useSectionIndex } from "../../hooks/section";

export default function PlaylistPageMobile({
    tfila,
    setHeader,
    setOnMenuClick,
}) {
    const sectionRefs = useRef([]);
    const sectionsArea = useRef();

    const sectionIndexState = useSectionIndex(
        sectionRefs,
        sectionsArea,
        styles.rootMarginTop
    );
    const [sectionIndex, scrollToSection, subsectionIndex, setSubsectionIndex] =
        sectionIndexState;

    const section = tfila.sections[sectionIndex];
    const subsection = section.subsections[subsectionIndex];
    subsection.text = section.text;

    const anchorState = React.useState(null);
    const [, setAnchorEl] = anchorState;
    const tunes = useTunes(subsection?.id);

    useEffect(() => {
        setOnMenuClick(() => (e) => setAnchorEl(e.currentTarget));
    }, []);

    useLayoutEffect(() => setHeader(section.name), [section]);

    return (
        <>
            <SectionsMenu
                tefila={tfila}
                anchorState={anchorState}
                setSection={scrollToSection}
                sx={styles.sectionsMenu}
                elevation={0}
            />
            <Box>
                <Box sx={styles.sectionsArea} ref={sectionsArea} />
                <Sections
                    tefila={tfila}
                    sectionRefs={sectionRefs}
                    onClick={(index) => scrollToSection(index)}
                    sx={styles.sections}
                />
                <Box sx={styles.bottomContainer}>
                    <Box sx={styles.subsectionBar}>
                        <Box sx={styles.ellipse} />
                        <SubsectionsMenu
                            section={section}
                            state={[subsectionIndex, setSubsectionIndex]}
                            type="underline"
                        />
                    </Box>
                    <Box sx={styles.tunesContainer}>
                        <TuneList
                            isLoading={tunes.isLoading}
                            tunes={tunes.tunes}
                            subsection={subsection}
                        />
                    </Box>
                </Box>
            </Box>
        </>
    );
}
