import {clsx} from "clsx";
import {SpotifyContainer} from "./SpotifyContainer";
import {useAppSelector} from "../redux";

export const UserProfileData = () => {

    const {user} = useAppSelector(state => state.auth);

    return (
        <SpotifyContainer>
            <div className={clsx(
                "flex",
                "flex-row",
                "items-center",
                "justify-center",
                "m-5"
            )}>
                <img src={user.images[0].url} alt={user.display_name} onClick={() => window.open(user.external_urls.spotify)} className={clsx(
                    "w-28",
                    "h-28",
                    "mr-10",
                    "md:w-36",
                    "md:h-36",
                    "md:mr-20",
                )}/>
                <div className={clsx(
                    "flex",
                    "flex-col",
                    "items-center",
                    "justify-center",
                    "gap-4"
                )}>
                    <a href={user.external_urls.spotify} target={"_blank"}><h3 className={clsx(
                        "text-white",
                        "font-bold",
                        "text-2xl",
                        "text-center",
                        "md:text-4xl",
                    )}>{user.display_name}</h3></a>
                    <p className={clsx(
                        "text-sm"
                    )}>@{user.id}</p>
                    <p className={clsx(
                        "text-sm"
                    )}>Followers : {user.followers.total}</p>
                </div>
            </div>
        </SpotifyContainer>
    )
}