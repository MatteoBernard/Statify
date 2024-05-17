import {useAppSelector} from "../redux";
import {Artist} from "../types";

export const TopArtists = () => {

    const {short_term, medium_term, long_term} = useAppSelector(state => state.artists.topArtists);

    return (
        <div>
            <h1>Top Artists</h1>

            <div>
                <h2>Short term</h2>
                {short_term && short_term.items.map((artist: Artist) => (
                    <div key={artist.id}>
                        <h3>{artist.name}</h3>
                        <img src={artist.images[0].url} alt={artist.name}/>
                    </div>
                ))}
            </div>
            <div>
                <h2>Medium term</h2>
                {medium_term && medium_term.items.map((artist: Artist) => (
                    <div key={artist.id}>
                        <h3>{artist.name}</h3>
                        <img src={artist.images[0].url} alt={artist.name}/>
                    </div>
                ))}
            </div>
            <div>
                <h2>Long term</h2>
                {long_term && long_term.items.map((artist: Artist) => (
                    <div key={artist.id}>
                        <h3>{artist.name}</h3>
                        <img src={artist.images[0].url} alt={artist.name}/>
                    </div>
                ))}
            </div>
        </div>
    )
}