import {Link} from "react-router-dom";

export interface SelectPlaylistProps {
    playlistId: string;
    playlistName: string;
}

export const SelectPlaylist = ({ playlistId, playlistName }: SelectPlaylistProps) => {
    return (
        <Link to={'/showPlaylist/' + playlistId}>
            <button>{playlistName}</button>
        </Link>
    );
}