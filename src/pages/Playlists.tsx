import {useAppSelector} from "../redux";
import {PlaylistDisplayer, SpotifyContainer} from "../components";
import {Playlist} from "../types";
import {Template} from "./Template";

export const Playlists = () => {

    const {playlists} = useAppSelector(state => state.playlists);

    return (
        <Template title={"Your playlists"}>
            <SpotifyContainer>
                {playlists.length !== 0 && !playlists.isFetching && (
                    <div>
                        <ul>
                            {playlists.items.map((playlist: Playlist) => (
                                <li key={playlist.id}>
                                    <PlaylistDisplayer playlist={playlist} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </SpotifyContainer>
        </Template>
    )
}