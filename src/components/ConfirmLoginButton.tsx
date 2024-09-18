import {useAppSelector} from "../redux";
import {Link} from "react-router-dom";
import {clsx} from "clsx";

const ConfirmLoginButton = () => {

    const {user} = useAppSelector(state => state.auth)

    return (
        <Link to={"/dashboard"} className={clsx(
            "flex",
            "flex-col",
            "items-center",
            "justify-center",
            "bg-spotifyGrey",
            "rounded-2xl",
            "p-4",
            "m-4",
        )}>
            <img src={user.images[0].url} className={clsx(
                "rounded-lg",
                "w-24",
                "h-24",
            )}/>
            <p className={clsx(
                "text-white",
                "font-semibold",
                "text-lg",
                "mt-2"
            )}>Continue as <span className={clsx(
                "italic"
            )}>{user.display_name}</span></p>
        </Link>
    );
}

export default ConfirmLoginButton;