import {Artist, Playlist, RecentlyPlayedContent, Track} from "../types";
import {clsx} from "clsx";
import {Link} from "react-router-dom";

type PreviewContainerProps = {
    title: string,
    link: string,
    items: Artist[] | Track[] | RecentlyPlayedContent[] | Playlist[];
}

export const PreviewContainer = ({title, link, items}: PreviewContainerProps) => {
    const renderItem = (item: Artist | Track | RecentlyPlayedContent | Playlist) => {
        if ('genres' in item) {
            // Artist
            return (
                <div key={item.id} className={clsx(
                    'flex',
                    'flex-col',
                    'items-center',
                    'text-center',
                    'min-w-fit',
                    'mb-3'
                )}>
                    <img src={item.images[0].url} alt={item.name} onClick={() => window.open(item.external_urls.spotify)} className={clsx(
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
                    )}>{item.name}</h3>
                </div>
            );
        } else if ('album' in item) {
            // Track
            return (
                <div key={item.id} className={clsx(
                    'flex',
                    'flex-col',
                    'items-center',
                    'text-center',
                    "min-w-fit",
                    'mb-3'
                )}>
                    <img src={item.album.images[0].url} alt={item.name} onClick={() => window.open(item.external_urls.spotify)} className={clsx(
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
                    )}>{item.name}</h3>
                </div>
            );
        } else if ('track' in item) {
            // RecentlyPlayedContent
            return (
                <div key={item.played_at} onClick={() => window.open(item.track.external_urls.spotify)} className={clsx(
                    'flex',
                    'flex-col',
                    'items-center',
                    'text-center',
                    "min-w-fit",
                    'mb-3'
                )}>
                    <img src={item.track.album.images[0].url} alt={item.track.name} className={clsx(
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
                <div key={item.id} className={clsx(
                    'flex',
                    'flex-col',
                    'items-center',
                    'text-center',
                    "min-w-fit",
                    'mb-3'
                )}>
                    <img src={item.images[0].url} alt={item.name} onClick={() => window.open(item.external_urls.spotify)} className={clsx(
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
                    )}>{item.name}</h3>
                </div>
            );
        }
    }

    return (
        <div className={clsx(
            "grid",
            "grid-cols-1",
            "md:grid-cols-5",
            "gap-4",
            'mx-3',
            'my-7'
        )}>
            <div className={clsx(
                "col-span-full",
                "flex",
                "justify-between",
                "items-center",
                "mb-4"
            )}>
                <h2 className={clsx(
                    "text-2xl",
                    "font-bold",
                )}>{title}</h2>
                <Link to={link}>See more</Link>
            </div>
            <div className={clsx(
                "col-span-full",
                "overflow-y-auto",
                "flex",
                "flex-row",
                "scrollbar",
                "scrollbar-thumb-spotifyLightGrey",
            )}>
                {Array.isArray(items) ? items.slice(0, 15).map((item, index) => renderItem(item)) : null}
            </div>
        </div>
    )
}