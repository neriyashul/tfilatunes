import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import getStyles from "./style";
import { Box, ListItem } from "@mui/material";

export default function SelectionList({ indexState, labels, ...props }) {
    const styles = getStyles(props);

    const [index, setIndex] = indexState;

    const handleListItemClick = (event, newIndex) => {
        setIndex(newIndex);
    };

    return (
        <Box sx={styles.container} {...props}>
            <List sx={styles.list}>
                {labels?.map((label, labelIndex) => {
                    return (
                        <ListItem key={labelIndex} disablePadding>
                            <ListItemButton
                                sx={styles.listItemButton}
                                selected={index === labelIndex}
                                onClick={(event) =>
                                    handleListItemClick(event, labelIndex)
                                }
                            >
                                <ListItemText
                                    primaryTypographyProps={{
                                        sx: styles.listItemText,
                                    }}
                                    primary={label}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
}
