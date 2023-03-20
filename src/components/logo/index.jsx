import { Box, Stack, Typography } from "@mui/material";
import { projectName } from "../../utils/strings";
import styles from "./style";
import { ReactComponent as LogoImage } from "./logo.svg";

export default function Logo(props) {
    return (
        <Stack direction="row" {...props}>
            <Box component={LogoImage} sx={styles.image} />
            <Typography sx={styles.text}>{projectName}</Typography>
        </Stack>
    );
}
