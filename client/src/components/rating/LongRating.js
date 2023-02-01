import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Box, Rating, Typography, styled } from "@mui/material";

export const colors = {
    gold: "#FFD700",
    lightBlue: "#259cc6",
    lightGrey: "#BFBFBF",
};

const StyledStarRoundedIcon = styled(StarRoundedIcon)({
    color: colors.lightBlue,
    fontSize: "inherited",
    margin: "auto",
});

const labels = {
    1: "אין התאמה למילים",
    2: "התאמה לא טובה למילים",
    3: "התאמה סבירה למילים",
    4: "התאמה די טובה למילים",
    5: "התאמה טובה מאוד למילים",
};

export default function LongRating({ rate, labelSize, iconsSize, ...props }) {
    return (
        <Box {...props}>
            <Rating
                name="read-only"
                value={rate}
                icon={<StyledStarRoundedIcon fontSize={iconsSize} />}
                emptyIcon={<StarBorderRoundedIcon fontSize={iconsSize} />}
                readOnly
            />
            <Typography
                component="legend"
                fontSize={labelSize}
                color="text.secondary"
                marginTop={-1}
            >
                {labels[rate]}
            </Typography>
        </Box>
    );
}
