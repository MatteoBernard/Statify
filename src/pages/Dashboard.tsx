import {Template} from "./Template";
import {PreviewContainer, SpotifyContainer, UserProfileData} from "../components";
import {useAppSelector} from "../redux";
import {ThreeDots} from "react-loader-spinner";

export const Dashboard = () => {

    const topArtists = useAppSelector(state => state.artists.topArtists.short_term);
    const topTracks = useAppSelector(state => state.tracks.topTracks.short_term);
    const recentlyPlayed = useAppSelector(state => state.tracks.recentlyPlayed);
    const {playlists} = useAppSelector(state => state.playlists);

    return (
        <Template title={"Dashboard"}>

            {!topArtists || !topTracks || !recentlyPlayed || !playlists ? (
                <div className={"flex justify-center items-center h-screen"}>
                    <ThreeDots
                        color="#1DB954"
                        height={80}
                        width={80}
                    />
                </div>
            ) :  (
                <div>
                    <UserProfileData />

                    <SpotifyContainer>
                        <div>
                            <PreviewContainer title={"Your top artists"} link={"/topArtists"} items={topArtists.items} />
                            <PreviewContainer title={"Your top tracks"} link={"/topTracks"} items={topTracks.items} />
                            <PreviewContainer title={"Your playlists"} link={"/playlists"} items={playlists.items} />
                            <PreviewContainer title={"Your recently played tracks"} link={"/recentlyPlayed"} items={recentlyPlayed.items} />
                        </div>
                    </SpotifyContainer>
                </div>
            )

            }
        </Template>
    )
}