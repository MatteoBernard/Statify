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
                <img src={user.images[0].url} alt={user.display_name} className={clsx(
                    "rounded-lg",
                    "w-24",
                    "h-24",
                    "mr-10",
                    "md:w-32",
                    "md:h-32",
                    "md:mr-20",
                )}/>
                <div className={clsx(
                    "flex",
                    "flex-col",
                    "items-center",
                    "justify-center",
                    "gap-4"
                )}>
                    <a href={user.uri}><h3 className={clsx(
                        "text-white",
                        "font-bold",
                        "text-2xl",
                        "text-center",
                        "md:text-4xl",
                    )}>{user.display_name}</h3></a>
                    <p className={clsx(
                        "text-sm"
                    )}>@{user.id}</p>
                </div>
            </div>
        </SpotifyContainer>
    )
}