import { Link } from "react-router-dom";
import Logo from ".";
import styles from "./style";
import { Box } from "@mui/material";

export default function LogoLinkToHome({ sx, ...props }) {
    return (
        <Box
            component={Link}
            to="/"
            sx={{ ...styles.link, ...sx }}
            {...props}
        >
            <Logo />
        </Box>
    );
}
