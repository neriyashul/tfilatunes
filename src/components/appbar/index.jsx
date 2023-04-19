import React from "react";
import AppBarMobile from "./AppBarMobile";
import AppBarDesktop from "./AppBarDesktop";
import { useScreenSize } from "../../hooks/screen";

const HomeIcon = React.lazy(() => import("@mui/icons-material/Home"));
const AddCircleIcon = React.lazy(() => import("@mui/icons-material/AddCircle"));
const CodeIcon = React.lazy(() => import("@mui/icons-material/Code"));
const InfoIcon = React.lazy(() => import("@mui/icons-material/Info"));
const PrintIcon = React.lazy(() => import("@mui/icons-material/Print"));

const links = {
    "/": "דף הבית",
    "/files": "קבצים להדפסה",
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
        case "/files":
            return <PrintIcon />;
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
