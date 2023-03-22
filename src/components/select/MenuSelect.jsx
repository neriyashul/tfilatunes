import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import getStyles from "./style";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { useState } from "react";

export default function MenuSelect({
    collection,
    labelField,
    id,
    ariaLabel,
    state,
    ...props
}) {
    const styles = getStyles(props);
    const [selectedIndex, setSelectedIndex] = state;

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const [isHovering, setIsHovering] = useState(false);

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    if (collection.length == 0) return null;

    return (
        <Box sx={styles.buttonContainer}>
            <Button
                id={id + "-button"}
                aria-label={ariaLabel}
                aria-haspopup="listbox"
                aria-controls="menu-select"
                aria-expanded={isOpen ? "true" : undefined}
                sx={styles.button}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={(e) => setAnchorEl(e.currentTarget)}
                endIcon={isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            >
                <Typography {...styles.buttonTextProps}>
                    {collection[selectedIndex][labelField]}
                </Typography>
            </Button>
            <Box
                sx={{
                    ...styles.underline,
                    visibility: styles.getUnderlineVisibility(
                        isHovering && !isOpen
                    ),
                }}
            />
            <Menu
                anchorEl={anchorEl}
                open={isOpen}
                onClose={() => setAnchorEl(null)}
                MenuListProps={{
                    "aria-labelledby": ariaLabel,
                    role: "listbox",
                }}
                disableScrollLock={true}
            >
                {collection.map((item, index) => (
                    <MenuItem
                        key={item[labelField]}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {item[labelField]}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}
