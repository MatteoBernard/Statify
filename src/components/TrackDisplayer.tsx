import {Track} from "../types";
import {SpotifySubcontainer} from "./SpotifySubcontainer";
import {clsx} from "clsx";

type TrackDisplayerProps = {
    track: Track;
    index: number;
}

export const TrackDisplayer = ({track, index}: TrackDisplayerProps) => {

    const duration_msToMinutes = (duration_ms: number) => {
        const minutes = Math.floor(duration_ms / 60000);
        const seconds = ((duration_ms % 60000) / 1000).toFixed(0);
        return `${minutes}:${parseInt(seconds) < 10 ? "0" + seconds : seconds}`;
    }

    return (
        <SpotifySubcontainer>
            <div onClick={() => window.open(track.external_urls.spotify)} className={clsx(
                "flex",
                "flex-col",
                "md:flex-row",
                "items-center",
                "justify-between",
                "p-3"
            )}>
                <img src={track.album.images[0].url} alt={track.name} className={clsx(
                    "object-contain",
                    "h-28",
                    "w-28",
                    "m-2",
                    "md:h-36",
                    "md:w-36",
                    "md:m-3",
                    "lg:h-44",
                    "lg:w-44",
                    "lg:m-4",
                )} />
                <div className={clsx(
                    "flex",
                    "flex-col",
                    "items-center",
                    "justify-center",
                    "text-center",
                    "w-1/3",
                    "m-3"
                )}>
                    <h3 className={clsx(
                        "font-bold",
                        "text-lg",
                    )}>{track.name}</h3>
                    <h4 className={clsx(
                        "text-sm",
                    )}>{track.artists.map(artist => artist.name).join(", ")}</h4>
                </div>
                <h4>{duration_msToMinutes(track.duration_ms)}</h4>
            </div>
        </SpotifySubcontainer>
    )
}