import {Link} from "react-router-dom";

export interface ReadPlaylistButtonProps {
  playlistId: string;
}

export const ReadPlaylistButton = ({ playlistId }: ReadPlaylistButtonProps) => {
    return (
        <Link to={'/reader/' + playlistId}>
            <button>Read playlist</button>
        </Link>
    );
}