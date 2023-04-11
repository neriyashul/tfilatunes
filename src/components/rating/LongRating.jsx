import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Box, Rating, Typography } from "@mui/material";
import styles from "./style"

const labels = {
    1: "אין התאמה למילים",
    2: "התאמה לא טובה למילים",
    3: "התאמה סבירה למילים",
    4: "התאמה די טובה למילים",
    5: "התאמה מלאה למילים",
};

// rating with 5 stars and label
export default function LongRating({ rate, labelSize, iconsSize, ...props }) {
    return (
        <Box {...props}>
            <Rating
                value={rate}
                icon={<StarRoundedIcon sx={{...styles.fullStar, fontSize: iconsSize}} />}
                emptyIcon={<StarBorderRoundedIcon sx={{fontSize: iconsSize}} />}
                readOnly
            />
            <Typography
                variant="body2"
                fontSize={labelSize}
                sx={styles.label}
            >
                {labels[rate]}
            </Typography>
        </Box>
    );
}
