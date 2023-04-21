import React, { useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Backdrop,
    Box,
    Button,
    CircularProgress,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./style";
import tfilot from "../../db/data/tfilot.json";

const messages = [
    "מייצר קובץ עם כל השירים...",
    "ממיר את הקובץ ל-html...",
    "מסיים...",
];

export default function FilesForPrinting() {
    const [selected, setSelected] = React.useState("קבלת_שבת");
    const [msgIndex, setMsgIndex] = React.useState(0);
    const [currentCollection, setCurrentCollection] = React.useState();
    const [isProgressOpen, setIsProgressOpen] = React.useState(false);

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    useEffect(() => {
        let intervId;
        let currentIndex = msgIndex;

        const stopInterval = () => {
            if (intervId) clearInterval(intervId);
            intervId = null;
        };

        if (!intervId && isProgressOpen) {
            intervId = setInterval(() => {
                if (currentIndex < messages.length - 1) {
                    setMsgIndex((prev) => prev + 1);
                    currentIndex++;
                } else {
                    stopInterval();
                }
            }, 2750);
        }

        return () => stopInterval();
    }, [isProgressOpen]);

    const elements = [];
    const collections = {};

    for (let tfila of tfilot) {
        if (tfila.collection) {
            let collection = collections[tfila.collection] || [];
            collection.push(tfila);
            collections[tfila.collection] = collection;
        } else {
            elements.push(tfila);
        }
    }

    return (
        <Box sx={styles.center}>
            <Box sx={styles.form}>
                <Typography component="h1" sx={styles.header}>
                    קבצי&nbsp;מנגינות&nbsp;להדפסה
                </Typography>
                <form>
                    <FormControl>
                        <FormLabel id="radio-buttons-lablel" sx={styles.label}>
                            בחר תפילה
                        </FormLabel>

                        <RadioGroup
                            aria-labelledby="radio-buttons-lablel"
                            name="controlled-radio-buttons-group"
                            value={selected}
                            onChange={handleChange}
                        >
                            {elements.map((tfila, index) => (
                                <FormControlLabel
                                    required
                                    key={index}
                                    value={tfila.name.split(" ").join("_")}
                                    control={<Radio />}
                                    label={tfila.name}
                                />
                            ))}
                            {Object.entries(collections).map(
                                ([collectName, tfilot]) => {
                                    const isOpen =
                                        currentCollection === collectName;
                                    return (
                                        <FormControlLabel
                                            key={collectName}
                                            control={
                                                <Radio
                                                    onChange={() =>
                                                        setCurrentCollection(
                                                            (prev) =>
                                                                prev !==
                                                                collectName
                                                                    ? collectName
                                                                    : null
                                                        )
                                                    }
                                                    sx={styles.collectionRadio(
                                                        isOpen
                                                    )}
                                                />
                                            }
                                            label={
                                                <Accordion
                                                    expanded={isOpen}
                                                    elevation={0}
                                                    sx={styles.accordion}
                                                >
                                                    <AccordionSummary
                                                        expandIcon={
                                                            <ExpandMoreIcon />
                                                        }
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                    >
                                                        <Typography>
                                                            {collectName}
                                                        </Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        {tfilot.map(
                                                            (tfila, index) => (
                                                                <FormControlLabel
                                                                    key={index}
                                                                    value={tfila.name
                                                                        .split(
                                                                            " "
                                                                        )
                                                                        .join(
                                                                            "_"
                                                                        )}
                                                                    control={
                                                                        <Radio />
                                                                    }
                                                                    label={
                                                                        tfila.name
                                                                    }
                                                                />
                                                            )
                                                        )}
                                                    </AccordionDetails>
                                                </Accordion>
                                            }
                                        ></FormControlLabel>
                                    );
                                }
                            )}
                        </RadioGroup>
                    </FormControl>

                    <Box sx={styles.buttonContainer}>
                        <Button
                            variant="contained"
                            sx={styles.button}
                            onClick={() => {
                                if (selected) {
                                    setMsgIndex(0);
                                    setIsProgressOpen(true);
                                    window.location.href = `/files/tunes/מנגינות_ל${selected}.pdf`;
                                } else {
                                    alert("לא נבחר אף קובץ");
                                }
                            }}
                        >
                            הורד קובץ
                        </Button>
                    </Box>
                </form>
            </Box>
            <Backdrop
                open={isProgressOpen}
                onClick={() => setIsProgressOpen(false)}
            >
                <Box sx={styles.backdropContainer}>
                    <CircularProgress color="inherit" />
                    <Typography component="h2" variant="h5">
                        {messages[msgIndex]}
                    </Typography>
                </Box>
            </Backdrop>
        </Box>
    );
}
