import {ReactNode} from "react";
import {clsx} from "clsx";

type SpotifyContainerProps = {
    children: ReactNode;
}

export const SpotifyContainer = ({children}: SpotifyContainerProps) => {
    return (
        <div className={clsx(
            "bg-spotifyGrey",
            "w-11/12",
            "m-auto",
            "my-4",
            "rounded-lg",
            "p-4",
        )}>
            {children}
        </div>
    )
}