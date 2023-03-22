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
            fontSize: "1rem",
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

        //button: {
        //     minHeight: 40,
        //     borderRadius: 0.2,
        //     fontSize: fontSize,
        //     ml: 3,
        //     pl: 1,
        //     pr: 1,
        //     color: "text.primary",
        //     ".MuiOutlinedInput-notchedOutline": {
        //         border: 0,
        //     },
        //     "&:hover": {
        //         backgroundColor: "transparent",
        //     },
        //     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        //         border: "1px solid transparent",
        //     },
        //     "& .MuiSelect-select:focus": {
        //         backgroundColor: "transparent",
        //     },

        //     "&.MuiInput-underline:before": {
        //         borderBottom: type === "underline" ? "2px solid" : "0px solid",
        //     },

        //     "&.MuiInput-underline:hover": {
        //         borderBottom: "0px solid ",
        //     },

        //     "&.MuiInput-underline:hover:before": {
        //         borderBottom: "2px solid lightblue",
        //     },
        //     /* focused */
        //     "&.MuiInput-underline:after": {
        //         border: "0px solid transparent",
        //     },
        // },
    };
}
