import React, { useRef, useState } from "react";
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
    useTheme,
} from "@mui/material";
import North from "@mui/icons-material/North";
import South from "@mui/icons-material/South";
import { sideDrawerProps, desktopStyles as styles } from "./style";
import { useTunes } from "../../hooks/tunes";
import TuneList from "./TuneList";
import { useFirstVisible } from "../../hooks/screen";
import { usePrevious } from "../../hooks/state";
import { Sections, SectionsMenu, SubsectionsMenu } from "./Sections";

export default function PlaylistDesktop({ tefila }) {
    const theme = useTheme();

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
        <Box sx={styles.main}>
            <Box sx={styles.textContainer}>
                <AppBar sx={styles.textAppBar}>
                    <Toolbar>
                        <IconButton
                            sx={styles.iconButton}
                            onClick={() => setSection(sectionIndex + 1)}
                        >
                            <South />
                        </IconButton>
                        <IconButton
                            sx={styles.iconButton}
                            onClick={() => setSection(sectionIndex - 1)}
                        >
                            <North />
                        </IconButton>
                        <Typography
                            onClick={(e) => setAnchorEl(e.currentTarget)}
                            sx={styles.textHeader}
                        >
                            {section.name}
                        </Typography>
                        <SectionsMenu
                            tefila={tefila}
                            anchorState={anchorState}
                            setSection={setSection}
                            sx={styles.sectionsMenu}
                        />
                    </Toolbar>
                </AppBar>
                <Toolbar />
                <Box sx={styles.sectionsArea} ref={sectionsArea} />
                <Sections
                    tefila={tefila}
                    sectionRefs={sectionRefs}
                    sx={styles.sections}
                />
            </Box>
            <Drawer {...sideDrawerProps}>
                <AppBar sx={styles.listAppBar}>
                    <Toolbar>
                        <SubsectionsMenu
                            section={section}
                            state={subsectionState}
                            {...styles.subsectionProps}
                        />
                    </Toolbar>
                </AppBar>
                <Toolbar />

                <Box
                    sx={styles.scrollbar}
                    dir="ltr" // Make sure the scroll bar is on the right side.
                >
                    <Box dir={theme.direction} /** reset direction **/>
                        <Box sx={styles.listContainer}>
                            <TuneList tunes={tunes.tunes} subsection={subsection}/>
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    );
}
