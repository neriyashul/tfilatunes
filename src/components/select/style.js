export default function getStyles({ type = "default" }) {
    return {
        buttonContainer: {
            ml: 2,
            pl: 1,
            pr: 1,
            textAlign: "center",
            width: "auto",
            display: "inline-block",
        },

        button: {
            color: "text.primary",
            borderRadius: 1,
            fontSize: { xs: "1rem", md: "1.1rem" },
            pb: 1,
            "&:hover": {
                backgroundColor: "inherit",
            },
        },

        buttonTextProps: {
            component: "h4",
            variant: "button",
            sx: { fontSize: "inherit" },
        },

        underline: {
            display: "block",
            mx: 0.4,
            mt: -0.6,
            height: "2px",
            backgroundColor:
                type === "underline" ? "text.primary" : "text.secondary",
        },
        getUnderlineVisibility: (hovering) =>
            hovering || type === "underline" ? "visible" : "hidden",
    };
}
