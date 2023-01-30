import { Button, Toolbar } from "@mui/material";
import {
    StyledAppBar,
    StyledMargin,
    StyledTab,
    StyledTabs,
} from "./style";
import React from "react";
import LogoLinkToHome from "../logo/LogoLinkToHome";
import { Link, useLocation } from "react-router-dom";

const links = {
    "/": "דף הבית",
    "/add-tune": "הוספת מנגינה",
    "/contribute": "איך אפשר לעזור",
    "/about": "אודות",
};

export default function AppBarMenu({ setMode }) {
    const { pathname } = useLocation();
    const value = pathname in links ? pathname : "/";

    return (
        <StyledAppBar>
            <Toolbar>
                <LogoLinkToHome />
                <StyledMargin />
                <StyledTabs value={value}>
                    {Object.entries(links).map(([url, name]) => (
                        <StyledTab
                            key={name}
                            label={name}
                            value={url}
                            component={Link}
                            to={url}
                        />
                    ))}
                </StyledTabs>

                <Button
                    variant="contained"
                    onClick={() =>
                        setMode((state) =>
                            state === "dark" ? "light" : "dark"
                        )
                    }
                    sx={{ backgroundColor: "#00ff00" }}
                >
                    mode
                </Button>
            </Toolbar>
        </StyledAppBar>
    );
}
