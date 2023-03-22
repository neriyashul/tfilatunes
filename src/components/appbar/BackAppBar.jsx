import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useScreenSize } from "../../hooks/screen";
import AppBarMenu from ".";

import { backAppBarStyles as styles } from "./style";

export default function BackAppBar({ children, header, onMenuClick }) {
    const navigate = useNavigate();

    const { isMobile } = useScreenSize();
    if (isMobile) {
        return (
            <>
                <AppBar sx={styles.appbar}>
                    <Toolbar variant="dense">
                        <IconButton
                            onClick={onMenuClick}
                            sx={styles.moreButton}
                            aria-label="more"
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Typography sx={styles.header} component="h2">
                            {header}
                        </Typography>
                        <Box sx={styles.gap} />
                        <IconButton
                            aria-label="return"
                            onClick={() => navigate(-1)}
                        >
                            <ArrowBackIosIcon sx={styles.backIcon} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Toolbar variant="dense" />

                {children}
            </>
        );
    } else {
        return <AppBarMenu />;
    }
}
