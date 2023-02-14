export default function getStyles({ fontSize, type="default" }) {
    return {
        button: {
            minHeight: 40,
            borderRadius: 0.2,
            fontSize: fontSize,
            ml: 3,
            pl: 1,
            pr: 1,
            color: "text.primary",
            ".MuiOutlinedInput-notchedOutline": {
                border: 0,
            },
            "&:hover": {
                backgroundColor: "transparent",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid transparent",
            },
            "& .MuiSelect-select:focus": {
                backgroundColor: "transparent",
            },

            "&.MuiInput-underline:before": {
                borderBottom: type==="underline" ? "2px solid" : "0px solid",
            },

            "&.MuiInput-underline:hover": {
                borderBottom: "0px solid ",
            },

            "&.MuiInput-underline:hover:before": {
                borderBottom: "2px solid lightblue",
            },
            /* focused */
            "&.MuiInput-underline:after": {
                border: "0px solid transparent",
            },
        },
    };
}
