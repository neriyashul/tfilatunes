const common = {
    sectionsArea: {
        width: "100vw",
        height: "100vh",
        position: "fixed",
        zIndex: -1,
    },
};

export const desktopStyles = {
    ...common,

    main: {
        display: "flex",
    },

    textContainer: {
        flexGrow: 1,
    },

    textAppBar: {
        backgroundColor: "#000000",
        position: "fixed",
        top: "inherit",
        zIndex: 1,
        pl: 10,
    },

    iconButton: {
        borderRadius: 2,
    },

    textHeader: {
        color: "white",
        fontSize: "1.8rem",
        ml: 0.5,
        py: 0,
        cursor: "pointer",
        borderRadius: 2,
        "&:hover": {
            backgroundColor: "#292929",
        },
    },

    sectionsMenu: {
        px: 2,
        fontSize: "1.2rem",
    },

    sections: {
        paddingBottom: "50px",
        mb: "50vh",
        cursor: "pointer",
    },

    section: {
        fontSize: "2rem",
        pt: 2,
        pb: 3,
        mx: 15,
    },

    tunesDrawer: {},

    listAppBar: {
        top: "60px",
        backgroundColor: "#131313",
        position: "sticky",
        zIndex: 3,
    },

    scrollbar: {
        overflowY: "auto",
        "::-webkit-scrollbar": {
            width: "0.8em",
        },
        "::-webkit-scrollbar-button": {
            display: "none",
        },
        "::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            backgroundColor: "#454545",
            marginBottom: "0px",
        },
    },

    listContainer: {
        overflow: "auto",
    },

    rootMarginTop: -45,
};

export const mobileStyles = {
    ...common,
    rootMarginTop: -25,

    appbar: {
        position: "fixed",
        backgroundColor: "#1c1c1c",
    },

    moreButton: {
        marginRight: 1,
        "&.MuiIconButton-edgeStart": true,
    },

    gap: { flexGrow: 1 },

    backIcon: {
        fontSize: "1.1rem",
    },

    sectionsMenu: {
        mx: 0.5,
        my: 0.5,
        overflow: "auto",
        "& .MuiPaper-root": {
            overflow: "auto",
            p: 0.2,
            pt: -1,
            "& .MuiMenuItem-root": {
                fontSize: "1.1rem",
                py: 1.4,
            },
        },
    },

    sections: {
        mb: "34vh",
        paddingBottom: "50vh",
    },

    bottomContainer: {
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "100%",
        height: "50vh",
        overflow: "auto",
        "::-webkit-scrollbar": {
            display: "none",
        },
        scrollbarWidth: "none",
        backgroundColor: "#222222",
    },

    subsectionBar: {
        position: "sticky",
        top: "0",
        px: 1.5,
        pb: 1,
        zIndex: 3,
        backgroundColor: "#222222",
    },

    ellipse: {
        width: 30,
        height: 6,
        backgroundColor: "background.default",
        borderRadius: 3,
        position: "relative",
        top: 8,
        mb: 0.5,
        left: "calc(50% - 15px)",
    },

    tunesContainer: {
        zIndex: 15,
    },
};

export const subsectionProps = {
    fontSize: "1.2rem",
};

export const sectionsStyles = {
    section: {
        pt: { xs: "10px", md: 2 },
        pb: { xs: "10px", md: 3 },
        mx: { xs: 3, md: 15 },
    },

    sectionNote: {
        lineHeight: 2,
    },

    sectionText: {
        fontSize: { xs: "1.4rem", md: "1.5rem" },
    },
};

export const tuneListStyles = {
    playableButton: {
        paddingRight: 25,
        paddingLeft: 25,
        textAlign: "center",
    },

    listItemText: {
        fontSize: "medium",
    },
};

const width = 100 / 3 + "%";
export const sideDrawerProps = {
    variant: "permanent",
    anchor: "right",
    sx: {
        zIndex: 1,
        width: width,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
            borderWidth: 0,
            width: width,
            boxSizing: "border-box",
            backgroundColor: "#272727",
        },
    },
};
