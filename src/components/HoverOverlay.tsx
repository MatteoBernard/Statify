import {clsx} from "clsx";
import spotifyLogo from "../assets/spotify.png";

type HoverOverlayProps = {
    visible: boolean;
}

export const HoverOverlay = ({visible}: HoverOverlayProps) => {
    return (
        <div className={clsx(
            "absolute",
            "flex",
            "items-center",
            "justify-center",
            "bg-spotifyBlack",
            "text-white",
            "transition-opacity",
            visible ? "opacity-100" : "opacity-0",
            "pointer-events-none",
            "p-2",
            "rounded-lg"
        )} style={{ top: 0, left: 0 }}>
            <img src={spotifyLogo} alt="Spotify Logo" className="h-6 w-6 mr-2" />
            <span>See on Spotify</span>
        </div>
    );
}