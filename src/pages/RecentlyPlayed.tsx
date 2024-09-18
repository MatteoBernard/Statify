import {useAppSelector} from "../redux";
import {Template} from "./Template";
import {ItemDisplayer, SpotifyContainer} from "../components";

export const RecentlyPlayed = () => {

    const recentlyPlayed = useAppSelector(state => state.tracks.recentlyPlayed);

    return (
        <Template title={"Recently played"}>

            <SpotifyContainer>
                <div>
                    {recentlyPlayed.items && <ItemDisplayer items={recentlyPlayed.items}/>}
                </div>
            </SpotifyContainer>

        </Template>
    );
}