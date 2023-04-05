import React from "react";
import {
    Autocomplete,
    Box,
    Button,
    FormControl,
    Rating,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import {
    addTuneProps,
    autoCompleteProps,
    formProps,
    passwordProps,
    removeTuneProps,
    styles,
} from "./style";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import PerformanceField from "./PerformanceField";
import tfilot from "../../db/data/tefilot.json";
import TimeField from "./TimeField";
import { useSearchParams } from "react-router-dom";

const names = { "kabbalat-shabbat": "קבלת שבת", hallel: "הלל" };
const subsOptions = tfilot
    .map((tfila) =>
        tfila.sections
            .map((sec) =>
                sec.subsections.map((sub) => ({
                    id: sub.id,
                    name: sub.name,
                    tfila: names[tfila.key],
                }))
            )
            .flat()
    )
    .flat();

export default function AddTune() {
    const [subsection, setSubsection] = React.useState(null);
    const [performances, setPerformances] = React.useState([]);

    const [searchParams] = useSearchParams();
    const isAdmin = searchParams.get("admin");

    return (
        <Box
            component="form"
            action="/api/add-tune"
            method="post"
            {...formProps}
        >
            <Stack spacing={2}>
                <Typography
                    component="h1"
                    sx={styles.header}
                >
                    הוסף&nbsp;מנגינה&nbsp;חדשה
                </Typography>
                <Typography component="h4">פרטי המנגינה</Typography>
                <TextField
                    name="name"
                    label="שם המנגינה"
                    variant="outlined"
                    required
                />
                <TextField
                    name="performer"
                    label="מבצע"
                    variant="outlined"
                    required
                />
                <TextField
                    name="composer"
                    label="מלחין (אופציונלי)"
                    variant="outlined"
                />
                <Stack>
                    <Typography
                        component="legend"
                        sx={{ fontSize: "1.1rem", color: "text.secondary" }}
                    >
                        התאמה למילים (אופציונלי)
                    </Typography>
                    <Rating name="rate" size="large" />
                </Stack>
            </Stack>
            <Stack spacing={2}>
                <Typography component="h4">סרטון הדגמה</Typography>
                <TextField
                    name="link"
                    label="קישור לסרטון ביוטיוב (השיר המקורי ללא שינוי המילים)"
                    variant="outlined"
                    required
                />
                <TimeField name="startAt" />
            </Stack>
            <Stack spacing={2}>
                <Typography component="h4">פרטי קטע התפילה</Typography>
                <FormControl>
                    <Autocomplete
                        options={subsOptions}
                        value={subsection}
                        onChange={(event, newValue) => {
                            if (!newValue) setPerformances([]);
                            setSubsection(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="בחר קטע"
                                required={!subsection}
                            />
                        )}
                        renderGroup={(params) => (
                            <li key={params.key}>
                                <Box sx={styles.subheader}>{params.group}</Box>
                                <ul style={styles.item}>{params.children}</ul>
                            </li>
                        )}
                        {...autoCompleteProps}
                    />
                    {subsection && (
                        <input
                            type="hidden"
                            name="subsectionId"
                            value={subsection.id}
                        />
                    )}
                </FormControl>

                {performances.map((perf, index) => (
                    <Stack spacing={2} key={index}>
                        <Typography>{index + 1 + ")"}</Typography>

                        <PerformanceField subsectionId={subsection.id} />
                        <Button
                            onClick={() => {
                                setPerformances((prev) =>
                                    prev.filter((x) => x !== perf)
                                );
                            }}
                            startIcon={<DeleteIcon />}
                            {...removeTuneProps}
                        >
                            הסר מנגינה
                        </Button>
                    </Stack>
                ))}

                <Button
                    startIcon={<AddIcon />}
                    onClick={() => {
                        if (subsection) {
                            setPerformances((prev) => {
                                const newElem = prev[prev.length - 1] + 1 || 1;
                                return [...prev, newElem];
                            });
                        } else {
                            alert("אף קטע לא נבחר");
                        }
                    }}
                    {...addTuneProps}
                >
                    הוסף סרטון של הקטע עם המנגינה
                </Button>
            </Stack>
            <Stack spacing={2}>
                {isAdmin && <TextField {...passwordProps} />}

                <Box sx={styles.center}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={styles.submitButton}
                    >
                        שלח
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
}
