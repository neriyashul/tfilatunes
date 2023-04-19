import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Button, Typography } from "@mui/material";
import styles from "./style";

export default function FilesForPrinting() {
    const [value, setValue] = React.useState("קבלת_שבת");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box sx={styles.center}>
            <Box
                component="form"
                sx={styles.form}
            >
                <Typography component="h1" sx={styles.header}>
                    קבצי&nbsp;מנגינות&nbsp;להדפסה
                </Typography>
                <FormControl>
                    <FormLabel
                        id="radio-buttons-lablel"
                        sx={{ fontSize: "1.5rem" }}
                    >
                        בחר תפילה
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="radio-buttons-lablel"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel
                            value="קבלת_שבת"
                            control={<Radio />}
                            label="קבלת שבת"
                        />
                        <FormControlLabel
                            value="הלל"
                            control={<Radio />}
                            label="הלל"
                        />
                    </RadioGroup>
                </FormControl>

                <Box
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`/files/tunes/מנגינות_ל${value}.pdf`}
                    sx={styles.link}
                >
                    <Button variant="contained" sx={styles.button}>
                        הורד קובץ
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
