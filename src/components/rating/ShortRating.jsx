import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import styles from "./style";

// rating with 1 star and number (e.g. 4⭐)
export default function ShortRating({ rate }) {
    if (rate) {
        return (
            <Stack direction="row">
                <StarRoundedIcon sx={styles.fullStar} />
                {/* <StarRoundedIcon sx={styles.notSelectedStar} /> */}
                <Typography sx={styles.rate}>{rate}</Typography>
            </Stack>
        );
    }
}
