import { Box } from "@mui/system";
import React from "react";
import A11yWrapper from "@takingitglobal/a11ize";

export default function AccessibilityMenu({ children }) {
    return (
        <Box sx={{ color: "black" }}>
            <Box component={A11yWrapper}>
                <Box sx={{ color: "text.primary" }}>{children}</Box>
            </Box>
        </Box>
    );
}
