import {Artist, Playlist, RecentlyPlayedContent, Track} from "../types";
import {clsx} from "clsx";

type ItemDisplayerProps = {
    items: Artist[] | Track[] | RecentlyPlayedContent[] | Playlist[];
}

export const ItemDisplayer = ({items}: ItemDisplayerProps) => {
    const renderItem = (item: Artist | Track | RecentlyPlayedContent | Playlist, index: number) => {
        if ('genres' in item) {
            // Artist
            return (
                <div key={index} className={clsx(
                    "flex",
                    "flex-col",
                    "items-center",
                    "text-center",
                    "min-w-fit",
                    "mb-3"
                )}>
                    <img src={item.images[0].url} alt={item.name} onClick={() => window.open(item.external_urls.spotify)} className={clsx(
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
                    <h3 className={clsx(
                        "truncate",
                        "w-28",
                    )}>{index + 1}. {item.name}</h3>
                </div>
            );
        } else if ('album' in item) {
            // Track
            return (
                <div key={index} className={clsx(
                    "flex",
                    "flex-col",
                    "items-center",
                    "text-center",
                    "min-w-fit",
                    "mb-3"
                )}>
                    <img src={item.album.images[0].url} alt={item.name} onClick={() => window.open(item.external_urls.spotify)} className={clsx(
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
                    <h3 className={clsx(
                        "truncate",
                        "w-28",
                    )}>{index + 1}. {item.name}</h3>
                </div>
            );
        } else if ('track' in item) {
            // Recently played
            return (
                <div key={item.played_at} className={clsx(
                    "flex",
                    "flex-col",
                    "items-center",
                    "text-center",
                    "min-w-fit",
                    "mb-3"
                )}>
                    <img src={item.track.album.images[0].url} alt={item.track.name} onClick={() => window.open(item.track.external_urls.spotify)} className={clsx(
                        'object-contain',
                        'h-28',
                        'w-28',
                        'm-2',
                        'lg:h-40',
                        'lg:w-40',
                        'lg:m-4',
                    )}/>
                    <h3 className={clsx(
                        "truncate",
                        "w-28",
                    )}>{item.track.name}</h3>
                </div>
            );
        } else {
            // Playlist
            return (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <img src={item.images[0].url} alt={item.name}/>
                </div>
            );
        }
    }

    return (
        <div className={clsx(
            "grid",
            "grid-cols-2",
            "md:grid-cols-3",
            "lg:grid-cols-4",
            "gap-4",
            "mt-4",
        )}>
            {items.map(renderItem)}
        </div>
    );
}