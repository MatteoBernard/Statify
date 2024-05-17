import {setError, setLoading, setPlaylists} from "../reducers/playlists";
import {store} from "../store";
import {fetchUserPlaylists} from "../api/spotify";

export const getUserPlaylists = async (token: string) => {
    store.dispatch(setLoading())
    return fetchUserPlaylists(token)
        .then(playlists => {
            store.dispatch(setPlaylists(playlists))
            return Promise.resolve(playlists)
        })
        .catch(error => {
            console.error(error)
            store.dispatch(setError(error))
        })
}