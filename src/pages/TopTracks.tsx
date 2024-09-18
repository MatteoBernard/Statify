import {useAppSelector} from "../redux";
import {Template} from "./Template";
import {SpotifyContainer} from "../components";
import {useState} from "react";
import {clsx} from "clsx";
import {ItemDisplayer} from "../components";

export const TopTracks = () => {

    const {short_term, medium_term, long_term} = useAppSelector(state => state.tracks.topTracks);
    const [term, setTerm] = useState('short_term');

    let items;
    switch (term) {
        case 'short_term':
            items = short_term?.items;
            break;
        case 'medium_term':
            items = medium_term?.items;
            break;
        case 'long_term':
            items = long_term?.items;
            break;
        default:
            items = short_term?.items;
    }

    return (
        <Template title={"Top Tracks"}>


            <SpotifyContainer>
                <div className={clsx(
                    "flex",
                    "justify-center",
                    "space-x-3",
                    "mb-5"

                )}>
                    <button onClick={() => setTerm('short_term')} className={clsx(
                        "px-3",
                        "py-1",
                        term === 'short_term' ? "border-b-2"  : "",
                    )}>4 weeks</button>
                    <button onClick={() => setTerm('medium_term')} className={clsx(
                        "px-3",
                        "py-1",
                        term === 'medium_term' ? "border-b-2" : ""
                    )}>6 months</button>
                    <button onClick={() => setTerm('long_term')} className={clsx(
                        "px-3",
                        "py-1",
                        term === 'long_term' ? "border-b-2" : ""
                    )}>All time</button>
                </div>

                <div>
                    {items && <ItemDisplayer items={items} />}
                </div>
            </SpotifyContainer>
        </Template>
    )
}