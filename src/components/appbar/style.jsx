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
        fontSize: "1rem",
        mx: "0.1vw",
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
        // backgroundColor: "#1c1c1c",
    },

    moreButton: {
        marginRight: 1,
        "&.MuiIconButton-edgeStart": true,
    },

    header: {
        fontSize: "1.3rem",
        mx: 0.5,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    },

    gap: { flexGrow: 1 },

    backIcon: {
        fontSize: "17px",
    },
};
