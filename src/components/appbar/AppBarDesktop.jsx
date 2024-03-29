import React from "react";
import { AppBar, Tab, Tabs } from "@mui/material";
import LogoLinkToHome from "../logo/LogoLinkToHome";
import { Link, useLocation } from "react-router-dom";
import { tabProps, tabsProps } from "./style";
import { desktopStyles as styles } from "./style";
import { Box } from "@mui/system";
import MediumToolbar from "./MediumToolbar";

export default function AppBarMenu({ links }) {
    const { pathname } = useLocation();
    const value = pathname in links ? pathname : "/";

    return (
        <>
            <AppBar sx={styles.appbar}>
                <MediumToolbar component="nav">
                    <LogoLinkToHome sx={styles.logo} />
                    <Box sx={styles.gap} />
                    <Tabs value={value} {...tabsProps}>
                        {Object.entries(links).map(([url, name]) => (
                            <Tab
                                key={name}
                                label={name}
                                value={url}
                                component={Link}
                                to={url}
                                {...tabProps}
                            />
                        ))}
                    </Tabs>
                </MediumToolbar>
            </AppBar>
            <MediumToolbar />
        </>
    );
}
