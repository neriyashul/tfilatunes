import AppBarMobile from "./AppBarMobile";
import AppBarDesktop from "./AppBarDesktop";
import { useMediaQuery, useTheme } from "@mui/material";

export default function AppBarMenu({ setMode }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    if (isMobile) {
        return <AppBarMobile setMode={setMode} />;
    } else {
        return <AppBarDesktop setMode={setMode} />;
    }
}
