import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Overlap from "./Overlap";
import { playableStyles as styles } from "./style";

export default function Playable({
    playingStatus,
    isHovering,
    isOverride = true,
    ...props
}) {
    let icon;
    const iconSx = { zIndex: 2, color: isOverride ? "text.primary" : "white" };

    if (playingStatus === "playing") {
        icon = <PauseIcon variant="contained" sx={iconSx} />;
    } else if (isHovering || playingStatus === "stopped") {
        icon = <PlayArrowIcon variant="contained" sx={iconSx} />;
    }

    const children = React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
            if (!isOverride) {
                if (isHovering || playingStatus != null) {
                    styles.child.filter = "brightness(82%)";
                } else {
                    styles.child.filter = "brightness(100%)";
                }
            }
            const style = { ...styles.child, ...child.props.style };
            return React.cloneElement(child, { style: style });
        }
    });

    return (
        <div>
            <Overlap {...props}>
                {icon && isOverride ? null : children}
                {icon}
            </Overlap>
        </div>
    );
}
