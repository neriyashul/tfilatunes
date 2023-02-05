import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Typography, styled } from "@mui/material";
import { Stack } from "@mui/system";

export const colors = {
    gold: "#FFD700",
    lightBlue: "#259cc6",
    notSelected: "#878787",
};

const StyledStarRoundedIcon = styled(StarRoundedIcon)({
    color: colors.notSelected,
    fontSize: "inherited",
    margin: "auto",
});

export default function ShortRating({ rate, size = "medium" }) {
    if (rate) {
        return (
            <Stack direction="row">
                <StyledStarRoundedIcon />
                <Typography sx={{fontSize: "1.1rem"}}>{rate}</Typography>
            </Stack>
        );
    }
}
