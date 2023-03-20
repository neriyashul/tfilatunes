const styles = {
    container: {
        position: "relative",
        margin: "auto",
    },

    skeleton: {
        backgroundColor: "#272727",
        // backgroundColor: theme.palette.mode === "dark" ? "black" : "#EBEBEB",
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 2,
        width: "100%",
        height: "100%",
    },

    aspectRatio: {
        paddingTop: "56.25%", // Percentage ratio for 16:9
        position: "relative",
    },
};
export default styles;

export const reactPlayerProps = {
    width: "100%",
    height: "100%",
    playing: true,
    style: {
        position: "absolute",
        top: "0",
        right: "0",
    },
    config: {
        youtube: {
            playerVars: {
                controls: 1,
                color: "white",
                showinfo: 0,
                rel: 0,
                modestbranding: 1,
            },
        },
    },
};
