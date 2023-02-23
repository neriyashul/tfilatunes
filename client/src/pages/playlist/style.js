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
        // backgroundColor: "#101010",
        // backgroundColor: "#252525",
        position: "fixed",
        top: "inherit",
        zIndex: 1,
        pl: 10,
    },

    iconButton: {
        borderRadius: 2,
    },

    textHeader: {
        fontSize: "2rem",
        ml: 1,
        cursor: "pointer",
    },

    sectionsMenu: {
        px: 2,
        fontSize: "1.2rem",
    },

    sections: {
        paddingBottom: "50px",
        mb: "50vh",
    },

    section: {
        fontSize: "2rem",
        pt: 2,
        pb: 3,
        mx: 15,
    },

    tunesDrawer: {},

    listAppBar: {
        top: "64px",
        // backgroundColor: "#282828",
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
            // backgroundColor: (theme) => theme.palette.mode === "dark" ? "#454545" : "#c1c1c1",
            // backgroundColor: "rgba(0,0,0,.1",
            // outline: "1px solid slategrey",
        },
        // "::-webkit-scrollbar-thumb:hover": {},
        // "::-webkit-scrollbar-track": {
        // backgroundColor: "#00aa00",
        // "-webkit-box-shadow": "inset 0 0 10px 10px green",
        // },
        // "::-webkit-scrollbar-track-piece": {},
        // "::-webkit-scrollbar-corner": {},
        // "::-webkit-resizer": {},
    },

    listContainer: {
        overflow: "auto",
        // my: 0.5
    },

    rootMarginTop: -45,
};

export const mobileStyles = {
    ...common,
    rootMarginTop: -25, 

    appbar: {
        appbar: {
            position: "fixed",
            backgroundColor: "#1c1c1c",
        },
    },

    moreButton: {
        marginRight: 1,
        // marginLeft: 0.5,
        "&.MuiIconButton-edgeStart": true,
    },

    sectionName: {
        fontSize: "1.3rem",
        mx: 0.5,
    },

    gap: { flexGrow: 1 },

    backButton: {
        // marginX: 1,
        "&.MuiIconButton-edgeStart": true,
    },

    sectionsMenu: {
        fontSize: "1.3rem",
        mx: 0.5,
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
        backgroundColor: "#272727",
    },

    subsectionBar: {
        position: "sticky",
        top: "0",
        // top: -36,
        // borderTopLeftRadius: 8,
        // borderTopRightRadius: 8,
        // visibility: "visible",
        // left: 0,
        px: 1.5,
        mb: -1,
        pb: 1,
        zIndex: 3,
        backgroundColor: "#272727",
        // backgroundColor: theme.palette.mode === "light" ? lightGrey : darkGrey,
    },

    ellipse: {
        width: 30,
        height: 6,
        backgroundColor: "background.default",
        // backgroundColor: theme.palette.mode === "light" ? grey[300] : background,
        borderRadius: 3,
        position: "relative",
        // position: "absolute",
        // top: 1,
        top: 8,
        mb: 0.5,
        left: "calc(50% - 15px)",
    },

    tunesContainer: {
        // height: "100%",
        height: "100vh",
        // overflow: "auto",
        // backgroundColor: "#272727",
        zIndex: 15,
        // backgroundColor: theme.palette.mode === "light" ? lightGrey : darkGrey,
    },
};

export const subsectionProps = {
    fontSize: "1.2rem",
};

export const sectionsStyles = {

    section: {
        pt: {xs: "10px", md: 2},
        pb: {xs: "10px", md: 3},
        mx: {xs: 3, md: 15},
        fontSize: {xs: "1.4rem", md: "2rem" }

    }
}

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
