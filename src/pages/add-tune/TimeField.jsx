import {
    Checkbox,
    FormControlLabel,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { numberFieldProps, startCheckBoxProps, styles } from "./style";

export default function TimeField({ name = "time" }) {
    const [checked, setChecked] = useState(false);
    const [seconds, setSeconds] = useState("00");
    const [minutes, setMinutes] = useState("0");

    return (
        <Stack spacing={2} direction="row">
            <FormControlLabel
                control={
                    <Checkbox
                        onChange={(event) => setChecked(event.target.checked)}
                        {...startCheckBoxProps}
                    />
                }
                label="התחלה בשעה"
            />

            <Stack direction="row" spacing={0.5} sx={styles.center}>
                <TextField
                    disabled={!checked}
                    label="שניות"
                    value={seconds}
                    onChange={(e) => setSeconds(e.target.value)}
                    variant="outlined"
                    {...numberFieldProps}
                />
                <Typography>:</Typography>
                <TextField
                    disabled={!checked}
                    label="דקות"
                    value={minutes}
                    onChange={(e) => setMinutes(e.target.value)}
                    variant="outlined"
                    {...numberFieldProps}
                />
                {checked && (
                    <input
                        type="hidden"
                        name={name}
                        value={Number(minutes) * 60 + Number(seconds)}
                    />
                )}
            </Stack>
        </Stack>
    );
}
