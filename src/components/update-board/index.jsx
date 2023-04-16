import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControlLabel,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import { useScreenSize } from "../../hooks/screen";
import styles from "./style";
import messages from "./messages";

export default function UpdateBoard() {
    const [open, setOpen] = useState(true);
    const [checked, setChecked] = useState(false);
    const isMobile = useScreenSize().isMobile;

    const notPostedMsgs = messages.filter(
        (message) => !localStorage.getItem(message.id)
    );

    function handleClose() {
        if (checked) {
            for (let msg of notPostedMsgs) {
                localStorage.setItem(msg.id, "posted");
            }
        }
        setOpen(false);
    }

    if (notPostedMsgs.length === 0) return null;

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle sx={styles.header} id="alert-dialog-title">
                מה חדש??? 🎉🎉🎉
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <List sx={styles.list}>
                        {notPostedMsgs.map((message, index) => (
                            <ListItem key={index} sx={styles.listItem}>
                                <ListItemText
                                    primaryTypographyProps={{
                                        sx: styles.message,
                                    }}
                                >
                                    {message.getMessage(isMobile)}
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={() => setChecked((prev) => !prev)}
                            inputProps={{ "aria-label": "Don't show again" }}
                        />
                    }
                    label="אל תציג שוב"
                    sx={styles.checkbox}
                ></FormControlLabel>
                <div style={styles.gap} />
                <Button
                    variant="contained"
                    sx={styles.button}
                    onClick={() => handleClose()}
                >
                    סגור
                </Button>
            </DialogActions>
        </Dialog>
    );
}
