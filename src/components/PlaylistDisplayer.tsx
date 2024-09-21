import {Link} from "react-router-dom";
import {Playlist} from "../types";
import {SpotifySubcontainer} from "./SpotifySubcontainer";
import {clsx} from "clsx";
import {useState} from "react";
import {HoverOverlay} from "./HoverOverlay";
import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;

type PlaylistDisplayerProps = {
    playlist: Playlist;
}

export const PlaylistDisplayer = ({playlist}: PlaylistDisplayerProps) => {

    const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

    return (
        <div>
            <SpotifySubcontainer>
                <div className={clsx(
                    "relative",
                    "flex",
                    "flex-row",
                    "items-center",
                    "w-11/12",
                    "m-auto")}
                     onClick={() => window.open(playlist.external_urls.spotify)}
                     onMouseEnter={() => setHoveredItemId(playlist.id)}
                     onMouseLeave={() => setHoveredItemId(null)}
                >
                    <HoverOverlay visible={hoveredItemId === playlist.id} />
                    <img src={playlist.images[0].url} alt={playlist.name} className={clsx(
                        "object-contain",
                        "h-16",
                        "w-16",
                        "m-2",
                        "md:h-36",
                        "md:w-36",
                        "md:m-3",
                        "md:ml-6",
                        "lg:h-44",
                        "lg:w-44",
                        "lg:m-4",
                        "lg:ml-8",
                    )}/>
                    <div className={clsx(
                        "flex",
                        "flex-col",
                        "text-center",
                        "justify-center",
                        "w-3/4",
                        "ml-4",
                        "md:ml-6",
                        "lg:ml-8",
                        "gap-1",
                        "truncate"
                    )}>
                        <h3 className={clsx(
                            "font-bold",
                            "text-2xl",
                            "truncate",
                            "md:text-3xl",
                            "lg:text-4xl",
                        )}>{playlist.name}</h3>
                        <h2 className={clsx(
                            "font-bold",
                            "truncate",
                            "text-center",
                            "w-11/12",
                            "text-sm",
                            "md:text-xl",
                        )}>{playlist.description}</h2>
                        <h2 className={clsx(
                            "font-bold",
                            "truncate",
                            "text-sm",
                            "md:text-xl",
                        )}>Public : {playlist.public ? "Yes" : "No"}</h2>
                    </div>
                </div>
            </SpotifySubcontainer>
        </div>
    )
}