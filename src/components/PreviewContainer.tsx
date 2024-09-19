import {useState} from "react";
import {Artist, Playlist, RecentlyPlayedContent, Track} from "../types";
import {clsx} from "clsx";
import {Link} from "react-router-dom";
import {HoverOverlay} from "./HoverOverlay";

type PreviewContainerProps = {
    title: string,
    link: string,
    items: Artist[] | Track[] | RecentlyPlayedContent[] | Playlist[];
}

export const PreviewContainer = ({title, link, items}: PreviewContainerProps) => {
    const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

    const renderItem = (item: Artist | Track | RecentlyPlayedContent | Playlist) => {
        const itemId = 'genres' in item ? item.id : 'album' in item ? item.id : 'track' in item ? item.played_at : item.id;

        return (
            <div
                key={itemId}
                className={clsx(
                    'relative',
                    'flex',
                    'flex-col',
                    'items-center',
                    'text-center',
                    'min-w-fit',
                    'mb-3'
                )}
                onMouseEnter={() => setHoveredItemId(itemId)}
                onMouseLeave={() => setHoveredItemId(null)}
                onClick={() => window.open('genres' in item ? item.external_urls.spotify : 'album' in item ? item.external_urls.spotify : 'track' in item ? item.track.external_urls.spotify : item.external_urls.spotify)}
            >
                <img src={'genres' in item ? item.images[0].url : 'album' in item ? item.album.images[0].url : 'track' in item ? item.track.album.images[0].url : item.images[0].url} alt={"Cover image"} className={clsx(
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
                )}>{'genres' in item ? item.name : 'album' in item ? item.name : 'track' in item ? item.track.name : item.name}</h3>
                <HoverOverlay visible={hoveredItemId === itemId} />
            </div>
        );
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
                {Array.isArray(items) ? items.slice(0, 10).map((item, index) => renderItem(item)) : null}
            </div>
        </div>
    )
}