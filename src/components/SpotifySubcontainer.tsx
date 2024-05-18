import {ReactNode} from "react";
import {clsx} from "clsx";

type SpotifySubcontainerProps = {
    children: ReactNode;
}

export const SpotifySubcontainer = ({children}: SpotifySubcontainerProps) => {
    return (
        <div className={clsx(
            "bg-spotifyLightGrey",
            "w-11/12",
            "m-auto",
            "my-3",
            "rounded-lg",
            "p-3",
        )}>
            {children}
        </div>
    )
}