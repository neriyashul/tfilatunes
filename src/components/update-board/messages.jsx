import { Box } from "@mui/material";
import styles from "./style";

export default [
    {
        id: "tfila-yom-haatzmaut",
        getMessage: (isMobile) => (
            <>
                <Box
                    sx={styles.link}
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/files"
                >
                    קבצי מנגינות להדפסה
                </Box>

                <br />
                {isMobile ? (
                    <small>
                        כדי לנווט לעמוד ההורדה:
                        <ol>
                            <li>לחיצה על התפריט מצד שמאל למעלה</li>
                            <li>&quot;קבצים&nbsp;להדפסה&quot;</li>
                        </ol>
                        <br />
                    </small>
                ) : (
                    <small>
                        ניתן להוריד את הקבצים דרך &quot;קבצים להדפסה&quot;
                        בתפריט בראש&nbsp;העמוד
                    </small>
                )}
            </>
        ),
    },
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
