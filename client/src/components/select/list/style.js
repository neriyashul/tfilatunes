function getStyles({
    fontSize = { xs: "1.1rem", sm: "1.2rem" },
    paddingY = { xs: 0.6, sm: 0.8 },
    paddingX = { xs: 2, sm: 3 },
}) {
    const styles = {
        container: { width: "100%" },
        list: { mx: 3 },
        listItemButton: {
            paddingY: paddingY,
            paddingX: paddingX,
            marginBottom: 0.5,
            borderRadius: 2,
            "&.Mui-selected": {
                backgroundColor: "#404040",
                //         theme.palette.mode === "light" ? "#EBEBEB" : "#404040",
            },
            "&.Mui-selected:hover": {
                backgroundColor: "#404040",
                //         theme.palette.mode === "light" ? "#EBEBEB" : "#404040",
            },
        },

        listItemText: {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            fontSize: fontSize,
        },
    };
    return styles;
}
export default getStyles;
