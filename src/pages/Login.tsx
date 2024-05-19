import {
    getUserPlaylistContent,
    getUserPlaylists,
    getUserTopTracks,
    getUserTopArtists,
    useAppSelector, getUserRecentlyPlayed, useAppDispatch, getUser
} from "../redux";
import ConfirmLoginButton from "../components/ConfirmLoginButton";
import {useEffect} from "react";
import {Playlist} from "../types";
import {AUTH_URL} from "../constants/authentification";
import {setToken} from "../redux/reducers/auth";
import {clsx} from "clsx";
import statify from "../assets/statify.png";
import localStorage from "redux-persist/es/storage";

export const Login = () => {

    const dispatch = useAppDispatch();
    const {token, user} = useAppSelector(state => state.auth);
    const {playlists} = useAppSelector(state => state.playlists);

    const handleLogin = (): void => {
        window.location.href = AUTH_URL;
    }

    const logout = (): void => {
        localStorage.removeItem('persist:root');
        setTimeout(() => {
            if (window.location.href.includes('access_token')) {
                window.location.hash = '/';
            }
            window.location.reload();
        }, 1500);
    }

    if (window.location.href.includes('access_token') && token === null) {
        const newToken = window.location.hash.split('&')[0].split('=')[1];
        dispatch(setToken(newToken));
        getUser(newToken)
            .then(user => console.log(user))
            .catch(error => console.error(error))
    }

    useEffect(() => {
        if (user && !user.isFetching && !user.error) {
            getUserPlaylists(token);
        }
    }, [user]);

    useEffect(() => {
        if (playlists.items && !playlists.isFetching && !playlists.error) {
            playlists.items.forEach((playlist: Playlist) => {
                const playlistId: string = playlist.id;
                getUserPlaylistContent(token, playlistId);
            });
            getUserTopTracks(token);
            getUserTopArtists(token);
            getUserRecentlyPlayed(token);
        }
    }, [playlists]);

    return (
        <div className={clsx(
            "flex",
            "flex-col",
            "items-center",
            "justify-center",
            "h-screen",
        )}>
            <div className={clsx(
                "flex",
                "items-center",
                "justify-center"
            )}>
                <h1 className={clsx(
                    "text-spotifyGreen",
                    "text-6xl",
                    "font-bold",
                    "m-8",
                )}>Statify</h1>
                <img src={statify} alt={"Statify"} className={clsx(
                    "w-20",
                    "h-20",
                    "rounded-lg",
                )} />
            </div>

            {token == null && (
                <button onClick={handleLogin} className={clsx(
                    "bg-spotifyGrey",
                    "text-white",
                    "py-3",
                    "px-5",
                    "rounded-lg",
                    "duration-300",
                    "text-spotifyBlack",
                    "content-center",
                    "text-xl"
                )}>Login with Spotify</button>
            )}

            {token != null && user && !user.isLoading && (
                <div className={clsx(
                    "flex",
                    "flex-col",
                    "items-center",
                    "justify-center",
                    "rounded-2xl",
                    "p-4",
                    "m-4",
                )}>
                    <ConfirmLoginButton/>
                    <button onClick={logout} className={clsx(
                        "text-white",
                        "font-semibold",
                        "text-lg",
                        "mt-2"
                    )}>Logout</button>
                </div>
            )}
        </div>
    );
};