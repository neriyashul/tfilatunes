import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import getStyles from "./style";
import { Box } from "@mui/material";

export default function SelectionList({ indexState, labels, ...props }) {
    const styles = getStyles(props);

    const [index, setIndex] = indexState;

    const handleListItemClick = (event, newIndex) => {
        setIndex(newIndex);
    };

    return (
        <Box sx={styles.container} {...props}>
            <List component="nav" sx={styles.list}>
                {labels?.map((label, labelIndex) => {
                    return (
                        <ListItemButton
                        sx={styles.listItemButton}
                            selected={index === labelIndex}
                            key={labelIndex}
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
                    );
                })}
            </List>
        </Box>
    );
}
