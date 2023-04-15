import React, { useRef, useState } from "react";
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    useTheme,
} from "@mui/material";
import North from "@mui/icons-material/North";
import South from "@mui/icons-material/South";
import { sideDrawerProps, desktopStyles as styles } from "./style";
import { useTunes } from "../../hooks/tunes";
import TuneList from "./TuneList";
import { Sections, SectionsMenu } from "./Sections";
import { useSectionIndex } from "../../hooks/section";
import MenuSelect from "../../components/select/MenuSelect";
import MediumToolbar from "../../components/appbar/MediumToolbar";

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

    let subsection;
    if (section.subsections) {
        subsection = section.subsections[subsectionIndex];
        subsection.text = section.text;
    }

    const { tunes, isLoading } = useTunes(subsection?.id);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Box sx={styles.main}>
            <Box sx={styles.textContainer}>
                <AppBar sx={styles.textAppBar}>
                    <MediumToolbar>
                        <IconButton
                            sx={styles.iconButton}
                            aria-label="next section"
                            onClick={() => scrollToSection(sectionIndex + 1)}
                        >
                            <South />
                        </IconButton>
                        <IconButton
                            sx={styles.iconButton}
                            aria-label="previous section"
                            onClick={() => scrollToSection(sectionIndex - 1)}
                        >
                            <North />
                        </IconButton>
                        <Button
                            variant="text"
                            onClick={(e) => {
                                setAnchorEl(e.currentTarget);
                                setIsMenuOpen((prev) => !prev);
                            }}
                            component="h1"
                            sx={styles.textHeader}
                            id="menu-button"
                            aria-controls={
                                isMenuOpen ? "menu-button" : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={isMenuOpen ? "true" : undefined}
                        >
                            {section.name}
                        </Button>
                        <SectionsMenu
                            tefila={tfila}
                            anchorState={anchorState}
                            setSection={(i) => scrollToSection(i, "instant")}
                            sx={styles.sectionsMenu}
                            MenuListProps={{
                                "aria-labelledby": "menu-button",
                            }}
                        />
                    </MediumToolbar>
                </AppBar>
                <MediumToolbar />
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
                    <MediumToolbar>
                        <MenuSelect
                            collection={section?.subsections}
                            labelField={"name"}
                            id="menu-select"
                            ariaLabel="subtitle menu"
                            state={[subsectionIndex, setSubsectionIndex]}
                        />
                    </MediumToolbar>
                </AppBar>
                <MediumToolbar />

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
