import React from "react";
import AppBarMobile from "./AppBarMobile";
import AppBarDesktop from "./AppBarDesktop";
import useScreenSize from "../../hooks/screensize";

import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CodeIcon from "@mui/icons-material/Code";
import InfoIcon from "@mui/icons-material/Info";

const links = {
    "/": "דף הבית",
    "/add-tune": "הוספת מנגינה",
    "/contribute": "איך אפשר לעזור",
    "/about": "אודות",
};

function getIcon(url) {
    switch (url) {
        case "/":
            return <HomeIcon />;
        case "/add-tune":
            return <AddCircleIcon />;
        case "/contribute":
            return <CodeIcon />;
        case "/about":
            return <InfoIcon />;
        default:
            return null;
    }
}

export default function AppBarMenu() {
    const { isMobile } = useScreenSize();
    if (isMobile) {
        return <AppBarMobile links={links} getIcon={getIcon} />;
    } else {
        return <AppBarDesktop links={links} />;
    }
}
