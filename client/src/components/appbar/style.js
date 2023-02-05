import styled from "@emotion/styled";
import { AppBar, Box, IconButton, Tab, Tabs, Typography } from "@mui/material";

export const StyledAppBar = styled(AppBar)({
    position: "fixed",
    backgroundColor: "#1c1c1c"
});
StyledAppBar.defaultProps = { elevation: 4 };

export const StyledHeader = (props) => (
    <Typography sx={{ fontSize: "1.3rem", mx: 0.5 }}>
        {props.children}
    </Typography>
);

export const StyledIconButton = styled(IconButton)({
    marginRight: 1,
    marginLeft: 0.5,
});
export const StyledMargin = styled(Box)({ flexGrow: 0.85 });

export const StyledTabs = (props) => (
    <Tabs
        sx={{
            "& .MuiTabs-indicator": {
                display: "flex",
                justifyContent: "center",
                backgroundColor: "transparent",
            },
            "& .MuiTabs-indicatorSpan": {
                maxWidth: 50,
                width: "100%",
                backgroundColor: "#40a9ff",
            },
        }}
        TabIndicatorProps={{
            children: <span className="MuiTabs-indicatorSpan" />,
        }}
        {...props}
    >
        {props.children}
    </Tabs>
);

export const StyledTab = (props) => (
    <Tab
        disableRipple
        sx={{
            fontSize: "1rem",
            mx: "0.1vw",
            color: "rgba(255, 255, 255, 0.7)",
            "&.Mui-selected": {
                color: "#fff",
            },
        }}
        {...props}
    >
        {props.children}
    </Tab>
);
