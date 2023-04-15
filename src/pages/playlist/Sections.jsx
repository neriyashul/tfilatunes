import { Box, Menu, MenuItem, Typography } from "@mui/material";

import React from "react";
import { sectionsStyles as styles } from "./style";
import parse from "html-react-parser";

export function SectionsMenu({ tefila, anchorState, setSection, ...props }) {
    const [anchorEl, setAnchorEl] = anchorState;

    return (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            disableScrollLock={true}
            {...props}
        >
            {tefila.sections.map((section, index) => {
                return (
                    <MenuItem
                        onClick={() => {
                            setSection(index);
                            setAnchorEl(null);
                        }}
                        key={index}
                    >
                        {section.name}
                    </MenuItem>
                );
            })}
        </Menu>
    );
}

export function Sections({ tefila, sectionRefs, onClick, ...props }) {
    return (
        <>
            <Box {...props}>
                {tefila?.sections.map((section, index) => {
                    return (
                        <Box
                            component="section"
                            key={index}
                            ref={(el) => (sectionRefs.current[index] = el)}
                            onClick={() => {
                                if (onClick) onClick(index);
                            }}
                            sx={styles.section}
                        >
                            {section.note && (
                                <Typography sx={styles.sectionNote}>
                                    {section.note.toString()}
                                </Typography>
                            )}
                            <Typography sx={styles.sectionText}>
                                {parse(section.text.toString())}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>
        </>
    );
}
