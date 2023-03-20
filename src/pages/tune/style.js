export const desktopStyles = {
    player: {
        position: "absolute",
        width: "50%",
        paddingTop: "25px",
        right: "8.5%",
        // right: isRtl ? "8.5%" : 100 / 3 + 8.5 + "%",
        zIndex: 2,
    },
    playerLocation: {
        width: "75%",
        marginTop: "25px",
        marginX: `${8.5 * 1.5}%`,
    },
    header: {
        fontSize: "2rem",
        pt: "25px",
        ml: "8vw",
    },
    text: {
        zIndex: 1,
        fontSize: "1.7rem",
        pt: 2,
        pb: 5,
        ml: "9vw",
        mr: "8vw",
    },

    sideContainer: {
        position: "fixed",
        paddingTop: 3.3,
        backgroundColor: "#272727",
        // backgroundColor: theme.palette.mode === "dark" ? "#252525" : "#f5f5f5",
        color: "text.secondary",
        maxWidth: "inherit",
        width: "100vw",
        height: "100vh",
    },
    ratingHeader: {
        ml: 5.5,
        fontSize: "1.7rem",
    },
    divider: { margin: 3 },
    performanceHeader: {
        ml: 5.5,
        fontSize: "1.7rem",
    },
};

export const mobileStyles = {
    moreButton: {
        "&.MuiIconButton-edgeStart": true,
    },

    header: {
        fontSize: "1.2rem",
        mx: 0.5,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    },

    gap: { flexGrow: 1 },

    backIcon: {
        fontSize: "17px",
    },

    player: {
        position: "absolute",
        width: "100%",
        zIndex: 2,
    },
    tuneName: {
        fontSize: "1.4rem",
        mx: 3,
        mt: 1,
    },
    divider: { margin: 2 },
    ratingHeader: {
        mt: 1,
        ml: 3,
        fontSize: "1.5rem",
    },
    performanceHeader: {
        ml: 3,
        fontSize: "1.4rem",
    },
    textHeader: {
        ml: 3,
        mb: 2,
        fontSize: "1.5rem",
    },
    text: {
        mx: 3,
        pb: 3,
        fontSize: "1.4rem",
    },
};

export const ratingProps = {
    desktop: {
        labelSize: "1.4rem",
        iconsSize: "36px",
        sx: { ml: 5.5 },
    },
    mobile: {
        labelSize: "1.2rem",
        iconsSize: "29px",
        sx: { ml: 4 },
    },
};
