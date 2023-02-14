export const desktopStyles = {
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
        zIndex: 0,
        pl: 10,
    },

    iconButton: {
        borderRadius: 2,
    },

    textHeader: {
        fontSize: "2rem",
        ml: 1,
    },

    text: {
        paddingBottom: "50px",
        mx: 15,
        my: 14,
        fontSize: "2rem",
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
        backgroundColor: "#252525",
    },
};

export const mobileStyles = {
    text: {
        paddingBottom: "50vh",
        my: 1,
        mx: 3,
        fontSize: "1.4rem",
    },

    bottomContainer: {
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "100%",
        height: "50vh",
    },

    paragraphBar: {
        // top: -36,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        visibility: "visible",
        left: 0,
        px: 1.5,
        backgroundColor: "#272727",
        mb: -1,
        pb: 1,
        // backgroundColor: theme.palette.mode === "light" ? lightGrey : darkGrey,
    },

    ellipse: {
        width: 30,
        height: 6,
        backgroundColor: "background.default",
        // backgroundColor: theme.palette.mode === "light" ? grey[300] : background,
        borderRadius: 3,
        position: "absolute",
        top: 8,
        left: "calc(50% - 15px)",
    },

    tunesContainer: {
        height: "100%",
        overflow: "auto",
        backgroundColor: "#272727",
        // backgroundColor: theme.palette.mode === "light" ? lightGrey : darkGrey,
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
        zIndex: 0,
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
