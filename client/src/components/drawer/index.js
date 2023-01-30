import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    Toolbar,
} from "@mui/material";
import LogoLinkToHome from "../logo/LogoLinkToHome";
import { StyledDrawer, StyledListItemText } from "./style";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CodeIcon from "@mui/icons-material/Code";
import InfoIcon from "@mui/icons-material/Info";

const links = [
    {url: "/", name: "דף הבית"},
    {url: "/add-tune", name: "הוספת מנגינה"},
    {url: "/contribute", name: "איך אפשר לעזור"},
    {url: "/about", name: "אודות"},
];

function getIcon(url) {
     switch (url) {
        case "/":
            return <HomeIcon/>
        case "/add-tune":
            return <AddCircleIcon/>
        case "/contribute":
            return <CodeIcon/>
        case "/about":
            return <InfoIcon/>
        default:
            return null;
     }
}

export default function Drawer({ width = 240, isOpen, setIsOpen }) {
    const handleDrawerToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <StyledDrawer
            variant="temporary"
            open={isOpen}
            onClose={handleDrawerToggle}
            width={width}
        >
            <Toolbar>
                <LogoLinkToHome />
            </Toolbar>
            <Divider />

            <List>
                {links.map(({ url, name }) => (
                    <ListItem key={url} disablePadding>
                        <ListItemButton
                            component={Link}
                            onClick={handleDrawerToggle}
                            to={url}
                        >
                            {getIcon(url)}
                            <StyledListItemText primary={name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </StyledDrawer>
    );
}
