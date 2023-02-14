import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import getStyles from "./style";
import { Box } from "@mui/material";

export default function SelectionList({ onClick, ...props }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const styles = getStyles(props);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        if (onClick) onClick(index);
    };

    return (
        <Box sx={styles.container} {...props}>
            <List component="nav" sx={styles.list}>
                <ListItemButton
                    sx={styles.listItemButton}
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemText
                        primaryTypographyProps={{ sx: styles.listItemText }}
                        primary="דוד מלך - רבי שלמה קרליבך"
                    />
                </ListItemButton>
                <ListItemButton
                    sx={styles.listItemButton}
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemText
                        primaryTypographyProps={{ sx: styles.listItemText }}
                        primary='הרב שמואל אליהו סוכות'
                    />
                </ListItemButton>
                <ListItemButton
                    sx={styles.listItemButton}
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemText
                        primaryTypographyProps={{ sx: styles.listItemText }}
                        primary="אחיה פרינס"
                    />
                </ListItemButton>
            </List>
        </Box>
    );
}
