import usePlaylist from "../hooks/playlist";

export default function Playlist(id) {
    const { isLoading, tunes, error } = usePlaylist(id);
    if (error) {
        console.error(error);
    }
    return (
        <div>
            {isLoading? <p>loading...</p> : <p>{tunes}</p>}
        </div>
    );
}
