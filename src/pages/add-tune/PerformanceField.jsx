import {
    Stack,
    TextField,
} from "@mui/material";
import React, { useRef } from "react";
import TimeField from "./TimeField";

let counter = 0;

export default function PerformanceField({ subsectionId, ...props }) {
    counter += 1;
    const id = useRef(counter);

    function getName(name) {
        return [id.current, name].join("-");
    }

    if (!subsectionId) {
        return (
            null
        );
    }

    return (
        <Stack spacing={2} {...props}>
            <TextField
                name={getName("label")}
                label="שם הביצוע"
                variant="outlined"
                required
            />
            <TextField
                name={getName("link")}
                label="קישור לסרטון ביוטיוב"
                variant="outlined"
                required
            />
            <TimeField name={getName("startAt")} />
        </Stack>
    );
}
