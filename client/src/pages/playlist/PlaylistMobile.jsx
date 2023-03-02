import { useNavigate, useParams } from "react-router-dom";
import React, { useRef, useState } from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { mobileStyles as styles } from "./style";
import TuneList from "./TuneList";
import { useFirstVisible } from "../../hooks/screen";
import { useTefila } from "../../hooks/tefila";
import { useTunes } from "../../hooks/tunes";
import { usePrevious } from "../../hooks/state";
import { Sections, SectionsMenu, SubsectionsMenu } from "./Sections";

export default function PlaylistPageMobile() {
    const navigate = useNavigate();
    const { key } = useParams();
    const tefila = useTefila(key);

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

    return (
        <>
            <AppBar sx={styles.appbar}>
                <Toolbar>
                    <IconButton
                        onClick={(e) => setAnchorEl(e.currentTarget)}
                        sx={styles.moreButton}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <SectionsMenu
                        tefila={tefila}
                        anchorState={anchorState}
                        setSection={setSection}
                        sx={styles.sectionsMenu}
                    />
                    <Typography sx={styles.sectionName}>
                        {section.name}
                    </Typography>
                    <Box sx={styles.gap} />
                    <IconButton
                        onClick={() => navigate(-1)}
                        sx={styles.backButtom}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Box>
                <Box sx={styles.sectionsArea} ref={sectionsArea} />
                <Sections
                    tefila={tefila}
                    sectionRefs={sectionRefs}
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
                        <TuneList tunes={tunes.tunes} subsection={subsection}/>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
