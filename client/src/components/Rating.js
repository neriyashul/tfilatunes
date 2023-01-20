import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Typography, styled } from "@mui/material";
import { Stack } from "@mui/system";

export const colors = {
    gold: "#FFD700",
    lightBlue: "#259cc6"
};

const StyledStarRoundedIcon = styled(StarRoundedIcon)({
    color: colors.lightBlue,
    fontSize: "inherited",
    margin: "auto",
});

export default function ShortRating({ rate, size = "medium" }) {
    if (rate) {
        return (
            <Stack direction="row">
                <StyledStarRoundedIcon />
                <Typography sx={{fontSize: "large"}}>{rate}</Typography>
            </Stack>
        );
    }
}
