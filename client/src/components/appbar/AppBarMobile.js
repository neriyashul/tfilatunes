import { Box, Button, Toolbar } from "@mui/material";
import { StyledAppBar, StyledHeader, StyledIconButton } from "./style";
import React from "react";
import { projectName } from "../../utils/strings";

import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "../drawer";

export default function AppBarMenu({ setMode }) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <StyledAppBar>
            <Toolbar>
                <StyledIconButton
                    edge="start"
                    onClick={() => setIsOpen(true)}
                >
                    <MenuIcon />
                </StyledIconButton>
                <StyledHeader>{projectName}</StyledHeader>
                <SideDrawer isOpen={isOpen} setIsOpen={setIsOpen} />

                <Box sx={{ flexGrow: 1 }} />
                <Button
                    variant="contained"
                    onClick={() =>
                        setMode((state) =>
                            state === "dark" ? "light" : "dark"
                        )
                    }
                >
                    mode
                </Button>
            </Toolbar>
        </StyledAppBar>
    );
}
