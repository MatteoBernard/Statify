import {useAppSelector} from "../redux";
import {SelectPlaylist} from "../components";
import {Playlist} from "../types";

export const Playlists = () => {

    const playlists = useAppSelector(state => state.playlists);

    return (
        <div>
            <h1>Playlists</h1>
            {playlists && playlists.isFetching && <p>Loading...</p>}
            {playlists && playlists.error && <p>Error: {playlists.error}</p>}

            {playlists.playlists.length != 0 && !playlists.isFetching && (
                <div>
                    <h2>Your Playlists</h2>
                    <ul>
                        {playlists.playlists.items.map((playlist: Playlist) => (
                            <li key={playlist.id}>
                                <SelectPlaylist playlistId={playlist.id} playlistName={playlist.name} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}