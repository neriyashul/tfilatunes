const common = {
    appbar: {
        position: "fixed",
        backgroundColor: "#1c1c1c",
    },
};

export const desktopStyles = {
    ...common,
    logo: {
        margin: "auto 10px",
    },
    gap: {
        flexGrow: 0.85,
    },
};

export const mobileStyles = {
    ...common,
    header: {
        fontSize: "1.3rem",
        mx: 0.5,
    },
    menuIcon: {
        marginRight: 1,
        marginLeft: 0.5,
        "&.MuiIconButton-edgeStart": true,
    },
    listItemText: {
        marginLeft: 2,
        marginRight: 2,
    },
};

export const tabsProps = {
    sx: {
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
    },
    TabIndicatorProps: {
        children: <span className="MuiTabs-indicatorSpan" />,
    },
};

export const tabProps = {
    disableRipple: true,
    sx: {
        fontSize: "1rem",
        mx: "0.1vw",
        color: "rgba(255, 255, 255, 0.7)",
        "&.Mui-selected": {
            color: "#fff",
        },
    },
};

export const drawerProps = {
    variant: "temporary",
    ModalProps: {
        keepMounted: true, // Better open performance on mobile.
    },
    sx: {
        "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
        },
    },
};