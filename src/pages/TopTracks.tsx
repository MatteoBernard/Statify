import {useAppSelector} from "../redux";
import {Track} from "../types";

export const TopTracks = () => {

    const {short_term, medium_term, long_term} = useAppSelector(state => state.tracks.topTracks);

    return (
        <div>
            <h1>Top Tracks</h1>

            <div>
                <h2>Short term</h2>
                {short_term && short_term.items.map((track: Track) => (
                    <div key={track.id}>
                        <h3>{track.name}</h3>
                        <img src={track.album.images[0].url} alt={track.name}/>
                    </div>
                ))}
            </div>
            <div>
                <h2>Medium term</h2>
                {medium_term && medium_term.items.map((track: Track) => (
                    <div key={track.id}>
                        <h3>{track.name}</h3>
                        <img src={track.album.images[0].url} alt={track.name}/>
                    </div>
                ))}
            </div>
            <div>
                <h2>Long term</h2>
                {long_term && long_term.items.map((track: Track) => (
                    <div key={track.id}>
                        <h3>{track.name}</h3>
                        <img src={track.album.images[0].url} alt={track.name}/>
                    </div>
                ))}
            </div>
        </div>
    )
}