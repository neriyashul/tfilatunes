import { Box, styled } from "@mui/material";
import React from "react";
import { overlapStyles as styles } from "./style";

export default function Overlap(props) {
    const StyledParent = styled(Box)({
        width: props?.width,
        height: props?.height,
        ...styles.parent,
        ...props.sx,
        ...props.style,
    });

    const children = React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
            const sx = { ...styles.child, ...child.props.sx };
            return React.cloneElement(child, { sx: sx });
        }
    });

    return <StyledParent>{children}</StyledParent>;
}
