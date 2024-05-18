import {clsx} from "clsx";
import { MdExitToApp } from "react-icons/md";
import statify from "../assets/statify.png";
import {ReactNode} from "react";
import localStorage from "redux-persist/es/storage";
import {Link} from "react-router-dom";

type TemplateProps = {
    children: ReactNode
    title: string
}

export const Template = ({children, title}: TemplateProps) => {

    const logout = () => {
        localStorage.removeItem('persist:root');
        window.location.href = '/';
    }

    return (
        <div>
            <div className={clsx(
                "flex",
                "justify-between",
                "items-center",
                "p-4",
                "mb-8",
                "bg-spotifyGrey",
                "text-white",
            )}>
                <div className={clsx(
                    "flex",
                    "items-center",
                )}>
                    <Link to={"/dashboard"}>
                        <img src={statify} alt={"Statify"} className={clsx(
                            "w-10",
                            "h-10",
                            "mr-4",
                            "rounded-lg"
                        )}/>
                    </Link>
                    <h1>{title}</h1>
                </div>
                <button onClick={logout} className={clsx(
                    "text-white",
                    "p-2",
                    "rounded-lg",
                    "bg-spotifyBlack",
                    "hover:bg-spotifyLightGrey",
                )}>
                    <MdExitToApp size={30} />
                </button>
            </div>
            {children}
        </div>
    )
}