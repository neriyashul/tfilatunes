import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import { projectName } from "../../utils/strings";

import MenuIcon from "@mui/icons-material/Menu";
import { Divider, List, ListItem, ListItemButton } from "@mui/material";
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
                    <IconButton
                        sx={styles.menuIcon}
                        onClick={() => setIsOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={styles.header}>{projectName}</Typography>

                    <Drawer
                        open={isOpen}
                        onClose={handleDrawerToggle}
                        {...drawerProps}
                    >
                        <Box component="nav">
                            <Toolbar variant="dense">
                                <LogoLinkToHome onClick={handleDrawerToggle} />
                            </Toolbar>
                            <Divider />

                            <List>
                                {Object.entries(links).map(([url, name]) => (
                                    <ListItem key={url} disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            onClick={handleDrawerToggle}
                                            to={url}
                                        >
                                            {getIcon(url)}
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
