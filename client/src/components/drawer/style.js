import { Drawer, ListItemText } from "@mui/material";
import { styled } from "@mui/system";

export const StyledDrawer = ({ width, ...props }) => (
    <Drawer
        variant="temporary"
        ModalProps={{
            keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
            "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: width,
            },
        }}
        {...props}
    >
        {props.children}
    </Drawer>
);

export const StyledListItemText = styled(ListItemText)({
    marginLeft: 2
})
