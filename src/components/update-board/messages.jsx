import { Box } from "@mui/material";
import styles from "./style";

export default [
    {
        id: "tfila-yom-haatzmaut",
        getMessage: () => (
            <>
                תפילות ל
                <Box
                    sx={styles.link}
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/collection/yom-haatzmaut"
                >
                    יום&nbsp;העצמאות
                </Box>
            </>
        ),
    },
];
