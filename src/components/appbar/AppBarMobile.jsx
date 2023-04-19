import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    ListItemText,
    Toolbar,
} from "@mui/material";
import React, { Suspense } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { List, ListItem, ListItemButton } from "@mui/material";
import LogoLinkToHome from "../logo/LogoLinkToHome";
import { drawerProps } from "./style";
import { Link } from "react-router-dom";
import { mobileStyles as styles } from "./style";

export default function AppBarMenu({ links, getIcon }) {
    const [isOpen, setIsOpen] = React.useState(false);

    function handleDrawerToggle() {
        setIsOpen((prev) => !prev);
    }

    return (
        <>
            <AppBar sx={styles.appbar}>
                <Toolbar variant="dense">
                    <LogoLinkToHome sx={styles.logo} />
                    <Box sx={styles.gap} />
                    <IconButton
                        sx={styles.menuIcon}
                        onClick={() => setIsOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Drawer
                        open={isOpen}
                        onClose={handleDrawerToggle}
                        {...drawerProps}
                    >
                        <Box component="nav">
                            <List>
                                {Object.entries(links).map(([url, name]) => (
                                    <ListItem key={url} disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            onClick={handleDrawerToggle}
                                            to={url}
                                            sx={styles.listItemButton}
                                        >
                                            <Suspense
                                                fallback={<div>Loading...</div>}
                                            >
                                                {getIcon(url)}
                                            </Suspense>
                                            <ListItemText
                                                sx={styles.listItemText}
                                                primary={name}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                </Toolbar>
            </AppBar>
            <Toolbar variant="dense" />
        </>
    );
}
