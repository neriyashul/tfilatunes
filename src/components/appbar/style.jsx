export const desktopStyles = {
    appbar: {
        position: "fixed",
        backgroundColor: "#1c1c1c",
    },
    logo: {
        margin: "auto 10px",
    },
    gap: {
        flexGrow: 0.85,
    },
};

export const mobileStyles = {
    appbar: {
        position: "fixed",
        backgroundColor: "#121212",
        backgroundImage: "none",
    },
    logo: { marginX: 1.2 },
    gap: { flexGrow: 1 },
    header: {
        fontSize: "1.4rem",
        mx: 0.5,
    },
    menuIcon: {
        "&.MuiIconButton-edgeStart": true,
    },
    listItemButton: {
        my: 0.5,
        mx: 0.5,
    },
    listItemText: {
        marginLeft: 2,
        marginRight: 2,
    },
};

export const tabsProps = {
    "aria-label": "navigation bar",
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
        fontSize: "0.9rem",
        color: "rgba(255, 255, 255, 0.7)",
        "&.Mui-selected": {
            color: "#fff",
        },
        "&:hover": {
            color: "rgba(255, 255, 255, 0.95)",
        },
        "&.Mui-focusVisible": {
            backgroundColor: "rgba(255, 255, 255, 0.4)",
        },
    },
};

export const drawerProps = {
    variant: "temporary",
    anchor: "right",
    elevation: 0,
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

export const backAppBarStyles = {
    appbar: {
        position: "fixed",
        backgroundColor: "#121212",
        backgroundImage: "none",
    },

    moreButton: {
        marginRight: 1,
        "&.MuiIconButton-edgeStart": true,
    },

    header: {
        fontSize: "1.4rem",
        mx: 0.5,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    },

    gap: { flexGrow: 1 },

    backIcon: {
        fontSize: "1.1rem",
        mx: 0.5,
    },
};
