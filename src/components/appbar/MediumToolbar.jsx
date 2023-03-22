import { Toolbar } from "@mui/material";
import React from "react";

export default function MediumToolbar({ style, children, ...props }) {
    return (
        <Toolbar style={{ ...style, minHeight: 60, height: 60 }} {...props}>
            {children}
        </Toolbar>
    );
}
