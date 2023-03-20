import React, { useRef } from "react";
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
import { Sections, SectionsMenu, SubsectionsMenu } from "./Sections";
import { useSectionIndex } from "../../hooks/section";

export default function PlaylistDesktop({ tfila }) {
    const theme = useTheme();

    const sectionRefs = useRef([]);
    const sectionsArea = useRef();

    const anchorState = React.useState(null);
    const [, setAnchorEl] = anchorState;

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

    const { tunes, isLoading } = useTunes(subsection.id);

    return (
        <Box sx={styles.main}>
            <Box sx={styles.textContainer}>
                <AppBar sx={styles.textAppBar}>
                    <Toolbar>
                        <IconButton
                            sx={styles.iconButton}
                            onClick={() => scrollToSection(sectionIndex + 1)}
                        >
                            <South />
                        </IconButton>
                        <IconButton
                            sx={styles.iconButton}
                            onClick={() => scrollToSection(sectionIndex - 1)}
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
                            tefila={tfila}
                            anchorState={anchorState}
                            setSection={scrollToSection}
                            sx={styles.sectionsMenu}
                        />
                    </Toolbar>
                </AppBar>
                <Toolbar />
                <Box sx={styles.sectionsArea} ref={sectionsArea} />
                <Sections
                    tefila={tfila}
                    sectionRefs={sectionRefs}
                    onClick={(index) => scrollToSection(index)}
                    sx={styles.sections}
                />
            </Box>
            <Drawer {...sideDrawerProps}>
                <AppBar sx={styles.listAppBar}>
                    <Toolbar>
                        <SubsectionsMenu
                            section={section}
                            state={[subsectionIndex, setSubsectionIndex]}
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
                            <TuneList
                                isLoading={isLoading}
                                tunes={tunes}
                                subsection={subsection}
                            />
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    );
}
