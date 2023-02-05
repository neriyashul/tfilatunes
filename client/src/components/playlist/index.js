import { useMediaQuery, useTheme } from "@mui/material";
import PlaylistDesktop from "./PlaylistDesktop"
import PlaylistMobile from "./PlaylistMobile";

export default function AppBarMenu({ setMode }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    if (isMobile) {
        return <PlaylistMobile />;
    } else {
        return <PlaylistDesktop />;
    }
}
