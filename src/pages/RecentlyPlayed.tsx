import {useAppSelector} from "../redux";
import {RecentlyPlayedContent} from "../types";

export const RecentlyPlayed = () => {

    const recentlyPlayed = useAppSelector(state => state.tracks.recentlyPlayed);

    return (
        <div>
            <h1>Recently Played</h1>

            <div>
                {recentlyPlayed.items.map((item: RecentlyPlayedContent, index: number) => (
                    <div key={index}>
                        <h3>{item.track.name}</h3>
                        <img src={item.track.album.images[0].url} alt={item.track.name}/>
                    </div>
                ))}
            </div>
        </div>
    );
}