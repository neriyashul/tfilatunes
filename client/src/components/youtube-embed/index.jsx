import { Box, Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import styles, { reactPlayerProps } from "./style";
import ReactPlayer from "react-player";

export default function YoutubeEmbed(initialProps) {
    const [isReady, setIsReady] = React.useState(false);
    const [id, setId] = React.useState(initialProps.id);
    const [startAt, setStartAt] = React.useState(initialProps.startAt || 0);
    const [props, setProps] = React.useState({ ...initialProps });
    const [children, setChildren] = React.useState();

    useEffect(() => {
        const newChildern = React.Children.map(
            initialProps.children,
            (child) => {
                const player = {
                    setId, 
                    setStartAt,
                    setProps,
                    styles,
                };
                return React.cloneElement(child, { player });
            }
        );
        setChildren(newChildern);
    }, [initialProps]);

    if (!id) return children;

    return (
        <Box>
            <Box sx={styles.container} {...props}>
                <Box style={styles.aspectRatio}>
                    {!isReady && (
                        <Skeleton sx={styles.skeleton} variant="rectangular" />
                    )}
                    <ReactPlayer
                        url={`https://www.youtube.com/embed/${id}?t=${startAt}`}
                        onReady={() => setIsReady(true)}
                        {...reactPlayerProps}
                    />
                </Box>
            </Box>
            {children}
        </Box>
    );
}
