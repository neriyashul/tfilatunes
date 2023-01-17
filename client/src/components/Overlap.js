import { Box } from "@mui/material";
import React from "react";

const childSx = {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

export default function Overlap(props) {
    const boxSx = {
        position: "relative",
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: props?.width,
        height: props?.height,
        ...props.sx
    };

    const clones = React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
            const sx = { ...childSx, ...child.props.sx };
            const a = React.cloneElement(child, { sx: sx });
            var f = 3;
            f+=3;
            return a;
        }
    });

    return (
        <Box component="div" sx={boxSx} style={props.style}>
            {clones}
        </Box>
    );
}
