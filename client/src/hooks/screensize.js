import { useMediaQuery, useTheme } from "@mui/material";

export default function useScreenSize() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return {
        isMobile,
        isDesktop: !isMobile,
    };
}
