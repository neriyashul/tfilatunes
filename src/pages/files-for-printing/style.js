const styles = {
    form: {
        m: 5,
        width: "min-content",
    },

    header: {
        textAlign: "center",
        fontSize: "2rem",
        mb: 4,
    },

    label: {
        fontSize: "1.5rem",
    },

    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    accordion: {
        backgroundColor: "#121212",
        ml: -2,
    },

    buttonContainer: {
        display: "flex",
        justifyContent: "center",
    },

    button: {
        mt: 5,
        width: 150,
        height: 45,
    },

    collectionRadio: (isOpen) => ({
        zIndex: 10,
        visibility: isOpen ? "hidden" : "visible",
    }),

    backdropContainer: {
        textAlign: "center",
    },
};

export default styles;
