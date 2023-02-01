import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { styled } from "@mui/system";

export default function ListSelector({
    onClick,
    fontSize,
    paddingY = 0.5,
    paddingX = 2,
    ...props
}) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
        "&.Mui-selected": {
            backgroundColor:
                theme.palette.mode === "light" ? "#EBEBEB" : "#404040",
        },
        "&.Mui-selected:hover": {
            backgroundColor:
                theme.palette.mode === "light" ? "#EBEBEB" : "#404040",
        },

        //     backgroundColor: 'blue',

        //     '&:hover': {
        //         backgroundColor: 'yellow',
        //       }
    }));

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        if (onClick) onClick(index);
    };

    return (
        <Box sx={{ width: "100%" }} {...props}>
            <List
                component="nav"
                aria-label="main mailbox folders"
                sx={{ mx: 4 }}
            >
                <StyledListItemButton
                    sx={{
                        paddingY: paddingY,
                        paddingX: paddingX,
                        borderRadius: 2,
                    }}
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemText
                        primaryTypographyProps={{
                            style: {
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                fontSize: fontSize,
                            },
                        }}
                        primary="דוד מלך - רבי שלמה קרליבך"
                    />
                </StyledListItemButton>
            </List>
        </Box>
    );
}
