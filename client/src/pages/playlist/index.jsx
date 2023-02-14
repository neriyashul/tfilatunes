import React from "react";
// import PlaylistPageMobile from "./PlaylistPageMobile";
import PlaylistPageDesktop from "./PlaylistDesktop";
import useScreenSize from "../../hooks/screensize";
import AppBarMenu from "../../components/appbar";
import PlaylistPageMobile from "./PlaylistMobile";

export default function Playlist() {
    const { isMobile } = useScreenSize();
    if (isMobile) {
        return <PlaylistPageMobile />;
    } else {
        return (
            <>
                <AppBarMenu />
                <PlaylistPageDesktop />
            </>
        );
    }
    // return (
    //     <>
    //         {/* <Player /> */}
    //         {component}
    //     </>
    // );
}
