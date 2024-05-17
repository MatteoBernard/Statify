import {
    getUserPlaylistContent,
    getUserPlaylists,
    getUserTopTracks,
    getUserTopArtists,
    useAppSelector, getUserRecentlyPlayed, useAppDispatch, getUser
} from "../redux";
import ConfirmLoginButton from "../components/buttons/ConfirmLoginButton";
import {useEffect} from "react";
import {Playlist} from "../types";
import {AUTH_URL} from "../constants/authentification";
import {setToken} from "../redux/reducers/auth";

export const Login = () => {

    const dispatch = useAppDispatch();
    const {token, user} = useAppSelector(state => state.auth);
    const {playlists} = useAppSelector(state => state.playlists);

    const handleLogin = (): void => {
        window.location.href = AUTH_URL;
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
        <div>
            <h1>Login</h1>
            {token == null && (
                <button onClick={handleLogin}>Login with Spotify</button>
            )}
            {token != null && user && !user.isLoading && (
                <div>
                    <ConfirmLoginButton />
                </div>
            )}
        </div>
    );
};