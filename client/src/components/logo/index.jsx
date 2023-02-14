import { Box, Stack, Typography } from "@mui/material";
import { projectName } from "../../utils/strings";
import styles from "./style";

export default function Logo(props) {
    return (
        <Stack direction="row" {...props}>
            <Box component="img"
                sx={styles.image}
                alt="logo image"
                src={`/images/logo.png`}
            />
            <Typography sx={styles.text}>{projectName}</Typography>
        </Stack>
    );
}
