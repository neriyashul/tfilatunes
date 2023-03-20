import React from "react";
import { useScreenSize } from "../../hooks/screen";
import { ReactComponent as DesktopBackground } from "./main-desktop.svg";
import { ReactComponent as MobileBackground } from "./main-mobile.svg";
import { Box } from "@mui/material";

export default function MainBackground(props) {
    const { isMobile } = useScreenSize();
    if (isMobile) {
        return <Box component={MobileBackground} {...props}/>
    } else {
        return <Box component={DesktopBackground} {...props}/>;
    }
}
