import {Playlist, PlaylistContent} from "../types";
import {useAppSelector} from "../redux";
import {useParams} from "react-router-dom";
import {SpotifyContainer, TrackDisplayer} from "../components";
import {Template} from "./Template";
import {clsx} from "clsx";

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
        <Template title={currentPlaylist.name}>

            <SpotifyContainer>
                <div className={clsx(
                    "flex",
                    "justify-between",
                    "items-center",
                    "p-2",
                )}>
                    <img src={currentPlaylist.images[0].url} className={clsx(
                        "object-contain",
                        "h-28",
                        "w-28",
                        "md:h-36",
                        "md:w-36",
                        "md:m-3",
                        "lg:h-44",
                        "lg:w-44",
                        "lg:m-4",
                    )} alt={currentPlaylist.name}/>
                    <div className={clsx(
                        "flex",
                        "flex-col",
                        "items-center",
                        "text-center",
                        "justify-center",
                        "m-auto",
                        "w-1/2",
                    )}>
                        <h1 className={clsx(
                            "font-bold",
                            "text-2xl",
                            "md:text-3xl",
                            "lg:text-4xl",
                            "m-3",
                        )}>{currentPlaylist.name}</h1>
                        <h1 className={clsx(
                            "font-bold",
                            "text-sm",
                            "md:text-xl",
                            "lg:text-2xl",
                            "w-11/12",
                            "truncate"
                        )}>{currentPlaylist.description}</h1>
                    </div>
                </div>
            </SpotifyContainer>

            <SpotifyContainer>
                {playlistId !== undefined && currentPlaylist && (
                    <div>
                        {playlistTracks && playlistTracks?.items && (
                            <div>
                                {playlistTracks.items.map((item, index) => (
                                    playlistTracks ? <TrackDisplayer track={item.track} index={index} /> : null
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </SpotifyContainer>
        </Template>
    );
}