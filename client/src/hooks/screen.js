import { useMediaQuery, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { onCreepScroll } from "../utils/scroll";

export function useScreenSize() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return {
        isMobile,
        isDesktop: !isMobile,
    };
}

export function useFirstVisible(refs, root = null, rootMarginTop = 0) {
    const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);

    const getContainerTop = () =>
        root?.current?.getBoundingClientRect().top ?? 0;

    function rediscoverFirstVisible() {
        for (let i = 0; i < refs.current.length; i++) {
            const element = refs.current[i];
            const bounding = element.getBoundingClientRect();
            const top = getContainerTop() - rootMarginTop;
            if (bounding.bottom > top) {
                setFirstVisibleIndex(i);
                break;
            }
        }
    }

    useEffect(() => {
        const listener = onCreepScroll(rediscoverFirstVisible);
        return () => listener.clean();
    }, []);

    function setFirstVisible(newIndex) {
        if (newIndex >= 0 && newIndex < refs.current.length) {
            const el = refs.current[newIndex];
            const top = el.getBoundingClientRect().top;
            const y = top + window.scrollY - getContainerTop();
            // const y = el.getBoundingClientRect().top + window.scrollY - 150;
            window.scrollTo({ top: y, behavior: "smooth" });
            setFirstVisibleIndex(newIndex);
        }
    }

    return [firstVisibleIndex, setFirstVisible];
}
