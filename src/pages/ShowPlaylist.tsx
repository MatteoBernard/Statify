import {Playlist, PlaylistContent} from "../types";
import {useAppSelector} from "../redux";
import {useParams} from "react-router-dom";
import {GoToDashboard} from "../components";

export const ShowPlaylist = () => {

    const { playlistId } = useParams<{ playlistId: string }>();
    const playlists = useAppSelector(state => state.playlists);
    const {tracks} = useAppSelector(state => state.tracks);

    let playlistTracks: PlaylistContent | undefined;
    const currentPlaylist: Playlist = playlists.playlists.items?.find((playlist: Playlist) => playlist.id === playlistId);

    if (playlistId !== undefined) {
        playlistTracks = tracks[playlistId];
    }

    return (
        <>
            {playlistId !== undefined && currentPlaylist && (
                <div>
                    <h1>{currentPlaylist.name}</h1>
                    <p>{currentPlaylist.description}</p>
                    {playlistTracks?.items && (
                        <div>
                            <h2>Tracks</h2>
                            <ul>
                                {playlistTracks.items.map((item, index) => (
                                    item && item.track && <li key={index}>
                                        <p>{item.track.name} - {item.track.artists.map(artist => artist.name).join(', ')}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
            <GoToDashboard />
        </>
    );
}