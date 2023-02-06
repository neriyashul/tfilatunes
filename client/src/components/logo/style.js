import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const StyledImage = styled("img")({
    width: 15,
    height: 30,
});

export const StyledHeader = (props) => (
    <Typography
        sx={{
            ml: 0.75,
            fontSize: "1.3rem",
        }}
    >
        {props.children}
    </Typography>
);

export const StyledLink = styled(Link)({
    textDecoration: "none",
    color: "inherit",
});