import { Box, styled } from "@mui/material";
import React from "react";

const parentNewSx = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

const childNewSx = {
    position: "absolute",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center"
};


export default function Overlap(props) {
    const StyledParent = styled(Box)({
        width: props?.width,
        height: props?.height,
        ...parentNewSx,
        ...props.sx,
        ...props.style
    });

    const children = React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
            const sx = { ...childNewSx, ...child.props.sx };
            return React.cloneElement(child, { sx: sx });
        }
    });

    return (
        <StyledParent>
            {children}
        </StyledParent>
    );
}
